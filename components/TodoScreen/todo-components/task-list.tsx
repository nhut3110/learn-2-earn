import React, { useCallback, useRef } from "react";
import { AnimatePresence, View } from "moti";
import {
  PanGestureHandlerProps,
  ScrollView,
} from "react-native-gesture-handler";
import TaskItem from "./task-item";
import { makeStyledComponent } from "../utils/styled";
import { Todo, TodoStatus } from "../../../entities";

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

interface TaskListProps {
  data: Todo[];
  editingItemId: string | null;
  onToggleItem: (item: Todo) => void;
  onChangeSubject: (item: Todo, newSubject: string) => void;
  onFinishEditing: (item: Todo) => void;
  onPressLabel: (item: Todo) => void;
  onRemoveItem: (item: Todo) => void;
}

interface TaskItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  data: Todo;
  isEditing: boolean;
  onToggleItem: (item: Todo) => void;
  onChangeSubject: (item: Todo, newSubject: string) => void;
  onFinishEditing: (item: Todo) => void;
  onPressLabel: (item: Todo) => void;
  onRemove: (item: Todo) => void;
}

export const AnimatedTaskItem = (props: TaskItemProps) => {
  const {
    simultaneousHandlers,
    data,
    isEditing,
    onToggleItem,
    onChangeSubject,
    onFinishEditing,
    onPressLabel,
    onRemove,
  } = props;
  const handleToggleCheckbox = useCallback(() => {
    onToggleItem(data);
  }, [data, onToggleItem]);
  const handleChangeSubject = useCallback(
    (subject) => {
      onChangeSubject(data, subject);
    },
    [data, onChangeSubject]
  );
  const handleFinishEditing = useCallback(() => {
    onFinishEditing(data);
  }, [data, onFinishEditing]);
  const handlePressLabel = useCallback(() => {
    onPressLabel(data);
  }, [data, onPressLabel]);
  const handleRemove = useCallback(() => {
    onRemove(data);
  }, [data, onRemove]);
  return (
    <StyledView
      w="full"
      from={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginBottom: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
    >
      <TaskItem
        simultaneousHandlers={simultaneousHandlers}
        subject={data.title}
        isDone={data.status === TodoStatus.done}
        isEditing={isEditing}
        onToggleCheckbox={handleToggleCheckbox}
        onChangeSubject={handleChangeSubject}
        onFinishEditing={handleFinishEditing}
        onPressLabel={handlePressLabel}
        onRemove={handleRemove}
      />
    </StyledView>
  );
};

export default function TaskList(props: TaskListProps) {
  const {
    data,
    editingItemId,
    onToggleItem,
    onChangeSubject,
    onFinishEditing,
    onPressLabel,
    onRemoveItem,
  } = props;
  const refScrollView = useRef(null);

  return (
    <StyledScrollView ref={refScrollView} w="full">
      <AnimatePresence>
        {data.map((item) => (
          <AnimatedTaskItem
            key={item._id}
            data={item}
            simultaneousHandlers={refScrollView}
            isEditing={item._id === editingItemId}
            onToggleItem={onToggleItem}
            onChangeSubject={onChangeSubject}
            onFinishEditing={onFinishEditing}
            onPressLabel={onPressLabel}
            onRemove={onRemoveItem}
          />
        ))}
      </AnimatePresence>
    </StyledScrollView>
  );
}
