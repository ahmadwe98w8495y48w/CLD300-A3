
import "./styles/variables.scss";
import "./styles/app.scss";

import Navbar from "./components/Navbar/Navbar.js";
import Router from "./Router.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  return (
    <>
      <Navbar/>
      <Router/>
      <Footer />
    </>
  );
}

export default App;