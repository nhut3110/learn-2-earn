import { AuthAction } from "./auth.action";
import { UserAction } from "./user.action";
import { InventoryAction } from "./inventory.action";
import { TodoAction } from "./todo.action";

export const getAuthAction = () => new AuthAction();

export const getUserAction = () => new UserAction();

export const getInventoryAction = () => new InventoryAction();

export const getTodoAction = () => new TodoAction();