import Button from "react-bootstrap/Button";
import { ShopItem } from "../../../common/types";
import styles from "./Item.module.scss";

interface Props {
  Item: ShopItem;
}

export default function Item(props: Props) {
  return (
    <div className={styles.container}>
      <img src={props.Item.image} alt="Product showcasing"></img>
      <p>{props.Item.name}</p>
      <Button variant="primary">Add to Cart</Button>
    </div>
  );
}
