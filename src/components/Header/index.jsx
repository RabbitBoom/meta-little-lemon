import { faBars, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "images/logo-text-light@4x.png";
import { Link } from "react-router";
import "./index.css";
function Header() {
  return (
    <header>
      <button
        role="menu"
        aria-expanded="false"
        aria-controls="dropdown-menu"
        aria-label="close"
      >
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </button>
      <Link to="/">
        <img src={Logo} alt="little lemon" />
      </Link>
      <button aria-label="cart">
        <FontAwesomeIcon icon={faBasketShopping} size="2xl" />
      </button>
    </header>
  );
}

export default Header;
