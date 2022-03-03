import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Header from "./components/header/Header.jsx";

const App = () => {

  return (
    <>
      <div className="main_wrapper">
        <Nav />
        <Header />
        <About />
      </div>
    </>
  );
};

export default App;
