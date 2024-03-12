import "./App.css";
import Heor from "./components/Heor";
import Heor2 from "./components/Heor2";
import Hero3 from "./components/Hero3";
import Navigation from "./components/Navigation";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Sponser from "./components/Sponser";
import UserStats from "./components/UserStats";
import Button from "./components/miniComponent/Button";
import Image from "./components/miniComponent/Image";

function App() {
  return (
    <>
    <Navigation />
   <Heor />
      <Sponser />
      <Heor2/>
      <Hero3 />
      <UserStats />
      <Review />
      <Pricing />
    </>
  );
}

export default App;
