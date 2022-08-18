import { useSelector } from "react-redux";
import { selectSelectedItems } from "../../features/SelectedItemsSlice";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ItemList from "./ItemList/ItemList";

export default function Cart() {
  const selectedItems = useSelector(selectSelectedItems);
  return (
    <MainLayout>
      <ItemList Items={selectedItems} />
    </MainLayout>
  );
}
