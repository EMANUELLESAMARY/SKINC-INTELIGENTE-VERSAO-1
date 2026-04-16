import { motion } from "motion/react";
import { Flame, Hourglass, CheckCircle2, AlertTriangle, Activity, ShieldCheck } from "lucide-react";
import { Section, SectionHeader } from "../ui/Section";
import { Card } from "../ui/Card";

export const Tools = () => {
  return (
    <Section variant="contrast" id="tools">
      <SectionHeader 
        title="Ferramentas Exclusivas" 
        subtitle="Além do protocolo, você recebe acesso a sistemas inteligentes de monitoramento."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Tool 1: Termômetro de Risco Capilar */}
        <Card variant="glass" className="border-brand-pink/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Flame className="w-32 h-32 text-brand-pink" />
          </div>
          
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-pink/20 flex items-center justify-center">
                <Flame className="w-6 h-6 text-brand-pink" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Termômetro de Risco Capilar</h3>
            </div>

            <p className="text-xl text-gray-300">Descubra o nível real de dano causado pela sua perda de peso.</p>

            <div className="bg-black/40 rounded-2xl p-6 border border-white/5 space-y-4">
              <p className="font-bold flex items-center gap-2 text-brand-pink">
                <Activity className="w-5 h-5" /> Nível de Alerta Capilar:
              </p>
              <div className="text-2xl font-black text-white">📊 Risco de Queda Acentuada</div>
              <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30">Risco Baixo</span>
                <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Alerta</span>
                <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">Perigo</span>
                <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30">Crítico</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-lg">O sistema revela:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Dano Metabólico", "Deficiência de Folículo", "Nível de Stress do Fio"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-brand-pink font-bold italic">Você entende o erro e corrige o caminho.</p>
          </div>
        </Card>

        {/* Tool 2: Capillary Planner */}
        <Card variant="glass" className="border-brand-lime/30 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Hourglass className="w-32 h-32 text-brand-lime" />
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-lime/20 flex items-center justify-center">
                <Hourglass className="w-6 h-6 text-brand-lime" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">Planner de Evolução em 30 Dias</h3>
            </div>

            <div className="space-y-2">
              <p className="text-xl text-gray-300 italic">O fio não cresce do dia para a noite.</p>
              <p className="text-2xl font-black text-brand-lime">Mas a queda para em dias.</p>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Monitore sua evolução diária. Através do <span className="text-white font-bold">Growth Tracker</span>, você acompanha a estabilização da queda e o surgimento de novos fios (baby hairs) através de fotos e checklists.
            </p>

            <div className="bg-brand-lime/5 rounded-2xl p-6 border border-brand-lime/20 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-brand-lime flex-shrink-0 mt-1" />
              <p className="text-sm font-medium">
                Se você não acompanhar, não sabe se está melhorando. <span className="text-brand-lime font-bold">Dados não mentem.</span>
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-lg">Acompanhamento de:</p>
              <ul className="space-y-3">
                {[
                  "Densidade no m²",
                  "Volume no ralo do banho",
                  "Consistência do fio"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <ShieldCheck className="w-5 h-5 text-brand-lime" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};
