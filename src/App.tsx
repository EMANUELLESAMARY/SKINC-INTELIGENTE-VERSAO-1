import { Hero } from "./components/sections/Hero";
import { Training } from "./components/sections/Training";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Tools } from "./components/sections/Tools";
import { Testimonials } from "./components/sections/Testimonials";
import { Benefits } from "./components/sections/Benefits";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Training />
      <HowItWorks />
      <Tools />
      <Testimonials />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}
