'use client';

import { Star, MessageSquarePlus, Award, Users, TrendingUp, ExternalLink } from 'lucide-react';
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

        {/* Cases */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">{tr.casesLabel}</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <h3 className="text-white font-bold text-xl mb-6">{tr.casesH3}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tr.cases.map((c) => (
              <div key={c.client} className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-white font-bold text-base">{c.client}</p>
                    <span className="text-xs text-sky-400 font-medium">{c.sector}</span>
                  </div>
                  <a
                    href={c.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors mt-1"
                    aria-label="GitHub"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{c.solution}</p>
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 px-4 py-3">
                  <p className="text-emerald-400 text-sm leading-relaxed">{c.result}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {c.tech.map((t) => (
                    <span key={t} className="text-xs bg-white/5 text-slate-400 rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Invite */}
        <div className="animated-border rounded-2xl max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-10 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400/60" />
              ))}
            </div>
            <MessageSquarePlus size={36} className="text-sky-400/60 mx-auto mb-4" />
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
