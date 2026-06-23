'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, ChevronDown, Cpu, Globe, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WA = 'https://wa.me/5511961699686?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20da%20Getsemani%20IT%20Solutions.';
const COLORS = ['sky', 'violet', 'emerald'] as const;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
      <div className="orb w-[500px] h-[500px] bg-sky-600/20 pulse-glow top-[-100px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-violet-600/20 pulse-glow bottom-[-80px] right-[-100px]" style={{ animationDelay: '1.5s' }} />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-[30%] left-[60%]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card animated-border rounded-full px-4 py-2 mb-8 text-xs font-medium text-sky-400 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-5xl mx-auto">
          <span className="text-white">{t.hero.h1.line1}</span>{' '}
          <span className="gradient-text text-glow-blue">{t.hero.h1.line2}</span>
          <br />
          <span className="text-white">{t.hero.h1.line3}</span>{' '}
          <span className="gradient-text-2">{t.hero.h1.line4}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-10">
          Especialistas em <strong className="text-slate-400">automação de processos</strong>,{' '}
          <strong className="text-slate-400">consultoria de TI</strong> e{' '}
          <strong className="text-slate-400">desenvolvimento web</strong> para empresas no Brasil.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contato"
            className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.cta1}</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-slate-200 font-semibold px-8 py-4 rounded-xl text-base w-full sm:w-auto flex items-center justify-center gap-2 hover:text-white"
          >
            <MessageCircle size={18} className="text-emerald-400" />
            {t.hero.cta2}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          {[
            { icon: <Cpu size={15} />, label: t.hero.trust[0] },
            { icon: <Globe size={15} />, label: t.hero.trust[1] },
            { icon: <Bot size={15} />, label: t.hero.trust[2] },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="text-sky-400">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto float">
          <div className="animated-border rounded-2xl overflow-hidden glass-card">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <div className="flex-1 ml-2 glass-card rounded px-3 py-1 text-xs text-slate-500">
                getsemani.ai/dashboard
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-4">
              {t.hero.dashboard.metrics.map((m, i) => (
                <div key={m.label} className="glass-card rounded-xl p-4 text-left">
                  <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                  <p className={`text-2xl font-bold text-${COLORS[i]}-400`}>{m.value}</p>
                  <p className="text-xs text-emerald-400 mt-1">{m.change} {t.hero.dashboard.changeLabel}</p>
                </div>
              ))}
              <div className="col-span-3 glass-card rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-slate-400">{t.hero.dashboard.chartLabel}</span>
                  <span className="text-xs text-sky-400 font-semibold">{t.hero.dashboard.chartLive}</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: 'linear-gradient(to top, #0ea5e9, #7c3aed)',
                        opacity: 0.6 + i * 0.035,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-16 glass-card rounded-xl px-3 py-2 text-xs hidden lg:flex items-center gap-2 border-sky-500/20 border">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">{t.hero.dashboard.aiActive}</span>
          </div>
          <div className="absolute -right-6 bottom-16 glass-card rounded-xl px-3 py-2 text-xs hidden lg:flex items-center gap-2 border-violet-500/20 border">
            <Bot size={14} className="text-violet-400" />
            <span className="text-slate-300">{t.hero.dashboard.automation}</span>
          </div>
        </div>
      </div>

      <a
        href="#problema"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-sky-400 transition-colors animate-bounce"
        aria-label={t.hero.scrollLabel}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
