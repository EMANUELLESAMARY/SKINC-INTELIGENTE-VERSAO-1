import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const CTA = () => {
  return (
    <Section id="checkout" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-brand-pink/10 -z-10" />
      <div className="text-center space-y-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-black leading-tight uppercase tracking-tighter"
        >
          Sua recuperação <br />
          <span className="gradient-text">capilar começa agora</span>
        </motion.h2>
        
        <Card variant="glass" className="border-brand-pink/40 max-w-lg mx-auto p-10">
          <p className="text-lg text-gray-300 mb-4 uppercase tracking-widest font-bold">Oferta do Desafio 30 Dias</p>
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-2xl text-gray-500 line-through lowercase">De R$ 197,00 por apenas</span>
            <span className="text-7xl font-display font-black text-white">R$ 37,00</span>
            <p className="text-xl font-bold text-brand-lime uppercase">ou 5x de R$ 8,19</p>
            <p className="text-sm text-brand-pink font-bold uppercase tracking-widest mt-1">Acesso Vitalício + Bônus</p>
          </div>
          
          <Button 
            href="https://pay.hotmart.com/A104700280D?checkoutMode=10&bid=1775493345458" 
            className="w-full text-2xl py-6"
            onClick={(e) => {
              e.preventDefault();
              const checkoutUrl = "https://pay.hotmart.com/A104700280D?checkoutMode=10&bid=1775493345458";
              
              if (typeof (window as any).fbq === 'function') {
                (window as any).fbq('track', 'InitiateCheckout', {
                  content_name: 'Hair Recovery Checkout',
                  value: 37.00,
                  currency: 'BRL'
                });
              }
              
              setTimeout(() => {
                window.location.href = checkoutUrl;
              }, 200);
            }}
          >
            QUERO MEU ACESSO AGORA
          </Button>
          
          <div className="mt-6 flex items-center justify-center gap-4 grayscale opacity-50">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
          </div>
        </Card>
        
        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest leading-loose">
          Garantia de 7 dias. <br /> Se não gostar, devolvemos seu dinheiro sem burocracia.
        </p>
      </div>
    </Section>
  );
};
