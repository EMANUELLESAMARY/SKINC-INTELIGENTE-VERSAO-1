import { ReactNode, Key } from "react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "outline" | "solid";
  delay?: number;
  key?: Key;
}

export const Card = ({ children, className = "", variant = "glass", delay = 0 }: CardProps) => {
  const variants = {
    glass: "bg-brand-purple-light/50 backdrop-blur-md border border-white/10",
    outline: "bg-transparent border border-brand-pink/20",
    solid: "bg-brand-purple-light border border-white/5",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`rounded-2xl p-8 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
};
