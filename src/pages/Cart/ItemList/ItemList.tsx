import { Row } from "react-bootstrap";
import { ShopItem } from "../../../common/types";
import Item from "../Item/Item";

interface Props {
  Items: ShopItem[];
}

export default function ItemList(props: Props) {
  return (
    <div>
      {props.Items.map((item: ShopItem) => (
        <Row>
          <Item Item={item} />
        </Row>
      ))}
      <div>
        <p>
          Total:{" "}
          <b>
            {props.Items.reduce(
              (acc, item) => acc + item.unitPrice * item.quantity,
              0
            )}
          </b>
          $
        </p>
      </div>
    </div>
  );
}
