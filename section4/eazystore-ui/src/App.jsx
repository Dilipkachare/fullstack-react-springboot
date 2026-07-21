import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./custom.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
