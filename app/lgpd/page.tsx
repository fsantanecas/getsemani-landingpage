import LegalLayout from '../components/LegalLayout';

export const metadata = {
  title: 'LGPD – Seus Direitos | Getsemani IT Solutions',
  description: 'Conheça seus direitos como titular de dados pessoais, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
};

const rights = [
  {
    num: 'I',
    title: 'Confirmação de tratamento',
    desc: 'Solicitar a confirmação da existência de tratamento dos seus dados pessoais pela Getsemani IT Solutions.',
  },
  {
    num: 'II',
    title: 'Acesso aos dados',
    desc: 'Obter uma cópia completa dos dados pessoais que mantemos sobre você.',
  },
  {
    num: 'III',
    title: 'Correção',
    desc: 'Solicitar a correção de dados incompletos, inexatos ou desatualizados.',
  },
  {
    num: 'IV',
    title: 'Anonimização, bloqueio ou exclusão',
    desc: 'Solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.',
  },
  {
    num: 'V',
    title: 'Portabilidade',
    desc: 'Receber seus dados em formato estruturado e legível para transferência a outro fornecedor de serviço.',
  },
  {
    num: 'VI',
    title: 'Informação sobre compartilhamento',
    desc: 'Saber com quais entidades públicas ou privadas compartilhamos seus dados pessoais.',
  },
  {
    num: 'VII',
    title: 'Revogação do consentimento',
    desc: 'Quando o tratamento for baseado em consentimento, revogá-lo a qualquer momento, sem prejuízo da legalidade do tratamento realizado anteriormente.',
  },
  {
    num: 'VIII',
    title: 'Oposição ao tratamento',
    desc: 'Opor-se ao tratamento realizado com fundamento em uma das hipóteses de dispensa de consentimento, em caso de descumprimento à LGPD.',
  },
  {
    num: 'IX',
    title: 'Revisão de decisões automatizadas',
    desc: 'Solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses.',
  },
];

export default function Lgpd() {
  return (
    <LegalLayout
      title="LGPD – Seus Direitos como Titular"
      subtitle="Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você possui direitos sobre seus dados pessoais. Saiba como exercê-los."
    >
      <div className="space-y-10 text-slate-400 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">O que é a LGPD?</h2>
          <p>
            A <strong className="text-slate-200">Lei Geral de Proteção de Dados Pessoais
            (Lei nº 13.709/2018)</strong> é a legislação brasileira que regula o tratamento de
            dados pessoais por pessoas físicas e jurídicas, com o objetivo de proteger os direitos
            fundamentais de liberdade e privacidade.
          </p>
          <p className="mt-3">
            A Getsemani IT Solutions está comprometida com o cumprimento da LGPD e com a proteção
            dos dados pessoais de todos os usuários do nosso site. Para entender como tratamos seus
            dados, consulte nossa{' '}
            <a href="/privacidade" className="text-sky-400 hover:underline">Política de Privacidade</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Seus Direitos (art. 18 da LGPD)</h2>
          <div className="grid gap-3 mt-4">
            {rights.map((r) => (
              <div
                key={r.num}
                className="glass-card rounded-xl p-4 border border-white/5 flex gap-4 items-start"
              >
                <span className="text-sky-400 font-black text-base w-6 shrink-0 mt-0.5">{r.num}</span>
                <div>
                  <h3 className="text-slate-200 font-semibold text-sm mb-1">{r.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Como Exercer seus Direitos</h2>
          <p>
            Para exercer qualquer um dos direitos acima, envie sua solicitação por e-mail com as
            seguintes informações: <strong className="text-slate-200">nome completo</strong>,
            o <strong className="text-slate-200">direito que deseja exercer</strong> e os
            <strong className="text-slate-200"> dados envolvidos</strong>.
          </p>

          <div className="glass-card rounded-xl p-5 border border-sky-500/20 mt-4">
            <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">E-mail para solicitações</p>
            <a
              href="mailto:suporte@getsemanitsolutions.com.br"
              className="text-sky-400 font-semibold hover:underline text-base"
            >
              suporte@getsemanitsolutions.com.br
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {[
              { label: 'Prazo de resposta', value: 'Até 15 dias úteis' },
              { label: 'Formato', value: 'Resposta por e-mail' },
              { label: 'Custo', value: 'Gratuito' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-4 border border-white/5 text-center">
                <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                <p className="text-slate-200 font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Controlador de Dados</h2>
          <p className="mb-3">
            O responsável pelo tratamento dos seus dados pessoais é:
          </p>
          <div className="glass-card rounded-xl p-5 border border-white/5 space-y-1.5">
            <p><strong className="text-slate-200">Empresa:</strong> Getsemani IT Solutions</p>
            <p><strong className="text-slate-200">Endereço:</strong> Vila Prudente, São Paulo – SP – Brasil</p>
            <p>
              <strong className="text-slate-200">E-mail:</strong>{' '}
              <a
                href="mailto:suporte@getsemanitsolutions.com.br"
                className="text-sky-400 hover:underline"
              >
                suporte@getsemanitsolutions.com.br
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">Reclamação à ANPD</h2>
          <p>
            Se considerar que seus direitos não foram atendidos de forma adequada, você pode
            registrar uma reclamação junto à{' '}
            <strong className="text-slate-200">Autoridade Nacional de Proteção de Dados (ANPD)</strong>:
          </p>
          <a
            href="https://www.gov.br/anpd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sky-400 hover:underline font-medium"
          >
            www.gov.br/anpd →
          </a>
        </section>

      </div>
    </LegalLayout>
  );
}
