import { BaseAction } from "./base.action";
import { User } from "../entities";

export class UserAction extends BaseAction {
  getProfile(): Promise<User> {
    return this.requestWithCredential<User>(
      "/user/profile", {
        method: "GET",
      }
    ); 
  };
}