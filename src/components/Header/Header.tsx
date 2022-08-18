import { ArrowBack } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Link to="/cart">
        <ShoppingCartIcon />
      </Link>
      <Link to="/">
        <ArrowBack />
      </Link>
    </div>
  );
}
