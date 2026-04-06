import { motion } from "motion/react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";
import { Sparkles } from "lucide-react";

export const Testimonials = () => {
  return (
    <Section id="testimonials">
      <SectionHeader 
        title="Resultados Reais" 
        subtitle="Veja a transformação de quem já utiliza o protocolo gerado pela nossa IA."
      />

      <div className="space-y-20">
        {/* Before & After Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card variant="glass" className="p-4 md:p-8 border-brand-pink/20">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/30 text-brand-pink text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> Caso Real
                </div>
                <h3 className="text-3xl font-display font-bold">Transformação Visível</h3>
                <p className="text-gray-400">
                  Protocolo focado em barreira cutânea e controle inflamatório. Resultados obtidos após o seguimento rigoroso da rotina personalizada.
                </p>
              </div>
              
              <div className="flex gap-2 md:gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-48">
                  <img 
                    src="https://i.postimg.cc/pdMS2Hst/JE_1.jpg" 
                    alt="Antes" 
                    className="rounded-2xl w-full aspect-[3/4] object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase">Antes</span>
                </div>
                <div className="relative flex-1 md:w-48">
                  <img 
                    src="https://i.postimg.cc/63YbLGtN/JE_2.jpg" 
                    alt="Depois" 
                    className="rounded-2xl w-full aspect-[3/4] object-cover border border-brand-lime/30"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 left-2 bg-brand-lime/80 text-brand-purple px-2 py-1 rounded text-[10px] font-bold uppercase">Depois</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
