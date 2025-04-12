import Header from "./ui/components/Header";
import Footer from "./ui/components/Footer";
import ScatterText from "./ui/components/ScatterText";

// Import Pages
import Home from './sections/Home'
import About from "./sections/About";
import Services from "./sections/Services"
import FAQ from "./sections/FAQ";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <ScatterText />
      <About />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}
