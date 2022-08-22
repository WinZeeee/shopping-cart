import { ShopItem } from "../../../common/types";
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";
interface Props {
  Items: ShopItem[];
}

export default function ItemList(props: Props) {
  return (
    <div>
      <h1 className={styles.titleText}>Your Order</h1>
      {props.Items.map((item: ShopItem) => (
        <div>
          <Item key={item.id} Item={item} />
        </div>
      ))}
      <div className="flex justify-end">
        <p>
          Total:{" "}
          <b>
            {props.Items.reduce(
              (acc, item) => acc + item.unitPrice * item.quantity,
              0
            )}
            $
          </b>
        </p>
      </div>
    </div>
  );
}
