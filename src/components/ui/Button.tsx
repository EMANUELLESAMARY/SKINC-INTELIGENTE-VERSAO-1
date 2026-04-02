import { motion, HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
}

export const Button = ({ children, variant = "primary", className = "", href, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg text-center uppercase tracking-wider cursor-pointer";
  
  const variants = {
    primary: "bg-brand-pink hover:bg-brand-pink/90 text-white shadow-brand-pink/20",
    secondary: "bg-brand-lime hover:bg-brand-lime/90 text-brand-purple shadow-brand-lime/20",
    outline: "bg-transparent border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/10 shadow-none",
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return <a href={href} className="inline-block">{content}</a>;
  }

  return content;
};
