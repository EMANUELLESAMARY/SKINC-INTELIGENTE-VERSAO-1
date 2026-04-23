import { useState, useEffect } from "react";
import { Hero } from "./components/sections/Hero";
import { Training } from "./components/sections/Training";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Tools } from "./components/sections/Tools";
import { Testimonials } from "./components/sections/Testimonials";
import { Bonuses } from "./components/sections/Bonuses";
import { Benefits } from "./components/sections/Benefits";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";
import { NotificationPopup } from "./components/ui/NotificationPopup";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    if (timerStarted) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 120000); // 2 minutes (120,000ms)
      return () => clearTimeout(timer);
    }
  }, [timerStarted]);

  const onStartVSL = () => {
    setTimerStarted(true);
  };

  return (
    <div className="min-h-screen bg-brand-purple">
      <Hero onVideoStart={onStartVSL} />
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Training />
            <HowItWorks />
            <Tools />
            <Bonuses />
            <Benefits />
            <CTA />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <NotificationPopup />
    </div>
  );
}
