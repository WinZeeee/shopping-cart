import axios from "axios";
import { useEffect, useState } from "react";
import { ShopItem } from "../../common/types";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ItemList from "./ItemList/ItemList";

export default function Home() {
  const [Items, setSetItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/quybui370/demo/products")
      .then((res) => {
        setSetItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainLayout>
      <ItemList Items={Items} />
    </MainLayout>
  );
}
