'use client';

import { Star, MessageSquarePlus, Award, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const valueIcons = [
  <Award size={22} key="award" />,
  <Users size={22} key="users" />,
  <TrendingUp size={22} key="trend" />,
];

const valueStyles = [
  { color: 'text-sky-400', bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.12)' },
  { color: 'text-violet-400', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.12)' },
  { color: 'text-emerald-400', bg: 'rgba(16,185,129,0.06)', border: 'rgba(16,185,129,0.12)' },
];

const WA = 'https://wa.me/5511961699686?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Getsemani%20IT%20Solutions.';

export default function Resultados() {
  const { t } = useLanguage();
  const tr = t.resultados;

  return (
    <section id="resultados" className="relative py-24 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-violet-600/10 bottom-0 right-[-150px] pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase mb-4 block">
            {tr.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-tight">
            {tr.h2.before}
            <span className="gradient-text">{tr.h2.highlight}</span>
            {tr.h2.after}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{tr.subtitle}</p>
        </div>

        {/* Stats bar */}
        <div className="glass-card rounded-2xl mb-14 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {tr.stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-8 text-center ${i < tr.stats.length - 1 ? 'border-b md:border-b-0 border-r md:border-r border-white/5' : ''}`}
              >
                <p className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-slate-500 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {tr.values.map((v, i) => (
            <div
              key={v.title}
              className="rounded-2xl p-6 border service-card"
              style={{ background: valueStyles[i].bg, borderColor: valueStyles[i].border }}
            >
              <div className={`mb-4 ${valueStyles[i].color}`}>{valueIcons[i]}</div>
              <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Invite */}
        <div className="animated-border rounded-2xl max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-10 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-amber-400/30 fill-amber-400/30" />
              ))}
            </div>
            <MessageSquarePlus size={36} className="text-sky-400/40 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-3">{tr.inviteH3}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md mx-auto">{tr.inviteDesc}</p>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-white font-bold px-7 py-3.5 rounded-xl inline-flex items-center gap-2"
            >
              <span>{tr.inviteCTA}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
