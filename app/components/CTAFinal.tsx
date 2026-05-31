'use client';

import { useState } from 'react';
import { MessageCircle, Calendar, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá!%20Quero%20falar%20com%20um%20especialista%20da%20Getsemani%20IT%20Solutions.';

const benefits = [
  'Diagnóstico gratuito de 30 minutos',
  'Sem compromisso, sem pressão',
  'Resposta em até 2 horas úteis',
  'Proposta personalizada para o seu negócio',
];

export default function CTAFinal() {
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', whatsapp: '', desafio: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}, sou da empresa ${form.empresa}. Meu email: ${form.email}. WhatsApp: ${form.whatsapp}. Desafio: ${form.desafio}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="orb w-[600px] h-[600px] bg-sky-600/15 top-[-100px] left-[-200px] pulse-glow" />
      <div className="orb w-[500px] h-[500px] bg-violet-600/15 bottom-[-100px] right-[-150px] pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 border border-orange-500/20">
            <Clock size={14} className="text-orange-400" />
            <span className="text-orange-400 text-xs font-semibold">Vagas limitadas este mês</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 max-w-4xl mx-auto leading-tight">
            Pronto para{' '}
            <span className="gradient-text">transformar</span>{' '}
            sua empresa com tecnologia?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa com um especialista sênior da Getsemani e descubra, gratuitamente,
            como podemos acelerar seus resultados com IA e automação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Left: benefits + WhatsApp */}
          <div>
            <div className="glass-card rounded-2xl p-8 mb-6 border border-white/5">
              <h3 className="text-white font-bold text-xl mb-6">O que você ganha na conversa</h3>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-2xl py-4 px-6 font-bold text-white text-base group mb-4"
            >
              <MessageCircle size={20} />
              Falar agora no WhatsApp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://calendly.com/getsemani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 btn-secondary rounded-2xl py-4 px-6 font-semibold text-slate-200 text-base hover:text-white"
            >
              <Calendar size={18} />
              Agendar reunião online
            </a>
          </div>

          {/* Right: Form */}
          <div className="animated-border rounded-2xl">
            <div className="glass-card rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada!</h3>
                  <p className="text-slate-400 text-sm">Nossa equipe entrará em contato em até 2 horas úteis.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-bold text-xl mb-6">Solicitar diagnóstico gratuito</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block">Nome *</label>
                        <input
                          name="nome"
                          required
                          value={form.nome}
                          onChange={handleChange}
                          placeholder="Seu nome"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-slate-500 mb-1.5 block">Empresa *</label>
                        <input
                          name="empresa"
                          required
                          value={form.empresa}
                          onChange={handleChange}
                          placeholder="Sua empresa"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block">E-mail *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block">WhatsApp *</label>
                      <input
                        name="whatsapp"
                        required
                        value={form.whatsapp}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1.5 block">Qual seu maior desafio hoje?</label>
                      <textarea
                        name="desafio"
                        value={form.desafio}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Ex: Processos manuais, falta de automação, sistema desatualizado..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 group"
                    >
                      <span>Quero meu diagnóstico gratuito</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-xs text-slate-600">
                      Seus dados são protegidos. Não enviamos spam.
                    </p>
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
