import Logo from "images/logo-text-light@4x.png";
import { Link } from "react-router";
import "./index.css";
function Header() {
  return (
    <header>
      {/* <Menu /> */}
      <Link to="/">
        <img src={Logo} alt="little lemon" />
      </Link>
      {/* <button aria-label="cart">
        <FontAwesomeIcon icon={faBasketShopping} size="2xl" />
      </button> */}
    </header>
  );
}

export default Header;
