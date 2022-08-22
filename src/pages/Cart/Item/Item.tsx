import CloseIcon from "@mui/icons-material/Close";
import { Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ShopItem } from "../../../common/types";
import {
  removeItem,
  updateItemQuantity,
} from "../../../redux/SelectedItemsSlice";
import styles from "./Item.module.scss";

interface Props {
  Item: ShopItem;
}

export default function Item(props: Props) {
  const [quantity, setQuantity] = useState(props.Item.quantity);
  const dispatch = useDispatch();

  const updateQuantity = (quantity: number) => {
    if (quantity === 0) {
      dispatch(removeItem(props.Item));
      return;
    }
    const payload = { ...props.Item, quantity };
    dispatch(updateItemQuantity(payload));
    setQuantity(quantity);
  };

  return (
    <Paper elevation={4} className={styles.container + " my-3"}>
      <div className={styles.infoContainer}>
        <div>
          <img src={props.Item.image} alt={props.Item.name} />
        </div>
        <div>
          <p>{props.Item.name}</p>
          <p className={styles.price}>{props.Item.unitPrice}$</p>
        </div>
      </div>
      <div className={styles.quantityContainer}>
        <p>Quantity:</p>
        <input
          type="number"
          id="points"
          value={quantity}
          min="0"
          step="1"
          onChange={(evt) => updateQuantity(parseInt(evt.target.value))}
        ></input>
        <CloseIcon onClick={() => dispatch(removeItem(props.Item))} />
      </div>
    </Paper>
  );
}
