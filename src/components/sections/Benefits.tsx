import { Clock, DollarSign, ShieldCheck, CheckCircle2, GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";

export const Benefits = () => {
  return (
    <Section variant="contrast" id="benefits">
      <SectionHeader title="Por que confiar na Skincare IA?" />
      
      {/* Expert Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-brand-pink/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <img 
            src="https://i.postimg.cc/59HbDx7k/IMG_2271_(squo1).jpg" 
            alt="Dra. Emanuelle Samary" 
            className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl border border-white/10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 glass-card p-4 border-brand-lime/30 text-center">
            <p className="text-brand-lime font-bold text-sm uppercase tracking-widest">Dra. Emanuelle Samary</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-display font-black leading-tight">
            PRAZER, EU SOU <br />
            <span className="gradient-text">DRA EMANUELLE SAMARY</span>
          </h3>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Médica desde 2013, construí minha trajetória unindo <span className="text-white font-bold">Estética, Dermatologia e Nutrologia</span> com anos de prática clínica real entre São Luís e São Paulo.
            </p>

            <p>
              No consultório, vi um padrão: pessoas confusas gastando muito sem resultados. Elas não precisavam de mais ativos, precisavam de <span className="text-brand-lime font-bold italic">organização</span>.
            </p>

            <p className="text-white font-medium">
              Treinei esta IA com meus próprios protocolos e raciocínio clínico para levar minha experiência além do consultório.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {["Personalização real", "Previsibilidade", "Clareza total"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-bold text-brand-lime">
                <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Clock, title: "Economia de Tempo", desc: "Pare de pesquisar por horas. Tenha sua rotina em minutos." },
          { icon: DollarSign, title: "Economia de Dinheiro", desc: "Compre apenas o que sua pele realmente precisa." },
          { icon: ShieldCheck, title: "Segurança Total", desc: "Evite misturas de ativos que podem queimar sua pele." }
        ].map((item, i) => (
          <Card key={i} variant="solid" className="text-center space-y-4" delay={i * 0.1}>
            <div className="mx-auto w-16 h-16 rounded-2xl bg-brand-lime/10 flex items-center justify-center">
              <item.icon className="w-8 h-8 text-brand-lime" />
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
