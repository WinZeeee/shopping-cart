import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ShopItem } from "../../../common/types";
import {
  removeItem,
  updateItemQuantity,
} from "../../../features/SelectedItemsSlice";
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
    <Row className={styles.container}>
      <Col className={styles.infoContainer}>
        <div>
          <img src={props.Item.image} alt={props.Item.name} />
        </div>
        <div>
          <p>{props.Item.name}</p>
          <p className={styles.price}>{props.Item.unitPrice}$</p>
        </div>
      </Col>
      <Col className={styles.quantityContainer}>
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
      </Col>
    </Row>
  );
}
