import AsyncStorage from '@react-native-async-storage/async-storage';
import { NetworkProvider } from "../providers/network.provider";
import { StorageProvider } from "../providers/storage.provider";
import { RegistryProvider } from "../providers/registry.provider";

export type NetworkOptions = {
  networkType?: string;
  data?: any; 
  params?: any; 
  method: string; 
  headers?: any;
};

export class BaseAction {
  protected readonly networkProvider: NetworkProvider;

  protected readonly storageProvider: StorageProvider;

  constructor() {
    this.networkProvider = new NetworkProvider();

    this.storageProvider = new StorageProvider(AsyncStorage);
  }

  async requestWithCredential<T>(
    endPoint: string,
    options: NetworkOptions, 
  ): Promise<T> {
    const authTokenFromStorage = (await this.storageProvider.getItem(RegistryProvider.jwtKey)) || "";
    return this.networkProvider.request<T>(
      endPoint, {
        ...options, 
        data: options.data,
        headers: {
          Authorization: `Bearer ${authTokenFromStorage}`,
        }
      }
    ); 
  }
}