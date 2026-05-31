'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, MessageCircle, ChevronDown, Cpu, Globe, Bot } from 'lucide-react';

const WHATSAPP = 'https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20um%20orçamento%20da%20Getsemani%20IT%20Solutions.';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

      // Draw connections
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
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-sky-600/20 pulse-glow top-[-100px] left-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-violet-600/20 pulse-glow bottom-[-80px] right-[-100px]" style={{ animationDelay: '1.5s' }} />
      <div className="orb w-[300px] h-[300px] bg-cyan-500/10 top-[30%] left-[60%]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card animated-border rounded-full px-4 py-2 mb-8 text-xs font-medium text-sky-400 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Inteligência Artificial & Automação
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 max-w-5xl mx-auto">
          <span className="text-white">Transformamos</span>{' '}
          <span className="gradient-text text-glow-blue">Tecnologia</span>
          <br />
          <span className="text-white">em</span>{' '}
          <span className="text-white">Crescimento</span>{' '}
          <span className="gradient-text-2">Inteligente</span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluções em IA, automação e desenvolvimento digital que eliminam ineficiências,
          escalam seu negócio e colocam sua empresa décadas à frente da concorrência.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contato"
            className="btn-primary text-white font-bold px-8 py-4 rounded-xl text-base w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-slate-200 font-semibold px-8 py-4 rounded-xl text-base w-full sm:w-auto flex items-center justify-center gap-2 hover:text-white"
          >
            <MessageCircle size={18} className="text-emerald-400" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          {[
            { icon: <Cpu size={15} />, label: '+120 Projetos Entregues' },
            { icon: <Globe size={15} />, label: '98% Satisfação' },
            { icon: <Bot size={15} />, label: 'Suporte 24/7' },
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
            {/* Mockup header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <div className="flex-1 ml-2 glass-card rounded px-3 py-1 text-xs text-slate-500">
                getsemani.ai/dashboard
              </div>
            </div>

            {/* Mockup body */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Processos Automatizados', value: '1.284', change: '+32%', color: 'sky' },
                { label: 'Leads Gerados', value: '8.917', change: '+67%', color: 'violet' },
                { label: 'Economia Operacional', value: 'R$284k', change: '+89%', color: 'emerald' },
              ].map((m) => (
                <div key={m.label} className="glass-card rounded-xl p-4 text-left">
                  <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                  <p className={`text-2xl font-bold text-${m.color}-400`}>{m.value}</p>
                  <p className="text-xs text-emerald-400 mt-1">{m.change} este mês</p>
                </div>
              ))}
              <div className="col-span-3 glass-card rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-slate-400">Performance de Conversão</span>
                  <span className="text-xs text-sky-400 font-semibold">Ao vivo</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, #0ea5e9, #7c3aed)`,
                        opacity: 0.6 + i * 0.035,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -left-6 top-16 glass-card rounded-xl px-3 py-2 text-xs hidden lg:flex items-center gap-2 border-sky-500/20 border">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">IA Ativa</span>
          </div>
          <div className="absolute -right-6 bottom-16 glass-card rounded-xl px-3 py-2 text-xs hidden lg:flex items-center gap-2 border-violet-500/20 border">
            <Bot size={14} className="text-violet-400" />
            <span className="text-slate-300">Automação 24/7</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problema"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-sky-400 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
