import "./header.scss";
import Navigation from "../../components/navigation/navigation";
import LogoHeader from "../../img/LogoHeader.JPG";

function Header() {
  return (
    <header>
      <img src={LogoHeader} className="logoheader" alt="Logo" />
      <Navigation />
    </header>
  );
}

export default Header;
