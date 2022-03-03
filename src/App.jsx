import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

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
