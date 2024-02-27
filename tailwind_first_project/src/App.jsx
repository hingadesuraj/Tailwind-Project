import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Testimonial from "./sections/Testimonial";
 

function App() {
  return (
    <>
   <Header />
   <Hero/>
   <About />
   <Testimonial/>
   <Pricing/>
   <Contact/>
   <Footer />

    </>
  );
}

export default App;
