import { BrowserRouter } from "react-router-dom";
import TopBannar from "./Components/TopBannar";
import "../src/css/style.css";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="max-w-[400px] overflow-hidden mx-auto md:max-w-7xl bg-[#161616] text-white">
      <BrowserRouter>
        <TopBannar></TopBannar>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default App;
