import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { ShopItem } from "../../common/types";
import MainLayout from "../../MainLayout";
import { getShopItems, sortItems } from "../../services/ItemServices";
import ItemList from "./ItemList/ItemList";

export default function Home() {
  const [Items, setItems] = useState<ShopItem[]>([]);
  const [Filter, setFilter] = useState<string>("Newest");

  useEffect(() => {
    getShopItems().then((res) => {
      const newestitems = sortItems(res.data, "Newest");
      setItems(newestitems);
    });
  }, []);

  const handleOnChangeFilter = (filter: string) => {
    setFilter(filter);
    const sortedItems = sortItems(Items, filter);
    setItems(sortedItems);
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
