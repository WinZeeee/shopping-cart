import { FormControl, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { ShopItem } from "../../common/types";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ItemList from "./ItemList/ItemList";

export default function Home() {
  const [Items, setSetItems] = useState<ShopItem[]>([]);
  const [Filter, setFilter] = useState<string>("Newest");

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/quybui370/demo/products")
      .then((res) => {
        const newestItems = sortItems(res.data, "Newest");
        setSetItems(newestItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortItems = (items: ShopItem[], sortBy: string) => {
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

  const handleOnChangeFilter = (filter: string) => {
    setFilter(filter);
    const sortedItems = sortItems(Items, filter);
    setSetItems(sortedItems);
  };

  return (
    <MainLayout>
      <div className="container flex justify-end my-5 px-5 lg:px-0">
        <FormControl>
          <Select
            value={Filter}
            onChange={(e) => handleOnChangeFilter(e.target.value)}
            className="w-40"
          >
            <MenuItem value="Newest">Newest</MenuItem>
            <MenuItem value="PriceAsc">Price ASC</MenuItem>
            <MenuItem value="PriceDsc">Price DSC</MenuItem>
          </Select>
        </FormControl>
      </div>
      <ItemList Items={Items} />
    </MainLayout>
  );
}
