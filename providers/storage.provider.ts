import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageProvider {
  private readonly storageInstance: typeof AsyncStorage;

  constructor(storage: typeof AsyncStorage) {
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