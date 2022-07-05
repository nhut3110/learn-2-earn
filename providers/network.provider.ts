import axios from "axios";
import { RegistryProvider } from "./registry.provider";
import { NetworkOptions } from "../actions/base.action";

export class NetworkProvider {
  async request<T>(
    endpoint: string,  
    options: NetworkOptions, 
  ): Promise<T>{
    const data = await axios(`${RegistryProvider.apiEndPoint}${endpoint}`, {
      method: options?.method, 
      params: options?.params, 
      data: options?.body, 
    });
    
    console.log("network response", data);
    return (data.data as T); 
  }
}