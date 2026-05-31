'use client';

import { AlertTriangle, Clock, TrendingDown, ShieldX, ArrowRight, CheckCircle2 } from 'lucide-react';

const pains = [
  {
    icon: <Clock size={24} />,
    title: 'Processos Manuais e Lentos',
    desc: 'Sua equipe gasta horas em tarefas repetitivas que poderiam ser automatizadas em minutos, desperdiçando tempo e dinheiro.',
    color: 'text-orange-400',
    bg: 'rgba(251,146,60,0.06)',
    border: 'rgba(251,146,60,0.15)',
  },
  {
    icon: <TrendingDown size={24} />,
    title: 'Perda de Competitividade',
    desc: 'Concorrentes que adotaram IA e automação crescem 3x mais rápido. Cada dia sem tecnologia moderna é terreno cedido.',
    color: 'text-red-400',
    bg: 'rgba(248,113,113,0.06)',
    border: 'rgba(248,113,113,0.15)',
  },
  {
    icon: <ShieldX size={24} />,
    title: 'Sistemas Obsoletos e Inseguros',
    desc: 'Infraestrutura desatualizada expõe dados críticos, gera falhas constantes e limita o crescimento da sua operação.',
    color: 'text-rose-400',
    bg: 'rgba(251,113,133,0.06)',
    border: 'rgba(251,113,133,0.15)',
  },
  {
    icon: <AlertTriangle size={24} />,
    title: 'Ausência Digital Qualificada',
    desc: 'Sem presença digital estratégica, leads qualificados simplesmente não chegam. Você perde clientes antes mesmo de ser visto.',
    color: 'text-amber-400',
    bg: 'rgba(251,191,36,0.06)',
    border: 'rgba(251,191,36,0.15)',
  },
];

const solutions = [
  'Automação inteligente de processos repetitivos',
  'Sistemas modernos, seguros e escaláveis',
  'Inteligência Artificial integrada ao seu negócio',
  'Presença digital que gera resultados reais',
  'Atendimento especializado com foco em ROI',
  'Tecnologia sob medida para o seu contexto',
];

export default function Problema() {
  return (
    <section id="problema" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="orb w-[600px] h-[600px] bg-red-900/10 top-0 right-[-200px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-4 block">
            O problema que ninguém quer admitir
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            Sua empresa está perdendo{' '}
            <span className="gradient-text">dinheiro agora</span>{' '}
            por falta de tecnologia
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Identificamos os quatro bloqueios críticos que impedem empresas modernas de crescer.
            Reconhece algum deles?
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 border service-card"
              style={{ background: p.bg, borderColor: p.border }}
            >
              <div className={`mb-4 ${p.color}`}>{p.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider with arrow */}
        <div className="flex items-center justify-center mb-20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12 bg-gradient-to-b from-red-500/30 to-sky-500/30" />
            <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center">
              <ArrowRight size={18} className="text-white rotate-90" />
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-sky-500/30 to-violet-500/30" />
          </div>
        </div>

        {/* Solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4 block">
              A solução que você precisava
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              A Getsemani IT Solutions{' '}
              <span className="gradient-text">transforma</span>{' '}
              esses problemas em vantagem competitiva
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Com mais de uma década de atuação em tecnologia, automação e inteligência artificial,
              desenvolvemos soluções sob medida que geram resultados mensuráveis desde a primeira semana
              de implementação.
            </p>
            <a
              href="#servicos"
              className="btn-primary text-white font-bold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 group"
            >
              <span>Ver nossos serviços</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <p className="text-sm font-semibold text-slate-300 mb-5 uppercase tracking-wider">
              O que entregamos
            </p>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-sky-400 mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
