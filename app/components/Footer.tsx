import { Zap, Camera, Briefcase, GitFork, Mail, Phone, MapPin } from 'lucide-react';

const links = {
  Serviços: ['Desenvolvimento Web', 'Automação', 'Inteligência Artificial', 'Chatbots', 'Consultoria TI'],
  Empresa: ['Sobre nós', 'Cases de Sucesso', 'Blog', 'Carreiras', 'Contato'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                <span className="gradient-text">Getsemani</span>
                <span className="text-slate-300 font-light"> IT Solutions</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Transformamos tecnologia em crescimento inteligente. IA, automação e soluções digitais
              para empresas que querem liderar o futuro.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Camera size={18} />, href: 'https://instagram.com/getsemanitsolution/', label: 'Instagram' },
                { icon: <Briefcase size={18} />, href: '#', label: 'LinkedIn' },
                { icon: <GitFork size={18} />, href: '#', label: 'GitHub' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-500/30 transition-colors border border-white/5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 text-sm hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="glass-card rounded-2xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail size={15} className="text-sky-400" />
              contato@getsemani.com.br
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Phone size={15} className="text-sky-400" />
              +55 (11) 99999-9999
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={15} className="text-sky-400" />
              São Paulo, SP — Brasil
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {year} Getsemani IT Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-400 transition-colors">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
