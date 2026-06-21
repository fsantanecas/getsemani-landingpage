import LegalLayout from '../components/LegalLayout';

export const metadata = {
  title: 'Termos de Uso | Getsemani IT Solutions',
  description: 'Condições de uso do site da Getsemani IT Solutions.',
};

export default function Termos() {
  return (
    <LegalLayout
      title="Termos de Uso"
      subtitle="Condições para acesso e utilização do site getsemanitsolutions.com.br e dos serviços da Getsemani IT Solutions."
    >
      <div className="space-y-10 text-slate-400 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-bold text-lg mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site{' '}
            <strong className="text-slate-200">getsemanitsolutions.com.br</strong>, você declara ter
            lido, compreendido e concordado com estes Termos de Uso. Caso não concorde com alguma
            condição aqui estabelecida, solicitamos que não utilize este site.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">2. Sobre o Site</h2>
          <p>
            Este site tem caráter informativo e comercial, destinado à apresentação dos serviços de
            tecnologia da <strong className="text-slate-200">Getsemani IT Solutions</strong> e à
            captação de contatos por meio de formulários. As informações aqui publicadas não
            constituem proposta vinculante; propostas comerciais formais são elaboradas individualmente
            após contato com nossa equipe.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">3. Uso Permitido</h2>
          <p>Você está autorizado a utilizar este site para:</p>
          <ul className="list-disc list-inside mt-3 space-y-1.5">
            <li>Conhecer nossos serviços e soluções tecnológicas</li>
            <li>Entrar em contato para solicitar informações ou orçamentos</li>
            <li>Agendar reuniões por meio das ferramentas disponibilizadas (WhatsApp, Calendly)</li>
            <li>Compartilhar o endereço do site em redes sociais e meios digitais</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">4. Uso Proibido</h2>
          <p>É expressamente vedado:</p>
          <ul className="list-disc list-inside mt-3 space-y-1.5">
            <li>Usar o site para fins ilegais, fraudulentos ou contrários à moral e à ordem pública</li>
            <li>Realizar ataques, invasões ou tentativas de comprometer a segurança ou disponibilidade do site</li>
            <li>Reproduzir, copiar ou distribuir conteúdo do site sem autorização prévia e por escrito</li>
            <li>Enviar informações falsas, spam ou conteúdo malicioso por meio dos formulários de contato</li>
            <li>Utilizar mecanismos automatizados (bots, scrapers ou similares) para coletar dados do site</li>
            <li>Praticar qualquer ato que possa prejudicar a reputação ou os direitos da Getsemani IT Solutions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo deste site — incluindo textos, imagens, logotipos, marca, design, layout,
            código-fonte e demais elementos — é propriedade exclusiva da{' '}
            <strong className="text-slate-200">Getsemani IT Solutions</strong> e está protegido pelas
            leis brasileiras de propriedade intelectual (Lei nº 9.279/1996 — propriedade industrial;
            e Lei nº 9.610/1998 — direitos autorais).
          </p>
          <p className="mt-3">
            A reprodução, total ou parcial, de qualquer conteúdo deste site sem autorização prévia
            e por escrito é expressamente proibida e sujeita às sanções legais cabíveis.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">6. Disponibilidade</h2>
          <p>
            Envidamos esforços para manter o site disponível continuamente, mas não garantimos
            disponibilidade ininterrupta. Podemos realizar manutenções, atualizações ou interrupções
            temporárias a qualquer momento, sem aviso prévio.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">7. Limitação de Responsabilidade</h2>
          <p>
            As informações contidas neste site têm caráter meramente informativo. A Getsemani IT
            Solutions não se responsabiliza por decisões tomadas com base exclusivamente no conteúdo
            aqui publicado, sem a devida consulta à nossa equipe especializada.
          </p>
          <p className="mt-3">
            Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequentes
            decorrentes do uso ou da impossibilidade de uso deste site, incluindo falhas de
            conectividade fora do nosso controle.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">8. Links para Sites de Terceiros</h2>
          <p>
            Este site pode conter links para plataformas externas (ex: WhatsApp, Calendly, Instagram,
            LinkedIn, GitHub). Não somos responsáveis pelo conteúdo, políticas de privacidade ou
            disponibilidade desses serviços. O acesso a sites de terceiros é de responsabilidade
            exclusiva do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">9. Privacidade e Proteção de Dados</h2>
          <p>
            O tratamento dos dados pessoais coletados neste site é regido pela nossa{' '}
            <a href="/privacidade" className="text-sky-400 hover:underline">Política de Privacidade</a>,
            em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            Consulte também nossa{' '}
            <a href="/lgpd" className="text-sky-400 hover:underline">página de direitos LGPD</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">10. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. A versão
            atualizada estará sempre disponível nesta página, com a data de última revisão. O uso
            continuado do site após a publicação de alterações implica aceitação dos novos Termos.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">11. Lei Aplicável e Foro</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Para
            resolução de quaisquer controvérsias decorrentes deste instrumento, fica eleito o foro
            da Comarca de <strong className="text-slate-200">São Paulo – SP</strong>, com exclusão
            de qualquer outro, por mais privilegiado que seja.
          </p>
        </section>

        <section>
          <h2 className="text-white font-bold text-lg mb-3">12. Contato</h2>
          <div className="glass-card rounded-xl p-5 border border-white/5 mt-2">
            <p className="text-slate-300 font-semibold mb-2">Getsemani IT Solutions</p>
            <p>Vila Prudente, São Paulo – SP – Brasil</p>
            <a
              href="mailto:suporte@getsemanitsolutions.com.br"
              className="text-sky-400 hover:underline mt-1 inline-block"
            >
              suporte@getsemanitsolutions.com.br
            </a>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
