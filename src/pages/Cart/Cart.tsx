import dummy from "../../dummy.json";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ItemList from "./ItemList/ItemList";

export default function Cart() {
  return (
    <MainLayout>
      <ItemList Items={dummy} />
    </MainLayout>
  );
}
