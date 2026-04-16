import { motion } from "motion/react";
import { Gift, CheckCircle2, Sparkles, ShoppingBag, ClipboardList } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";

export const Bonuses = () => {
  const bonuses = [
    {
      title: "IA Skincare Pós-Emagrecimento",
      description: "Um sistema com inteligência artificial que analisa sua pele e indica cuidados específicos para recuperar firmeza e aparência.",
      value: "R$ 147",
      icon: Sparkles,
      features: ["Rotina personalizada", "Estratégias anti-flacidez", "Cuidados direcionados"]
    },
    {
      title: "Checklist Diário de Execução",
      description: "Esse material elimina a dúvida diária sobre o que fazer. Você só marca e executa com clareza total.",
      value: "R$ 47",
      icon: ClipboardList,
      features: ["Clareza total diária", "Consistência imediata", "Progresso real"]
    },
    {
      title: "Planner Capilar + Lista de Compras",
      description: "Você não perde tempo pensando no que comprar ou fazer. Planejamento semanal e alimentação direcionada.",
      value: "R$ 67",
      icon: ShoppingBag,
      features: ["Planejamento semanal", "Alimentação para fios", "Execução prática"]
    }
  ];

  return (
    <Section variant="dark" id="bonuses">
      <SectionHeader 
        title="Bônus VIP Exclusivos" 
        subtitle="Ao garantir seu acesso hoje, você desbloqueia mais de R$ 260 em bônus sem custo adicional."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bonuses.map((bonus, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card variant="glass" className="h-full border-brand-lime/20 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Gift className="w-24 h-24 text-brand-lime" />
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-lime/10 flex items-center justify-center">
                  <bonus.icon className="w-6 h-6 text-brand-lime" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{bonus.description}</p>
                  <div className="text-brand-lime font-black line-through opacity-50 text-sm">Valor original: {bonus.value}</div>
                  <div className="text-white font-bold text-xs uppercase tracking-widest mt-1">Hoje: Grátis</div>
                </div>

                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {bonus.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-pink" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
