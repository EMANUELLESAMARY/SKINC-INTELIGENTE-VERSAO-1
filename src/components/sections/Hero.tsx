import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Activity, Zap, AlertTriangle, ShieldCheck, ChevronDown, Play } from "lucide-react";
import { Button } from "../ui/Button";

interface HeroProps {
  onVideoStart: () => void;
}

export const Hero = ({ onVideoStart }: HeroProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onVideoStart();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-pink/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-lime/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center space-y-8"
      >
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink font-bold text-sm uppercase tracking-widest"
        >
          Protocolo Testado em 30 Dias
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight uppercase tracking-tighter">
          RESGATE CAPILAR <span className="gradient-text">30 D</span>
        </h1>
        
        {/* VSL Video Container with Masking to hide Drive UI */}
        <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-black mb-12">
          {/* Cover Interaction Layer */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md cursor-pointer group transition-all duration-300"
              onClick={handlePlay}
            >
              <div className="w-20 h-20 rounded-full bg-brand-pink flex items-center justify-center shadow-[0_0_30px_rgba(255,0,153,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
              <p className="mt-4 text-white font-bold uppercase tracking-widest text-sm animate-pulse px-6 text-center">Clique aqui para ver a apresentação</p>
            </div>
          )}
          
          {/* Iframe Cropping Container to hide Drive Header/Sidebar */}
          <div className="absolute inset-0 z-10 w-full h-full overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/17mCKPrCrWTU49f-MRMJaRir1cWTKQwOA/preview"
              className="absolute w-full h-[calc(100%+80px)] -top-[40px] left-0 pointer-events-auto"
              allow="autoplay; fullscreen; picture-in-picture"
              frameBorder="0"
            ></iframe>
          </div>
          
          {/* Anti-Escape Protection Layer (Optional but helpful: blocks clicks to sensitive areas) */}
          <div className="absolute top-0 right-0 w-24 h-16 z-20 pointer-events-none" />
        </div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
          Reduza a queda capilar e fortaleça seus fios em 30 dias com um protocolo simples, prático e baseado em ciência.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-brand-lime font-bold max-w-3xl mx-auto leading-relaxed uppercase tracking-wide"
        >
          Assista ao vídeo acima para entender como destravar o seu crescimento capilar hoje mesmo.
        </motion.div>

        {!isPlaying && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
            {[
              { icon: AlertTriangle, text: "Trava a Queda." },
              { icon: Zap, text: "Ativa o Crescimento." },
              { icon: Activity, text: "Monitora os Resultados." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-brand-purple-light/50 backdrop-blur-md border border-brand-pink/20 p-6 rounded-2xl flex flex-col items-center gap-3"
              >
                <item.icon className="w-8 h-8 text-brand-lime" />
                <span className="font-bold text-lg">{item.text}</span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {!isPlaying && (
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      )}
    </section>
  );
};
