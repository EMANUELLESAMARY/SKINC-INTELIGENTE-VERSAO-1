import { motion } from "motion/react";
import { Microscope, CheckCircle2, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const HowItWorks = () => {
  return (
    <Section>
      <SectionHeader 
        title="Como Funciona" 
        subtitle="Você responde um questionário estratégico e nossa IA faz o trabalho pesado."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1 */}
        <Card variant="glass" className="space-y-6">
          <div className="w-14 h-14 rounded-full bg-brand-lime text-brand-purple flex items-center justify-center text-2xl font-black">1</div>
          <h3 className="text-2xl font-bold">A IA avalia:</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Tipo de pele", "Nível inflamatório", "Sensibilidade", 
              "Histórico de reação", "Idade biológica", "Prioridades"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                {item}
              </div>
            ))}
          </div>
        </Card>

        {/* Step 2 */}
        <Card variant="glass" className="space-y-6 border-brand-pink/30 bg-brand-pink/5">
          <div className="w-14 h-14 rounded-full bg-brand-pink text-white flex items-center justify-center text-2xl font-black">2</div>
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Microscope className="w-6 h-6 text-brand-pink" />
            E entrega:
          </h3>
          <p className="text-xl font-bold text-brand-pink">
            Um protocolo completo, estruturado e exclusivo para você
          </p>
          <div className="space-y-3">
            {[
              "Produtos reais", "Ordem correta", "Frequência exata", "Combinações seguras"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center space-y-8"
      >
        <div className="inline-block p-8 glass-card border-brand-lime/30">
          <h4 className="text-3xl font-display font-bold mb-4">Tudo pronto.</h4>
          <p className="text-xl text-gray-400">Sem precisar pensar. Sem precisar testar.</p>
        </div>
        
        <div>
          <Button href="#checkout" className="text-xl group">
            Gerar meu protocolo agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
