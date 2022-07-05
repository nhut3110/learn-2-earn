import { BaseAction } from "./base.action";
import { LoginResponse } from "../entities/";

export class AuthAction extends BaseAction {
  async login(
    username: string, 
    password: string
  ): Promise<LoginResponse> {
    return this.networkProvider.request<LoginResponse>(
      "/auth/login", {
        method: "POST",
        data: { username, password },
      }
    );
  }
}