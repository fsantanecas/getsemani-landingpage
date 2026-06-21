import LegalLayout from '../components/LegalLayout';

export const metadata = {
  title: 'Política de Privacidade | Getsemani IT Solutions',
  description: 'Como a Getsemani IT Solutions coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.',
};

export default function Privacidade() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      subtitle="Como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
    >
      <div className="space-y-10 text-slate-400 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Quem somos</h2>
          <p>
            A <strong className="text-slate-200">Getsemani IT Solutions</strong> é uma empresa de tecnologia
            com sede em Vila Prudente, São Paulo – SP, Brasil, especializada em Inteligência Artificial,
            automação de processos e desenvolvimento digital. Somos o Controlador responsável pelo
            tratamento dos dados pessoais coletados neste site.
          </p>
          <p className="mt-3">
            <strong className="text-slate-200">E-mail de contato:</strong>{' '}
            <a href="mailto:suporte@getsemanitsolutions.com.br" className="text-sky-400 hover:underline">
              suporte@getsemanitsolutions.com.br
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Quais dados coletamos</h2>
          <p>Ao preencher o formulário de contato do site, coletamos:</p>
          <ul className="list-disc list-inside mt-3 space-y-1.5">
            <li>Nome completo</li>
            <li>Nome da empresa ou organização</li>
            <li>Endereço de e-mail</li>
            <li>Número de WhatsApp</li>
            <li>Descrição do desafio ou necessidade informada voluntariamente</li>
          </ul>
          <p className="mt-3">
            Não coletamos dados sensíveis (conforme art. 5º, II da LGPD) e não utilizamos cookies
            de rastreamento ou ferramentas de analytics de terceiros. O único dado armazenado
            localmente no navegador é a preferência de idioma (localStorage), sem envio a terceiros.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Finalidade e base legal</h2>
          <p>Seus dados são utilizados exclusivamente para:</p>
          <ul className="list-disc list-inside mt-3 space-y-1.5">
            <li>Responder ao seu contato e prestar informações sobre nossos serviços</li>
            <li>Qualificar e acompanhar oportunidades comerciais em nosso CRM interno</li>
            <li>Elaborar e enviar proposta personalizada quando solicitada</li>
          </ul>
          <p className="mt-3">
            A base legal para o tratamento é o{' '}
            <strong className="text-slate-200">legítimo interesse</strong> (art. 7º, IX da LGPD)
            e a <strong className="text-slate-200">execução de pré-contrato</strong> (art. 7º, V da LGPD),
            uma vez que os dados são fornecidos voluntariamente pelo próprio titular com o objetivo
            de receber nosso contato comercial.
          </p>
          <p className="mt-3 text-slate-300 font-medium">
            Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de marketing ou publicidade.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Armazenamento e segurança</h2>
          <p>
            Os dados coletados são armazenados de forma segura na plataforma{' '}
            <strong className="text-slate-200">Supabase</strong>, um serviço de banco de dados em nuvem
            com criptografia em repouso (AES-256) e em trânsito (TLS 1.2+). O acesso é restrito
            exclusivamente aos colaboradores da Getsemani IT Solutions com necessidade operacional.
          </p>
          <p className="mt-3">
            Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
            acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Prazo de retenção</h2>
          <p>
            Mantemos seus dados pelo prazo de{' '}
            <strong className="text-slate-200">2 (dois) anos</strong> após o último contato,
            ou até que você solicite a exclusão — o que ocorrer primeiro. Após esse prazo,
            os dados são excluídos ou anonimizados permanentemente.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Compartilhamento de dados</h2>
          <p>
            Seus dados podem ser acessados pela plataforma Supabase, que atua como{' '}
            <strong className="text-slate-200">Operadora</strong> nos termos da LGPD, exclusivamente
            para fins de armazenamento e infraestrutura. Não há compartilhamento com outras entidades.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Seus direitos</h2>
          <p>Em conformidade com o art. 18 da LGPD, você tem direito a:</p>
          <ul className="list-disc list-inside mt-3 space-y-1.5">
            <li>Confirmar a existência do tratamento dos seus dados</li>
            <li>Acessar os dados que mantemos sobre você</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
            <li>Solicitar a anonimização, bloqueio ou exclusão de dados desnecessários</li>
            <li>Solicitar a portabilidade dos dados a outro fornecedor</li>
            <li>Revogar o consentimento a qualquer momento</li>
            <li>Opor-se ao tratamento realizado em desconformidade com a lei</li>
          </ul>
          <p className="mt-3">
            Para exercer seus direitos, acesse nossa{' '}
            <a href="/lgpd" className="text-sky-400 hover:underline">página de LGPD</a> ou envie
            um e-mail para{' '}
            <a href="mailto:suporte@getsemanitsolutions.com.br" className="text-sky-400 hover:underline">
              suporte@getsemanitsolutions.com.br
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. A versão vigente estará
            sempre disponível nesta página com a data de última atualização. Alterações significativas
            serão comunicadas por e-mail aos contatos cadastrados, quando possível.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">9. Contato</h2>
          <div className="glass-card rounded-xl p-5 border border-white/5 mt-2">
            <p className="text-slate-300 font-semibold mb-2">Getsemani IT Solutions</p>
            <p>Vila Prudente, São Paulo – SP – Brasil</p>
            <a
              href="mailto:suporte@getsemanitsolutions.com.br"
              className="text-sky-400 hover:underline mt-1 inline-block"
            >
              suporte@getsemanitsolutions.com.br
            </a>
            <p className="text-slate-500 text-xs mt-3">
              Você também pode registrar reclamações junto à Autoridade Nacional de Proteção de Dados (ANPD):{' '}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                www.gov.br/anpd
              </a>
            </p>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
