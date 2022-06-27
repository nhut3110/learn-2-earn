import { AsyncStorageStatic } from "react-native";

export class StorageProvider {
  private readonly storageInstance: AsyncStorageStatic;

  constructor(storage: AsyncStorageStatic) {
    this.storageInstance = storage; 
  }

  async setItem(
    key: string,
    value: string, 
  ): Promise<boolean> {
    try {
      await this.storageInstance.setItem(key, value);
      return true; 
    } catch {
      return false; 
    }
  }

  async getItem(
    key: string
  ): Promise<string | null> {
    try {
      return this.storageInstance.getItem(key);
    } catch {
      return null;
    }
  }
}