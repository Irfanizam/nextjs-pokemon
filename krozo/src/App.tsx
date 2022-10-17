import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Routes from "./router/Routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
