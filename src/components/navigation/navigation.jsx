import "./navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/a-propos/">A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
