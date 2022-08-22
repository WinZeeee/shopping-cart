import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { selectSelectedItems } from "../../redux/SelectedItemsSlice";
import ItemList from "./ItemList/ItemList";

export function CartContainer() {
  const selectedItems = useSelector(selectSelectedItems);

  if (selectedItems.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <ItemList Items={selectedItems} />
    </MainLayout>
  );
}
