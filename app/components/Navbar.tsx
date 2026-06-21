'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../lib/translations';
import LogoMark from './LogoMark';

const WA = 'https://wa.me/5511961699686?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

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
        <a href="#" className="flex items-center gap-2.5 group">
          <LogoMark size={36} id="nav" />
          <span className="font-bold text-lg tracking-tight">
            <span className="gradient-text">GE</span>
            <span className="text-white">tsemani</span>
            <span className="text-slate-400 font-light"> IT Solutions</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {t.navbar.links.map((l) => (
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

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 glass-card rounded-lg p-1 border border-white/5">
            {(['pt-BR', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                  lang === l
                    ? 'bg-sky-500 text-white'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {l === 'pt-BR' ? 'PT' : 'EN'}
              </button>
            ))}
          </div>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            {t.navbar.cta}
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
          {t.navbar.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-sky-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          {/* Mobile lang toggle */}
          <div className="flex gap-2">
            {(['pt-BR', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  lang === l
                    ? 'bg-sky-500 text-white border-sky-500'
                    : 'text-slate-400 border-white/10 hover:border-sky-500/30'
                }`}
              >
                {l === 'pt-BR' ? 'Português' : 'English'}
              </button>
            ))}
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white text-sm font-semibold px-5 py-3 rounded-lg text-center"
          >
            {t.navbar.cta}
          </a>
        </div>
      )}
    </header>
  );
}
