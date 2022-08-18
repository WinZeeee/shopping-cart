import { Col, Row } from "react-bootstrap";
import { ShopItem } from "../../../common/types";
import Item from "../Item/Item";
import styles from "./ItemList.module.scss";

interface Props {
  Items: ShopItem[];
}

export default function ItemList(props: Props) {
  return (
    <div className={styles.container}>
      <Row>
        {props.Items.map((item) => {
          return (
            <Col lg={3} md={4} sm={6} className={styles.item}>
              <Item Item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
