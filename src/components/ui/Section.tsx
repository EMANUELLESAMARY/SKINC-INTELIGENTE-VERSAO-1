import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "contrast" | "dark";
}

export const Section = ({ children, className = "", id, variant = "default" }: SectionProps) => {
  const variants = {
    default: "bg-brand-purple py-24 px-6",
    contrast: "bg-brand-purple-light py-24 px-6",
    dark: "bg-black py-24 px-6",
  };

  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) => (
  <div className={`max-w-4xl mx-auto text-center mb-16 ${className}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-black mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
