import { BaseAction } from "./base.action";
import { InteractInventoryDto } from "../dto/interact-inventory.dto";
import { BuyInventoryDto } from "../dto/buy-inventory.dto";
import { 
  Inventory,
  InventoryOwn
} from "../entities";

export class InventoryAction extends BaseAction {
  async getInventories(): Promise<Inventory[]> {
    return this.requestWithCredential<Inventory[]>(
      "/inventory", {
        method: "GET",
      }
    );
  }

  async getDetail(id: string): Promise<Inventory> {
    return this.networkProvider.request<Inventory>(
      `/inventory/detail/${id}`, {
        method: "GET", 
      }
    );
  }

  async interact(
    interactInventoryDto: InteractInventoryDto,
  ): Promise<Inventory> {
    return this.requestWithCredential<Inventory>(
      `/inventory/interact`, {
        method: "POST",
        data: interactInventoryDto,
      }
    );
  }

  async getUserInventories(): Promise<InventoryOwn[]> {
    return this.requestWithCredential<InventoryOwn[]>(
      `/inventory/user-inventories`, {
        method: "GET",
      }
    );
  }
  async buyInventory(
    buyInventoryDto: BuyInventoryDto
  ): Promise<Inventory | null> {
    return this.requestWithCredential<Inventory | null>(
      `/inventory/buy-inventory`, {
        method: "POST",
        data: buyInventoryDto,
      }
    );
  }
}