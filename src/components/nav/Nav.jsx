import "./nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <a href="./../../../public/index.html" class="logo">Restaurant</a>
        <ul class="desktopMenu">
          <li><a href="#header">Main Page</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div class="hamburger">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>

        <div class="mobileMenu">
          <ul class="mobileMenu_li">
            <li><a href="#header">Main Page</a></li>
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
