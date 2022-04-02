import "./nav.scss";

const Nav = () => {
  return (
    <>
      <nav id="nav">
        <a href="./../../../public/index.html" className="logo">Restaurant</a>
        <ul className="desktopMenu">
          <li><a href="#nav">Main Page</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="hamburger">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className="mobileMenu">
          <ul className="mobileMenu_li">
            <li><a href="#nav">Main Page</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
