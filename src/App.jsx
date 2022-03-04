import Nav from "./components/nav/Nav.jsx";
import Header from "./components/header/Header.jsx";
import About from "./components/about/About.jsx";
import Menu from "./components/menu/Menu.jsx";
import Contact from "./components/contact/Contact.jsx";

const App = () => {

  return (
    <>
      <div className="main_wrapper">
        <Nav />
        <Header />
        <About />
        <Menu />
        <Contact />
      </div>
    </>
  );
};

export default App;
