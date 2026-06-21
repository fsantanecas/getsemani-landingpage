'use client';

import { useState } from 'react';
import { MessageCircle, Calendar, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { saveLead } from '../lib/supabase';

const WA_BASE = 'https://wa.me/5511961699686?text=';
const CALENDLY = 'https://calendly.com/getsemanitsolutions/30min';

export default function CTAFinal() {
  const { lang, t } = useLanguage();
  const tc = t.cta;

  const [form, setForm] = useState({ nome: '', empresa: '', email: '', whatsapp: '', desafio: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead to Supabase CRM
    await saveLead({ ...form, idioma: lang });

    // Open WhatsApp with pre-filled message
    const msg = `Olá! Meu nome é ${form.nome}, sou da empresa ${form.empresa}. Email: ${form.email}. WhatsApp: ${form.whatsapp}. Desafio: ${form.desafio}`;
    window.open(`${WA_BASE}${encodeURIComponent(msg)}`, '_blank');

    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="orb w-[600px] h-[600px] bg-sky-600/15 top-[-100px] left-[-200px] pulse-glow" />
      <div className="orb w-[500px] h-[500px] bg-violet-600/15 bottom-[-100px] right-[-150px] pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 border border-orange-500/20">
            <Clock size={14} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-semibold">{tc.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 max-w-4xl mx-auto leading-tight">
            {tc.h2.before}
            <span className="gradient-text">{tc.h2.highlight}</span>
            {tc.h2.after}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{tc.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Left */}
          <div>
            <div className="glass-card rounded-2xl p-8 mb-6 border border-white/5">
              <h3 className="text-white font-bold text-xl mb-6">{tc.benefitsTitle}</h3>
              <ul className="space-y-4">
                {tc.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${WA_BASE}${encodeURIComponent('Olá! Gostaria de falar com um especialista da Getsemani IT Solutions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-2xl py-4 px-6 font-bold text-white text-base group mb-4"
            >
              <MessageCircle size={20} />
              {tc.waButton}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 btn-secondary rounded-2xl py-4 px-6 font-semibold text-slate-200 text-base hover:text-white"
            >
              <Calendar size={18} />
              {tc.scheduleButton}
            </a>
          </div>

          {/* Right: Form */}
          <div className="animated-border rounded-2xl">
            <div className="glass-card rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">{tc.sentTitle}</h3>
                  <p className="text-slate-400 text-sm">{tc.sentDesc}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-bold text-xl mb-6">{tc.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block">{tc.fields.nome.label}</label>
                        <input
                          name="nome"
                          required
                          value={form.nome}
                          onChange={handleChange}
                          placeholder={tc.fields.nome.placeholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block">{tc.fields.empresa.label}</label>
                        <input
                          name="empresa"
                          required
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder={tc.fields.empresa.placeholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block">{tc.fields.email.label}</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={tc.fields.email.placeholder}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block">{tc.fields.whatsapp.label}</label>
                      <input
                        name="whatsapp"
                        required
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder={tc.fields.whatsapp.placeholder}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block">{tc.fields.desafio.label}</label>
                      <textarea
                        name="desafio"
                        value={form.desafio}
                        onChange={handleChange}
                        rows={3}
                        placeholder={tc.fields.desafio.placeholder}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      <span>{loading ? '...' : tc.submit}</span>
                      {!loading && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                    </button>
                    <p className="text-center text-xs text-slate-600">{tc.privacy}</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
