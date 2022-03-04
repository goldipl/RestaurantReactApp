import "./header.scss";
import Background from "../../img/wooden_background.jpg";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-wrapper_background">
        <div className="header-wrapper_background_image"></div>
        <img src={Background} alt="Wooden Background" className="header-wrapper_background_img" />
      </div>
    </div>
  );
};

export default Header;
