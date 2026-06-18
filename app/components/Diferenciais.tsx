'use client';

import { Shield, Zap, TrendingUp, Users, RefreshCw, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [
  <Zap size={22} key="zap" />,
  <TrendingUp size={22} key="trend" />,
  <Shield size={22} key="shield" />,
  <Users size={22} key="users" />,
  <RefreshCw size={22} key="refresh" />,
  <Lock size={22} key="lock" />,
];

const styles = [
  { color: 'text-sky-400', bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.12)' },
  { color: 'text-emerald-400', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.12)' },
  { color: 'text-violet-400', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.12)' },
  { color: 'text-cyan-400', bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.12)' },
  { color: 'text-amber-400', bg: 'rgba(245,158,11,0.06)', border: 'rgba(245,158,11,0.12)' },
  { color: 'text-pink-400', bg: 'rgba(236,72,153,0.06)', border: 'rgba(236,72,153,0.12)' },
];

export default function Diferenciais() {
  const { t } = useLanguage();
  const td = t.diferenciais;

  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-sky-600/10 top-20 right-[-100px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats bar */}
        <div className="glass-card rounded-2xl mb-20 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {td.stats.map((s, i) => (
              <div
                key={s.label}
                className={`stat-item px-8 py-8 text-center ${i < td.stats.length - 1 ? 'border-b md:border-b-0 border-r md:border-r border-white/5' : ''}`}
              >
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4 block">
            {td.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            {td.h2.before}
            <span className="gradient-text">{td.h2.highlight}</span>
            {td.h2.after}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{td.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {td.items.map((d, i) => (
            <div
              key={d.title}
              className="rounded-2xl p-6 border service-card"
              style={{ background: styles[i].bg, borderColor: styles[i].border }}
            >
              <div className={`mb-4 ${styles[i].color}`}>{icons[i]}</div>
              <h3 className="text-white font-bold text-base mb-2">{d.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
