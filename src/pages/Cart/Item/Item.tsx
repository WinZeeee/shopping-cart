import CloseIcon from "@mui/icons-material/Close";
import { Col, Row } from "react-bootstrap";
import { ShopItem } from "../../../common/types";
import styles from "./Item.module.scss";

interface Props {
  Item: ShopItem;
}

export default function Item(props: Props) {
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
        <input type="number" id="points" name="points" step="1"></input>
        <CloseIcon />
      </Col>
    </Row>
  );
}
