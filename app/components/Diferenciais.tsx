'use client';

import { Shield, Zap, TrendingUp, Users, RefreshCw, Lock } from 'lucide-react';

const stats = [
  { value: '+120', label: 'Projetos Entregues' },
  { value: '98%', label: 'Satisfação dos Clientes' },
  { value: '70%', label: 'Redução de Processos Manuais' },
  { value: '+12', label: 'Anos de Experiência' },
];

const diferenciais = [
  {
    icon: <Zap size={22} />,
    title: 'Entrega Rápida',
    desc: 'MVPs funcionais em semanas, não meses. Metodologia ágil com entregas incrementais e mensuráveis.',
    color: 'text-sky-400',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.12)',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Foco em ROI',
    desc: 'Cada solução é desenhada para gerar retorno mensurável. Rastreamos resultados e ajustamos continuamente.',
    color: 'text-emerald-400',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.12)',
  },
  {
    icon: <Shield size={22} />,
    title: 'Segurança Enterprise',
    desc: 'Infraestrutura protegida, dados criptografados e conformidade com LGPD em todas as nossas soluções.',
    color: 'text-violet-400',
    bg: 'rgba(124,58,237,0.06)',
    border: 'rgba(124,58,237,0.12)',
  },
  {
    icon: <Users size={22} />,
    title: 'Atendimento Dedicado',
    desc: 'Um especialista sênior acompanha seu projeto do início ao fim. Sem terceirização, sem repasse de responsabilidade.',
    color: 'text-cyan-400',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.12)',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Soluções Escaláveis',
    desc: 'Arquitetura preparada para crescer junto com o seu negócio, sem retrabalho e sem troca de plataforma.',
    color: 'text-amber-400',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.12)',
  },
  {
    icon: <Lock size={22} />,
    title: 'Inovação Contínua',
    desc: 'Acompanhamos as tendências em IA, automação e cloud para manter você sempre à frente do mercado.',
    color: 'text-pink-400',
    bg: 'rgba(236,72,153,0.06)',
    border: 'rgba(236,72,153,0.12)',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-sky-600/10 top-20 right-[-100px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats bar */}
        <div className="glass-card rounded-2xl mb-20 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`stat-item px-8 py-8 text-center ${i < stats.length - 1 ? 'border-b md:border-b-0 border-r md:border-r border-white/5' : ''}`}
              >
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4 block">
            Por que a Getsemani?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            O que nos coloca{' '}
            <span className="gradient-text">décadas à frente</span>{' '}
            da concorrência
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Não somos apenas uma empresa de tecnologia. Somos parceiros estratégicos obsessivos
            com o seu resultado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciais.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl p-6 border service-card"
              style={{ background: d.bg, borderColor: d.border }}
            >
              <div className={`mb-4 ${d.color}`}>{d.icon}</div>
              <h3 className="text-white font-bold text-base mb-2">{d.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
