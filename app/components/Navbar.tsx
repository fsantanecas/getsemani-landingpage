'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="gradient-text">Getsemani</span>
            <span className="text-slate-300 font-light"> IT</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5511961699686?text=Olá! Gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg cursor-pointer"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-sky-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511961699686?text=Olá! Gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      )}
    </header>
  );
}
