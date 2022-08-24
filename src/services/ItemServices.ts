import axios from "axios";
import { ShopItem } from "../common/types";

export const getShopItems = () => {
    return axios.get("https://my-json-server.typicode.com/quybui370/demo/products");
}

export const sortItems = (items: any, sortBy: string) => {
  switch (sortBy) {
    case "Newest":
      return items
        .sort((a: ShopItem, b: ShopItem) => {
          return a.createdAt - b.createdAt;
        })
        .reverse();
    case "PriceAsc":
      return items.sort((a: ShopItem, b: ShopItem) => {
        return a.unitPrice - b.unitPrice;
      });
    case "PriceDsc":
      return items.sort((a: ShopItem, b: ShopItem) => {
        return b.unitPrice - a.unitPrice;
      });
    default:
      return items;
  }
};