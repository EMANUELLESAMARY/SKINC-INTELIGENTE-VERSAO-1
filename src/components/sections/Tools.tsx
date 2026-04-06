import { motion } from "motion/react";
import { Flame, Hourglass, CheckCircle2, AlertTriangle, Activity, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";

export const Tools = () => {
  return (
    <Section variant="contrast" id="tools">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">
          Veja o que estão falando:
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        {[
          "https://i.postimg.cc/RZwrq9qs/essa_1.jpg",
          "https://i.postimg.cc/Jh8fkgkt/essa_2.jpg"
        ].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-brand-pink/10 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src={src} 
              alt={`Depoimento ${i + 1}`} 
              className="relative rounded-2xl w-full shadow-xl border border-white/5 hover:border-brand-pink/30 transition-colors"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      <SectionHeader 
        title="Ferramentas Exclusivas" 
        subtitle="Além do protocolo, você recebe acesso a sistemas inteligentes de monitoramento."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Tool 1: Termômetro da Inflamação */}
        <Card variant="glass" className="border-brand-pink/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Flame className="w-32 h-32 text-brand-pink" />
          </div>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-pink/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-brand-pink" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Termômetro da Inflamação Cutânea</h3>
            </div>

            <p className="text-xl text-gray-300">Sua pele está reagindo? Responda o quiz clínico rápido.</p>

            <div className="bg-black/40 rounded-2xl p-6 border border-white/5 space-y-4">
              <p className="font-bold flex items-center gap-2 text-brand-pink">
                <Activity className="w-5 h-5" /> O sistema classifica seu:
              </p>
              <div className="text-2xl font-black text-white">📊 Nível de Alerta Inflamatório</div>
              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30">Estável</span>
                <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Atenção</span>
                <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">Alerta</span>
                <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30">Crítico</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-lg">E entrega:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Ajuste imediato", "Conduta SOS", "Pausa estratégica de ativo"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-brand-pink font-bold italic">Você para de agir por impulso.</p>
          </div>
        </Card>

        {/* Tool 2: Índice de Longevidade */}
        <Card variant="glass" className="border-brand-lime/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Hourglass className="w-32 h-32 text-brand-lime" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-lime/20 flex items-center justify-center">
                <Hourglass className="w-6 h-6 text-brand-lime" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Índice de Longevidade Cutânea™</h3>
            </div>

            <div className="space-y-2">
              <p className="text-xl text-gray-300 italic">Sua pele não envelhece pelo calendário.</p>
              <p className="text-2xl font-black text-brand-lime">Ela envelhece pelas escolhas.</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              O <span className="text-white font-bold">BioSkin Scanner</span> analisa marcadores de oxidação, sono, proteção solar e estratégia dermatológica para revelar sua <span className="text-brand-lime font-black underline decoration-brand-lime/30 underline-offset-4">idade biológica cutânea real</span>.
            </p>

            <div className="bg-brand-lime/5 rounded-2xl p-6 border border-brand-lime/20 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-brand-lime flex-shrink-0 mt-1" />
              <p className="text-sm font-medium">
                Se o número estiver acima da sua idade cronológica, não é estética. <span className="text-brand-lime font-bold">É alerta.</span>
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-lg">Você recebe:</p>
              <ul className="space-y-3">
                {[
                  "Comparação cronológica × biológica",
                  "Nível de risco cutâneo",
                  "Protocolo estratégico de reversão"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <ShieldCheck className="w-5 h-5 text-brand-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="text-xs font-black uppercase tracking-tighter px-3 py-1 bg-white/5 rounded-full border border-white/10">Diagnóstico inteligente</span>
              <span className="text-xs font-black uppercase tracking-tighter px-3 py-1 bg-white/5 rounded-full border border-white/10">Estratégia direcionada</span>
              <span className="text-xs font-black uppercase tracking-tighter px-3 py-1 bg-white/5 rounded-full border border-white/10">Reversão possível</span>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
