import Link from 'next/link';
import LogoMark from './LogoMark';

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen" style={{ background: '#050b18' }}>
      {/* Header */}
      <header className="border-b border-white/5 py-4">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={30} id="legal" />
            <span className="font-bold text-sm tracking-tight">
              <span className="gradient-text">GE</span>
              <span className="text-white">tsemani</span>
              <span className="text-slate-400 font-light"> IT Solutions</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-xs text-slate-500 hover:text-sky-400 transition-colors flex items-center gap-1"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{title}</h1>
          {subtitle && <p className="text-slate-500 text-sm mt-2 max-w-2xl">{subtitle}</p>}
          <p className="text-slate-600 text-xs mt-3">Última atualização: 21 de junho de 2026</p>
          <div className="w-16 h-0.5 mt-4" style={{ background: 'linear-gradient(90deg,#0ea5e9,#7c3aed)' }} />
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© 2026 Getsemani IT Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-slate-400 transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-slate-400 transition-colors">Termos de Uso</Link>
            <Link href="/lgpd" className="hover:text-slate-400 transition-colors">LGPD</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
