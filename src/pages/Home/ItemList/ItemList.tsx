import { ShopItem } from "../../../common/types";
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

interface Props {
  Items: ShopItem[];
}

export default function ItemList(props: Props) {
  return (
    <div
      className={
        "grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5"
      }
    >
      {props.Items.map((item) => {
        return (
          <div className={styles.item}>
            <Item key={item.id} Item={item} />
          </div>
        );
      })}
    </div>
  );
}
