import { motion } from "motion/react";
import { Microscope, CheckCircle2, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <SectionHeader 
        title="O Caminho da Recuperação" 
        subtitle="3 passos fundamentais para você retomar o controle do seu cabelo."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <Card variant="glass" className="space-y-6">
          <div className="w-14 h-14 rounded-full bg-brand-lime text-brand-purple flex items-center justify-center text-2xl font-black">1</div>
          <h3 className="text-2xl font-bold">Diagnóstico de Nível</h3>
          <p className="text-gray-400">
            Use o termômetro capilar para identificar se sua queda está em nível de risco, alerta ou perigo. Sai da ansiedade, entra no controle.
          </p>
        </Card>

        {/* Step 2 */}
        <Card variant="glass" className="space-y-6">
          <div className="w-14 h-14 rounded-full bg-brand-pink text-white flex items-center justify-center text-2xl font-black">2</div>
          <h3 className="text-2xl font-bold font-bold">Estabilização</h3>
          <p className="text-gray-400">
            Aplique o protocolo de choque para interromper a queda excessiva e preparar o couro cabeludo para o crescimento.
          </p>
        </Card>

        {/* Step 3 */}
        <Card variant="glass" className="space-y-6">
          <div className="w-14 h-14 rounded-full bg-brand-lime text-brand-purple flex items-center justify-center text-2xl font-black">3</div>
          <h3 className="text-2xl font-bold">Fortalecimento</h3>
          <p className="text-gray-400">
            Ative o crescimento de novos fios e devolva densidade ao cabelo com técnicas práticas e nutrição direcionada.
          </p>
        </Card>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center space-y-8"
      >
        <div className="inline-block p-8 glass-card border-brand-lime/30">
          <h4 className="text-3xl font-display font-bold mb-4">Você no controle.</h4>
          <p className="text-xl text-gray-400">Menos queda, mais segurança ao se olhar no espelho.</p>
        </div>
        
        <div>
          <Button href="#checkout" className="text-xl group">
            Quero acessar agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};
