import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ShoppingCart } from "lucide-react";

const NAMES = [
  "João S.", "Maria M.", "Pedro H.", "Ana C.", "Lucas F.", "Mariana R.", 
  "Ricardo G.", "Fernanda L.", "Gabriel B.", "Beatriz O.", "Matheus V.", 
  "Camila T.", "Rodrigo P.", "Juliana S.", "Thiago M.", "Larissa K."
];

const CITIES = [
  "São Paulo/SP", "Rio de Janeiro/RJ", "Belo Horizonte/MG", "Curitiba/PR", 
  "Porto Alegre/RS", "Salvador/BA", "Fortaleza/CE", "Brasília/DF", 
  "Goiânia/GO", "Recife/PE", "Manaus/AM", "Florianópolis/SC", 
  "Vitória/ES", "Belém/PA", "Cuiabá/MT", "Natal/RN"
];

export const NotificationPopup = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "" });

  useEffect(() => {
    const showNotification = () => {
      const name = NAMES[Math.floor(Math.random() * NAMES.length)];
      const city = CITIES[Math.floor(Math.random() * CITIES.length)];
      setData({ name, city });
      setVisible(true);

      // Hide after 5 seconds
      const hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 5000);
      
      return hideTimeout;
    };

    // First notification after 3 seconds
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 3000);

    // Dynamic interval between 10 and 20 seconds
    const intervalTrigger = () => {
      const nextDelay = 10000 + Math.random() * 10000;
      return setTimeout(() => {
        showNotification();
        intervalTrigger();
      }, nextDelay);
    };

    let nextTimer: NodeJS.Timeout;
    const startCycle = setTimeout(() => {
      nextTimer = intervalTrigger();
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(startCycle);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 z-50 pointer-events-none select-none"
        >
          <div className="bg-yellow-400 border border-yellow-500 rounded-2xl p-4 shadow-2xl flex items-center gap-4 max-w-[320px]">
            <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0 relative">
               <div className="absolute inset-0 rounded-full animate-ping bg-black/5" />
               <ShoppingCart className="w-6 h-6 text-black relative z-10" />
            </div>
            <div className="flex-1">
              <p className="text-black text-sm font-medium leading-tight">
                <span className="font-bold">{data.name}</span> de {data.city}
              </p>
              <p className="text-black/80 text-xs mt-0.5">
                Acabou de adquirir o <span className="font-bold text-black">Resgate Capilar 30D</span>
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                 <span className="text-[10px] text-black uppercase font-bold tracking-widest">Acesso liberado</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
