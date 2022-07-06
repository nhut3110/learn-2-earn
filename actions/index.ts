import { AuthAction } from "./auth.action";
import { UserAction } from "./user.action";
import { InventoryAction } from "./inventory.action";

export const getAuthAction = () => new AuthAction();

export const getUserAction = () => new UserAction();

export const getInventoryAction = () => new InventoryAction();