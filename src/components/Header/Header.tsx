import { ArrowBack } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ShopItem } from "../../common/types";
import { selectSelectedItems } from "../../features/SelectedItemsSlice";
import styles from "./Header.module.scss";

export default function Header() {
  const selectedItems = useSelector(selectSelectedItems);
  const navigate = useNavigate();
  const totalNumOfItems = selectedItems.reduce(
    (acc: number, item: ShopItem) => {
      return acc + item.quantity;
    },
    0
  );

  let location = useLocation();
  let pageName = "";
  switch (location.pathname) {
    case "/":
      pageName = "Shopping Page";
      break;
    case "/cart":
      pageName = "Cart";
      break;
    default:
      pageName = "";
      break;
  }

  const handleRedirectToCart = () => {
    console.log("redirect to cart");
    if (totalNumOfItems > 0) {
      navigate("/cart");
    }
  };

  return (
    <div className={styles.container}>
      <div className="container mx-auto flex items-center">
        <div className="flex lg:justify-start justify-center w-1/3">
          <Logo width="10rem" />
        </div>
        <div className={styles.pageTitle + " lg:my-0 my-3 w-1/3"}>
          <h1>{pageName}</h1>
        </div>
        <div className="flex lg:justify-end justify-center w-1/3">
          {pageName === "Cart" && (
            <button>
              <Link to="/">
                <ArrowBack />
              </Link>
            </button>
          )}
          <div
            className={styles.cartIcon}
            onClick={() => handleRedirectToCart()}
          >
            <ShoppingCartIcon fontSize="large" />
            {totalNumOfItems > 0 && (
              <span className={styles.cartNumber}>{totalNumOfItems}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
