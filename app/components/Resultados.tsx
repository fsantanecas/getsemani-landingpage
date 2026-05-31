'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Eduardo Mendes',
    role: 'CEO, LogiTech Distribuidora',
    text: 'A Getsemani automatizou 80% dos nossos processos de emissão de NF em menos de 30 dias. O que levava 4 horas por dia, hoje acontece em minutos. O ROI foi imediato.',
    rating: 5,
    result: 'Redução de 80% no tempo operacional',
    avatar: 'CE',
    avatarColor: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Fernanda Oliveira Santos',
    role: 'Diretora Comercial, MedGroup',
    text: 'O chatbot com IA que desenvolveram para nós qualifica leads 24 horas por dia. Nossa taxa de conversão aumentou 67% no primeiro trimestre após a implementação.',
    rating: 5,
    result: '+67% de conversão em 90 dias',
    avatar: 'FO',
    avatarColor: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Rafael Gomes Barros',
    role: 'CTO, FinanceFlow',
    text: 'Precisávamos integrar 7 sistemas legados sem parar a operação. A equipe da Getsemani entregou em prazo, sem downtime e com documentação impecável. Excepcional.',
    rating: 5,
    result: '7 sistemas integrados sem downtime',
    avatar: 'RG',
    avatarColor: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Amanda Cristina Roque',
    role: 'Fundadora, EduTech Academy',
    text: 'Nossa plataforma de e-learning foi construída do zero com IA adaptativa. Em 6 meses temos 12 mil alunos ativos. A Getsemani transformou uma ideia em negócio real.',
    rating: 5,
    result: '12k alunos ativos em 6 meses',
    avatar: 'AC',
    avatarColor: 'from-amber-500 to-orange-600',
  },
];

const logos = [
  { name: 'TechBrasil', abbrev: 'TB' },
  { name: 'DataFlow', abbrev: 'DF' },
  { name: 'NexaGroup', abbrev: 'NG' },
  { name: 'AlphaDigital', abbrev: 'AD' },
  { name: 'CloudMais', abbrev: 'CM' },
  { name: 'VisionAI', abbrev: 'VA' },
];

export default function Resultados() {
  return (
    <section id="resultados" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 bottom-0 right-[-150px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4 block">
            Prova social
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            Empresas que{' '}
            <span className="gradient-text">transformaram</span>{' '}
            seus resultados
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Mais de 120 projetos entregues com resultados que superam expectativas.
          </p>
        </div>

        {/* Client logos */}
        <div className="glass-card rounded-2xl p-6 mb-14">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-6">
            Empresas que confiam na Getsemani
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((l) => (
              <div key={l.name} className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-xs font-bold text-white">
                  {l.abbrev}
                </div>
                <span className="text-slate-400 text-sm font-semibold">{l.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-7 border border-white/5 service-card relative">
              {/* Quote icon */}
              <Quote size={36} className="text-sky-500/15 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 mb-5 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 text-xs font-semibold">{t.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-sm font-bold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
