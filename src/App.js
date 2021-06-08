import Header from "./components/Header/index.js";
import BgHero from "./components/BgHero/index.js";
import ContentMain from "./components/ContentMain/index.js";
import Social from "./components/Social/index.js";
import Slider from "./components/Slider/index.js";
import ContentBody from "./components/ContentBody/index.js";

import "./styles/components/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Social />
      <Slider />
      <ContentMain />
      <BgHero />
      <ContentBody />
    </div>
  );
}

export default App;
