import { BaseAction } from "./base.action";
import { Todo, TodoStatus } from "../entities";

export class TodoAction extends BaseAction {
  async getTodos(): Promise<Todo[]> {
    return this.requestWithCredential<Todo[]>(
      "/todo", {
        method: "GET"
      }
    );
  }

  async updateTodo(todoId: string, payload: {
    title?: string;
    desc?: string;
    status?: TodoStatus;
  }): Promise<Todo> {
    return this.requestWithCredential<Todo>(
      `/todo/${todoId}`, {
        method: "PATCH",
        data: payload,
      }
    );
  }
}