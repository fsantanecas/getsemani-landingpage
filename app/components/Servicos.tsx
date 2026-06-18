'use client';

import { Globe, Bot, Cpu, Code2, Layers, Plug, BarChart3, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [
  <Globe size={26} key="globe" />,
  <Bot size={26} key="bot" />,
  <Cpu size={26} key="cpu" />,
  <Layers size={26} key="layers" />,
  <Code2 size={26} key="code2" />,
  <Plug size={26} key="plug" />,
  <BarChart3 size={26} key="bar" />,
  <Headphones size={26} key="headphones" />,
];

const styles = [
  { color: 'from-sky-500/20 to-sky-500/5', iconColor: 'text-sky-400', borderColor: 'rgba(14,165,233,0.15)' },
  { color: 'from-violet-500/20 to-violet-500/5', iconColor: 'text-violet-400', borderColor: 'rgba(124,58,237,0.15)' },
  { color: 'from-cyan-500/20 to-cyan-500/5', iconColor: 'text-cyan-400', borderColor: 'rgba(6,182,212,0.15)' },
  { color: 'from-emerald-500/20 to-emerald-500/5', iconColor: 'text-emerald-400', borderColor: 'rgba(16,185,129,0.15)' },
  { color: 'from-amber-500/20 to-amber-500/5', iconColor: 'text-amber-400', borderColor: 'rgba(245,158,11,0.15)' },
  { color: 'from-pink-500/20 to-pink-500/5', iconColor: 'text-pink-400', borderColor: 'rgba(236,72,153,0.15)' },
  { color: 'from-indigo-500/20 to-indigo-500/5', iconColor: 'text-indigo-400', borderColor: 'rgba(99,102,241,0.15)' },
  { color: 'from-teal-500/20 to-teal-500/5', iconColor: 'text-teal-400', borderColor: 'rgba(20,184,166,0.15)' },
];

const WA = 'https://wa.me/5511961699686?text=Ol%C3%A1!%20Tenho%20uma%20necessidade%20espec%C3%ADfica%20de%20tecnologia.';

export default function Servicos() {
  const { t } = useLanguage();
  const ts = t.servicos;

  return (
    <section id="servicos" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 bottom-0 left-[-150px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4 block">
            {ts.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            {ts.h2.before}
            <span className="gradient-text">{ts.h2.highlight}</span>
            {ts.h2.after}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{ts.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ts.items.map((s, i) => (
            <div
              key={s.title}
              className="glass-card rounded-2xl p-6 border service-card relative overflow-hidden group"
              style={{ borderColor: styles[i].borderColor }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${styles[i].color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`mb-4 ${styles[i].iconColor}`}>{icons[i]}</div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1 h-4 rounded-full ${styles[i].iconColor.replace('text-', 'bg-')}`} />
                  <p className={`text-xs font-semibold ${styles[i].iconColor}`}>{s.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm mb-5">{ts.bottomText}</p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-slate-200 font-semibold px-7 py-3.5 rounded-xl inline-flex items-center gap-2 hover:text-white"
          >
            {ts.bottomCTA}
          </a>
        </div>
      </div>
    </section>
  );
}
