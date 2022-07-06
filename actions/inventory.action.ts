import { BaseAction } from "./base.action";
import { Inventory } from "../entities";
import { InteractInventoryDto } from "../dto/interact-inventory.dto";

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
}