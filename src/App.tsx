import StarryBackground from "./components/common/StarryBackground";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <StarryBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Testimonials />
        {/* <Pricing /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
