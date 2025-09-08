import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Solutions from "../Solutions/Solutions";
import Articles from "../Articles/Articles";
// import Portfolio from '../Portfolio/Portfolio'
import Contact from "../Contact/Contact";
import ContactSuccess from "../ContactSuccess/ContactSuccess";
import NotFound from "../NotFound/NotFound";

const App = () => (
  <>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions/*" element={<Solutions />} />
      {/* <Route path='/portfolio' element={<Portfolio />} /> */}
      <Route path="/articles" element={<Articles />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/success" element={<ContactSuccess />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

export default App;
