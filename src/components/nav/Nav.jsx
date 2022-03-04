import "./nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <a href="./../../../public/index.html" class="logo">Restaurant</a>
        <ul class="desktopMenu">
          <li><a href="#">Main Page</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div class="hamburger">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>

        <div class="mobileMenu">
          <ul class="mobileMenu_li">
            <li><a href="#">Main Page</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
