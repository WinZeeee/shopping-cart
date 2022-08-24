import { Button, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { ShopItem } from "../../../common/types";
import { addItem } from "../../../redux/SelectedItemsSlice";
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
    <Paper elevation={4} className={styles.container}>
      <img src={props.Item.image} alt="Product showcasing" />
      <p>{props.Item.name}</p>
      <b>{props.Item.unitPrice}$</b>
      <Button variant="contained" onClick={() => handleAddItem(props.Item)}>
        Add to Cart
      </Button>
    </Paper>
  );
}
