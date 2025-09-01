import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Menu() {
    return (
        <button
        role="menu"
        aria-expanded="false"
        aria-controls="dropdown-menu"
        aria-label="close"
      >
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </button>
    )
}

export default Menu;