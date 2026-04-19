import { motion } from "motion/react";
import { ArrowRight, Activity, Zap, AlertTriangle, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero = () => {
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
        
        <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-tight uppercase tracking-tighter">
          RESGATE CAPILAR <span className="gradient-text">30 D</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium">
          Reduza a queda capilar e fortaleça seus fios em 30 dias com um protocolo simples, prático e baseado em ciência.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-brand-lime font-bold max-w-3xl mx-auto leading-relaxed uppercase tracking-wide"
        >
          Você emagreceu. Fez tudo certo. Mas agora paga o preço com queda, afinamento e medo de ficar careca. <span className="text-white underline decoration-brand-pink underline-offset-4 font-bold uppercase tracking-wide">ESTE É O PROTOCOLO QUE VOCÊ PRECISA!</span>
        </motion.div>

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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 line-through text-xl">De R$197</span>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-display font-black text-brand-lime">
                R$ 37,00 à vista
              </span>
              <span className="text-xl md:text-2xl font-bold text-white">
                ou 5x de R$ 8,19
              </span>
              <span className="text-sm uppercase tracking-widest text-brand-pink font-bold mt-1">Oferta Exclusiva</span>
            </div>
          </div>
          
          <Button href="#checkout" className="text-xl group">
            Quero acessar agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Acesso imediato e seguro
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};
