import { BaseAction } from "./base.action";
import { LoginResponse } from "../entities/";
import { RegistryProvider } from "../providers/registry.provider";

export class AuthAction extends BaseAction {
  async login(
    username: string, 
    password: string
  ): Promise<LoginResponse> {
    const loginResponse = await this.networkProvider.request<LoginResponse>(
      "/auth/login", {
        method: "POST",
        data: { username, password },
      }
    );
    if (loginResponse.access_token) {
      await this.storageProvider.setItem(RegistryProvider.jwtKey, loginResponse.access_token);
    }
    return loginResponse;
  }
}