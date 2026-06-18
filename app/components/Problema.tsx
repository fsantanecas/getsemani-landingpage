'use client';

import { AlertTriangle, Clock, TrendingDown, ShieldX, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const painIcons = [
  <Clock size={24} key="clock" />,
  <TrendingDown size={24} key="trend" />,
  <ShieldX size={24} key="shield" />,
  <AlertTriangle size={24} key="alert" />,
];

const painStyles = [
  { color: 'text-orange-400', bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.15)' },
  { color: 'text-red-400', bg: 'rgba(248,113,113,0.06)', border: 'rgba(248,113,113,0.15)' },
  { color: 'text-rose-400', bg: 'rgba(251,113,133,0.06)', border: 'rgba(251,113,133,0.15)' },
  { color: 'text-amber-400', bg: 'rgba(251,191,36,0.06)', border: 'rgba(251,191,36,0.15)' },
];

export default function Problema() {
  const { t } = useLanguage();
  const tp = t.problema;

  return (
    <section id="problema" className="relative py-24 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-red-900/10 top-0 right-[-200px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-4 block">
            {tp.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            {tp.h2.before}
            <span className="gradient-text">{tp.h2.highlight}</span>
            {tp.h2.after}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{tp.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {tp.pains.map((p, i) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 border service-card"
              style={{ background: painStyles[i].bg, borderColor: painStyles[i].border }}
            >
              <div className={`mb-4 ${painStyles[i].color}`}>{painIcons[i]}</div>
              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mb-20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-px h-12 bg-gradient-to-b from-red-500/30 to-sky-500/30" />
            <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center">
              <ArrowRight size={18} className="text-white rotate-90" />
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-sky-500/30 to-violet-500/30" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4 block">
              {tp.solutionLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              {tp.solutionH2.before}
              <span className="gradient-text">{tp.solutionH2.highlight}</span>
              {tp.solutionH2.after}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">{tp.solutionDesc}</p>
            <a
              href="#servicos"
              className="btn-primary text-white font-bold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 group"
            >
              <span>{tp.solutionCTA}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <p className="text-sm font-semibold text-slate-300 mb-5 uppercase tracking-wider">
              {tp.solutionBoxTitle}
            </p>
            <ul className="space-y-4">
              {tp.solutions.map((s) => (
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
