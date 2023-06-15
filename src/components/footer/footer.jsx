import "./footer.scss";
import LogoFooter from "../../img/LogoFooter.JPG";

const Footer = ({ item }) => {
  return (
    <footer>
      <img src={LogoFooter} className="logofooter" alt="Logo" />
      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
