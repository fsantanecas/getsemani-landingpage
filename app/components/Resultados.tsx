'use client';

import { Star, MessageSquarePlus, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Comprometimento com o resultado' },
  { value: 'IA', label: 'Tecnologia de ponta aplicada' },
  { value: '24/7', label: 'Suporte e disponibilidade' },
  { value: '0', label: 'Tolerância a entregas mediocres' },
];

const values = [
  {
    icon: <Award size={22} />,
    title: 'Entrega com excelência',
    desc: 'Cada projeto recebe atenção total, do briefing ao deploy. Não terceirizamos e não abrimos mão da qualidade.',
    color: 'text-sky-400',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.12)',
  },
  {
    icon: <Users size={22} />,
    title: 'Parceria de verdade',
    desc: 'Tratamos o negócio do cliente como nosso. O sucesso do seu projeto é a nossa prioridade número um.',
    color: 'text-violet-400',
    bg: 'rgba(124,58,237,0.06)',
    border: 'rgba(124,58,237,0.12)',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Resultados mensuráveis',
    desc: 'Definimos métricas antes de começar e monitoramos cada entrega para garantir ROI real e tangível.',
    color: 'text-emerald-400',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.12)',
  },
];

export default function Resultados() {
  return (
    <section id="resultados" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 bottom-0 right-[-150px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4 block">
            Nossa filosofia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            Nascemos para{' '}
            <span className="gradient-text">entregar resultados</span>,{' '}
            não promessas
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A Getsemani IT Solutions é jovem e honesta sobre isso. O que garantimos é comprometimento
            total, tecnologia de ponta e uma parceria que cresce junto com o seu negócio.
          </p>
        </div>

        {/* Stats bar */}
        <div className="glass-card rounded-2xl mb-14 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-8 text-center ${i < stats.length - 1 ? 'border-b md:border-b-0 border-r md:border-r border-white/5' : ''}`}
              >
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-500 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-6 border service-card"
              style={{ background: v.bg, borderColor: v.border }}
            >
              <div className={`mb-4 ${v.color}`}>{v.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Convite para ser o primeiro cliente */}
        <div className="animated-border rounded-2xl max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-10 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={20} className="text-amber-400/30 fill-amber-400/30" />
              ))}
            </div>
            <MessageSquarePlus size={36} className="text-sky-400/40 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-3">
              Seja o primeiro a compartilhar sua experiência
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Estamos construindo nossa história junto com nossos clientes. Quer fazer parte
              dessa jornada desde o início e transformar sua operação com tecnologia?
            </p>
            <a
              href="https://wa.me/5511961699686?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20da%20Getsemani%20IT%20Solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white font-bold px-7 py-3.5 rounded-xl inline-flex items-center gap-2"
            >
              <span>Falar com a equipe</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
