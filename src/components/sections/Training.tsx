import { motion } from "motion/react";
import { Stethoscope, Brain, Zap, CheckCircle2 } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export const Training = () => {
  return (
    <Section variant="contrast">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Essa IA foi <span className="text-brand-pink">treinada</span> com:
          </h2>
          
          <div className="space-y-6">
            {[
              { icon: Stethoscope, title: "Protocolos clínicos reais", desc: "Baseado em milhares de casos dermatológicos de sucesso." },
              { icon: Brain, title: "Raciocínio médico estruturado", desc: "Lógica diagnóstica aplicada à tecnologia de ponta." },
              { icon: Zap, title: "Análise avançada", desc: "Forma profunda de analisar pele e metabolismo cutâneo." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <Card variant="glass" className="border-brand-lime/20 relative p-10">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-lime/20 blur-3xl rounded-full" />
          <h3 className="text-3xl font-display font-bold mb-6">O resultado?</h3>
          <p className="text-2xl font-medium text-brand-lime mb-8">
            Um sistema que une: Experiência médica + tecnologia.
          </p>
          
          <ul className="space-y-4">
            {["Sem achismo.", "Sem tentativa e erro.", "Sem confusão."].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-xl font-bold">
                <CheckCircle2 className="w-6 h-6 text-brand-pink" />
                {text}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
};
