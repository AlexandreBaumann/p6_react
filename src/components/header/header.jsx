import "./header.scss";
import Navigation from "../../components/navigation/navigation";
import LogoHeader from "../../img/LogoHeader.JPG";

function Header() {
  return (
    <header>
      <a href="/">
        <img src={LogoHeader} className="logoheader" alt="Logo" />
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
