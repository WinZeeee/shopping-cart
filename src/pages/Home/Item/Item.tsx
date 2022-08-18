import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { ShopItem } from "../../../common/types";
import { addItem } from "../../../features/SelectedItemsSlice";
import styles from "./Item.module.scss";

interface Props {
  Item: ShopItem;
}

export default function Item(props: Props) {
  const dispatch = useDispatch();

  const handleAddItem = (item: ShopItem) => {
    const modifiedItem = { ...item, quantity: 1 };
    dispatch(addItem(modifiedItem));
  };

  return (
    <div className={styles.container}>
      <img src={props.Item.image} alt="Product showcasing"></img>
      <p>{props.Item.name}</p>
      <Button onClick={() => handleAddItem(props.Item)} variant="primary">
        Add to Cart
      </Button>
    </div>
  );
}
