import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Campaigns from "./components/Campaigns";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <Header />
      {windowWidth <= 767 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWidth > 767 && <Campaigns />}
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
