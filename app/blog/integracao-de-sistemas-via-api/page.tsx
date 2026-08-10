import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integração de Sistemas via API: como conectar suas ferramentas sem retrabalho manual | Getsemani IT Solutions',
  description: 'Entenda o que é integração de sistemas via API, os tipos mais usados, como implementar passo a passo e quanto custa eliminar o retrabalho manual entre suas ferramentas.',
  keywords: ['integração de sistemas via API', 'integração de API', 'integração de sistemas empresariais', 'iPaaS', 'conectar sistemas empresa', 'automação de integração'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/integracao-de-sistemas-via-api' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/integracao-de-sistemas-via-api',
    title: 'Integração de Sistemas via API: como conectar suas ferramentas sem retrabalho manual',
    description: 'Entenda o que é integração de sistemas via API, os tipos mais usados e como implementar passo a passo na sua empresa.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Integração de Sistemas via API' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Integração de Sistemas via API: como conectar suas ferramentas sem retrabalho manual',
      description: 'Entenda o que é integração de sistemas via API, os tipos mais usados, como implementar passo a passo e quanto custa eliminar o retrabalho manual entre suas ferramentas.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-08-10',
      dateModified: '2026-08-10',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/integracao-de-sistemas-via-api',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'O que é integração de sistemas via API?', acceptedAnswer: { '@type': 'Answer', text: 'É a conexão entre dois ou mais sistemas de software feita através de uma API (Interface de Programação de Aplicações), permitindo que troquem dados automaticamente, sem exportação manual de planilha ou digitação repetida em telas diferentes.' } },
        { '@type': 'Question', name: 'Preciso trocar meus sistemas atuais pra poder integrar via API?', acceptedAnswer: { '@type': 'Answer', text: 'Na maioria dos casos, não. A grande maioria das ferramentas modernas de CRM, ERP, e-commerce e pagamento já oferece API própria. A integração se conecta ao que já existe, sem exigir migração de sistema.' } },
        { '@type': 'Question', name: 'Quanto custa integrar sistemas via API?', acceptedAnswer: { '@type': 'Answer', text: 'Integrações simples com plataformas de iPaaS podem custar a partir de R$ 2.000 a R$ 5.000. Projetos com múltiplos sistemas legados ou middleware dedicado ficam na faixa de R$ 15.000 a R$ 60.000 ou mais, dependendo do volume e da complexidade das regras de negócio envolvidas.' } },
        { '@type': 'Question', name: 'Integração via API é segura?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, quando feita com boas práticas: autenticação por token, criptografia na transmissão dos dados e controle de quem pode acessar cada endpoint. O risco maior não está na tecnologia em si, mas em implementações mal configuradas ou sem monitoramento.' } },
        { '@type': 'Question', name: 'Minha empresa é pequena, vale a pena investir em integração de sistemas?', acceptedAnswer: { '@type': 'Answer', text: 'Vale, e às vezes vale ainda mais pra empresa pequena, porque a equipe enxuta sente rápido o peso do trabalho manual repetitivo. Integrações simples via iPaaS custam pouco e já eliminam boa parte do retrabalho entre ferramentas do dia a dia.' } },
      ],
    },
  ],
};

export default function ArtigoIntegracaoSistemas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div style={{ background: '#050b18', minHeight: '100vh', color: '#e2e8f0', fontFamily: 'Inter, system-ui, sans-serif' }}>

        {/* Header */}
        <header style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 900, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#0ea5e9', textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            ← Voltar ao site
          </Link>
          <span style={{ fontSize: 12, color: '#475569', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>
            Getsemani IT Solutions
          </span>
        </header>

        {/* Article */}
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>

          {/* Meta */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Integrações</span>
            <span style={{ fontSize: 12, color: '#475569' }}>10 de agosto de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Integração de Sistemas via API: como conectar suas ferramentas sem retrabalho manual
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Uma empresa usa, em média, mais de cem aplicações de software diferentes. E segundo a Mulesoft, menos de um terço delas realmente conversa entre si. O resultado é gente boa gastando parte do dia copiando dado de um sistema pro outro, na mão. Este guia mostra o que é integração de sistemas via API, os tipos mais comuns e como tirar sua empresa do modo copia-e-cola.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-e" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que é integração de sistemas via API?</a></li>
              <li><a href="#sinais" style={{ color: '#94a3b8', textDecoration: 'none' }}>Sinais de que sua empresa tá perdendo tempo com sistemas desconectados</a></li>
              <li><a href="#tipos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Tipos de integração de sistemas</a></li>
              <li><a href="#como-implementar" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como implementar passo a passo</a></li>
              <li><a href="#resultados" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resultados esperados</a></li>
              <li><a href="#cuidados" style={{ color: '#94a3b8', textDecoration: 'none' }}>Erros comuns na hora de integrar</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-e">
            <h2 style={h2Style}>O que é integração de sistemas via API</h2>
            <p style={pStyle}>
              Integração de sistemas via API é o processo de conectar duas ou mais ferramentas de software pra que troquem dados automaticamente, sem que alguém precise exportar planilha de um lado e importar do outro. API significa Interface de Programação de Aplicações. Na prática, é um conjunto de regras que permite que um sistema pergunte alguma coisa pro outro (buscar cliente, atualizar estoque, confirmar pagamento) e receba a resposta em segundos, sem tela, sem clique e sem ninguém no meio do caminho.
            </p>
            <p style={pStyle}>
              O termo pode soar técnico, mas o problema que ele resolve é bem concreto. Pensa numa loja que vende pelo site, recebe pedido no CRM e controla estoque numa planilha separada. Toda venda fechada exige alguém atualizando o estoque manualmente. Esquece uma vez, e o site vende um produto que já acabou. Com os sistemas integrados via API, o pedido desconta o estoque sozinho, no mesmo segundo em que o pagamento é aprovado.
            </p>
            <p style={pStyle}>
              No Brasil essa prática já é maioria. Segundo levantamento da CA Technologies, 79% das empresas usam API pra integrar sistemas de back office. Faz sentido: cada ferramenta nova contratada sem se preocupar em integrar vira mais uma ilha de dado isolada, e cada ilha custa tempo de gente qualificada fazendo trabalho que um robô resolveria em milissegundos.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="sinais" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Sinais de que sua empresa tá perdendo tempo com sistemas desconectados</h2>
            <p style={pStyle}>
              A falta de integração raramente aparece como um problema óbvio. Ela se disfarça de rotina, e é exatamente por isso que sobrevive tanto tempo dentro das empresas. Alguns sinais deixam a conta clara.
            </p>

            <h3 style={h3Style}>Alguém do time passa parte do dia copiando dado de um sistema pro outro</h3>
            <p style={pStyle}>
              Esse é o sinal mais óbvio e também o mais caro. Se alguém exporta planilha do CRM pra jogar na ferramenta de e-mail, ou digita de novo no ERP um pedido que já existe no site, esse tempo tem um custo real: hora de gente qualificada gasta em tarefa que exige zero inteligência.
            </p>

            <h3 style={h3Style}>O relatório da semana leva dois dias pra ficar pronto</h3>
            <p style={pStyle}>
              Quando os números de vendas, financeiro e operação moram em sistemas diferentes que não conversam, alguém precisa juntar tudo manualmente numa planilha antes de qualquer decisão. Isso atrasa decisão que já devia ter sido tomada e ainda corre o risco de sair com dado desatualizado.
            </p>

            <h3 style={h3Style}>Os erros só aparecem depois que o cliente reclama</h3>
            <p style={pStyle}>
              Pedido que não chega no financeiro, cliente que paga e não recebe acesso, estoque que mostra disponível quando já acabou. Sistemas desconectados dependem de alguém lembrando de atualizar cada lado manualmente, e gente esquece. Com integração via API, a atualização acontece sozinha, no momento exato em que o evento ocorre.
            </p>

            <h3 style={h3Style}>A ferramenta nova virou só mais uma aba aberta</h3>
            <p style={pStyle}>
              Empresas usam em média mais de cem aplicações de SaaS diferentes hoje em dia. Boa parte fica subutilizada justamente porque ninguém integrou com o resto do fluxo. A ferramenta é boa, mas vive isolada, e o time acaba evitando usá-la porque dá mais trabalho manter os dados sincronizados na mão do que seguir do jeito antigo.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Quer saber quais dos seus sistemas valem a pena integrar?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos pra mapear onde sua empresa perde mais tempo com retrabalho manual entre ferramentas.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="tipos" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Tipos de integração de sistemas</h2>
            <p style={pStyle}>
              Nem toda integração se resolve do mesmo jeito. A escolha certa depende de quantos sistemas você precisa conectar, com que frequência os dados mudam e quanto isso pode custar.
            </p>

            <h3 style={h3Style}>Integração pontual (point-to-point)</h3>
            <p style={pStyle}>
              É a conexão direta entre dois sistemas específicos, sem intermediário. Funciona bem quando existem poucas integrações e processos simples, mas escala mal. Cada par de sistemas novo exige uma conexão construída do zero.
            </p>

            <h3 style={h3Style}>Webhooks</h3>
            <p style={pStyle}>
              Em vez de um sistema ficar perguntando &quot;já mudou alguma coisa?&quot; de tempos em tempos, o webhook avisa automaticamente assim que um evento acontece, como pagamento aprovado ou formulário preenchido. É leve, rápido e ótimo pra reagir em tempo real.
            </p>

            <h3 style={h3Style}>iPaaS (Integration Platform as a Service)</h3>
            <p style={pStyle}>
              Plataformas como Zapier, Make ou n8n funcionam como um tradutor universal entre sistemas, sem exigir código pra cada conexão. Costumam ser a opção mais rápida de colocar em produção quando a empresa usa ferramentas populares e não tem uma equipe técnica dedicada.
            </p>

            <h3 style={h3Style}>Middleware e ESB (Enterprise Service Bus)</h3>
            <p style={pStyle}>
              Pra empresas com muitos sistemas legados e volume alto de transação, um middleware centraliza toda a comunicação entre sistemas num único ponto, com regra de negócio, fila de mensagens e tratamento de erro mais robusto. É a solução mais estruturada e também a mais cara de manter.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="como-implementar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como implementar integração de sistemas via API</h2>
            <p style={pStyle}>
              Um projeto de integração bem conduzido raramente começa pela ferramenta. Ele começa pelo processo. Siga estes passos:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Mapeie os pontos de contato entre sistemas', desc: 'Liste quais sistemas sua empresa usa hoje e onde o dado precisa fluir de um pro outro: venda que vira pedido, pedido que vira nota fiscal, pagamento que libera acesso. Marque onde esse fluxo ainda depende de alguém copiando dado na mão.' },
                { num: '02', title: 'Verifique se os sistemas já têm API disponível', desc: 'Praticamente toda ferramenta moderna de CRM, ERP, pagamento ou e-commerce já expõe uma API documentada. Sistemas mais antigos podem exigir um meio-termo, como exportação automática de arquivo ou um conector específico.' },
                { num: '03', title: 'Escolha o modelo de integração certo pro seu caso', desc: 'Poucas conexões entre ferramentas populares pedem iPaaS. Reação em tempo real a eventos pede webhook. Muitos sistemas legados com alto volume pedem middleware dedicado. Não existe solução única.' },
                { num: '04', title: 'Implemente primeiro num ambiente de teste', desc: 'Nunca integre direto em produção. Rode a integração num ambiente sandbox, simule cenários de erro (API fora do ar, dado incompleto, timeout) e só publique depois de validar como ela se comporta quando algo dá errado.' },
                { num: '05', title: 'Documente, monitore e trate falha como parte do plano', desc: 'Toda integração vai falhar em algum momento, seja por instabilidade do outro sistema ou mudança de versão da API. Tenha log de cada chamada, alerta automático de falha e um plano de reprocessamento pra quando alguma coisa quebrar.' },
              ].map((s) => (
                <div key={s.num} style={{ display: 'flex', gap: 20, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '20px 24px' }}>
                  <span style={{ fontSize: 28, fontWeight: 800, color: '#0ea5e9', opacity: 0.4, minWidth: 40, lineHeight: 1.3 }}>{s.num}</span>
                  <div>
                    <p style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: 6, fontSize: 16 }}>{s.title}</p>
                    <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 5 */}
          <section id="resultados" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Resultados esperados com integração de sistemas</h2>
            <p style={pStyle}>
              Os números variam conforme quantos sistemas entram na jogada, mas alguns benchmarks de mercado dão uma boa referência:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '79%', label: 'Das empresas brasileiras já usam API pra integrar sistemas de back office, segundo a CA Technologies' },
                { value: '100+', label: 'Aplicações de SaaS em uso, em média, dentro de uma empresa hoje' },
                { value: '29%', label: 'Das aplicações corporativas estão de fato integradas entre si, segundo a Mulesoft' },
                { value: '1–4 sem', label: 'Prazo médio pra colocar uma integração pontual simples no ar' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 32 }}>
              Tem um ganho que nenhum benchmark mede direito: a confiança no dado. Quando ninguém mais precisa perguntar &quot;isso aqui tá atualizado mesmo?&quot; antes de tomar uma decisão, a empresa inteira passa a decidir mais rápido, com menos reunião só pra bater números entre áreas.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="cuidados" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Erros comuns na hora de integrar sistemas via API</h2>
            <p style={pStyle}>
              Integração de sistemas resolve muito problema, mas também cria os seus próprios se for feita sem cuidado. Vale ficar de olho nestes pontos.
            </p>

            <h3 style={h3Style}>Integrar sem antes mapear o processo</h3>
            <p style={pStyle}>
              Automatizar um processo bagunçado só faz a bagunça acontecer mais rápido. Antes de conectar dois sistemas, entenda e, se precisar, corrija o processo manual que existe hoje.
            </p>

            <h3 style={h3Style}>Ignorar autenticação e limite de uso da API</h3>
            <p style={pStyle}>
              Toda API tem regra de segurança, como chave de acesso e token que expira, e um limite de quantas chamadas você pode fazer por minuto. Ignorar isso trava a integração justamente no dia de maior movimento, quase sempre sem aviso prévio.
            </p>

            <h3 style={h3Style}>Não ter plano pra quando a API mudar de versão</h3>
            <p style={pStyle}>
              APIs evoluem, e versões antigas eventualmente saem do ar. Uma integração feita há dois anos sem manutenção corre o risco de parar de funcionar do dia pra noite, sem ninguém perceber até o problema aparecer em outro lugar.
            </p>

            <h3 style={h3Style}>Tratar integração como projeto de uma vez só</h3>
            <p style={pStyle}>
              Sistema muda, processo muda, e a integração precisa acompanhar. Empresa que trata integração como projeto fechado, sem dono e sem revisão periódica, acumula uma dívida técnica silenciosa que aparece justamente quando menos se espera.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Cansado de sistemas que não conversam entre si?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Nossa equipe mapeia suas ferramentas e entrega integrações via API confiáveis, com monitoramento e suporte desde a primeira semana.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20integração%20de%20sistemas%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre integração de sistemas via API</h2>

            {[
              { q: 'O que é integração de sistemas via API?', a: 'É a conexão entre dois ou mais sistemas de software feita através de uma API (Interface de Programação de Aplicações), permitindo que troquem dados automaticamente, sem exportação manual de planilha ou digitação repetida em telas diferentes.' },
              { q: 'Preciso trocar meus sistemas atuais pra poder integrar via API?', a: 'Na maioria dos casos, não. A grande maioria das ferramentas modernas de CRM, ERP, e-commerce e pagamento já oferece API própria. A integração se conecta ao que já existe, sem exigir migração de sistema.' },
              { q: 'Quanto custa integrar sistemas via API?', a: 'Integrações simples com plataformas de iPaaS podem custar a partir de R$ 2.000 a R$ 5.000. Projetos com múltiplos sistemas legados ou middleware dedicado ficam na faixa de R$ 15.000 a R$ 60.000 ou mais, dependendo do volume e da complexidade das regras de negócio envolvidas.' },
              { q: 'Integração via API é segura?', a: 'Sim, quando feita com boas práticas: autenticação por token, criptografia na transmissão dos dados e controle de quem pode acessar cada endpoint. O risco maior não está na tecnologia em si, mas em implementações mal configuradas ou sem monitoramento.' },
              { q: 'Minha empresa é pequena, vale a pena investir em integração de sistemas?', a: 'Vale, e às vezes vale ainda mais pra empresa pequena, porque a equipe enxuta sente rápido o peso do trabalho manual repetitivo. Integrações simples via iPaaS custam pouco e já eliminam boa parte do retrabalho entre ferramentas do dia a dia.' },
            ].map((item, i) => (
              <details key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: '#e2e8f0', fontSize: 16, listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.q}
                  <span style={{ color: '#0ea5e9', fontSize: 20, marginLeft: 12 }}>+</span>
                </summary>
                <p style={{ color: '#64748b', lineHeight: 1.8, marginTop: 12, fontSize: 15 }}>{item.a}</p>
              </details>
            ))}
          </section>

          {/* Autor */}
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 24, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: '#fff', flexShrink: 0 }}>G</div>
            <div>
              <p style={{ fontWeight: 700, color: '#f1f5f9', fontSize: 15, marginBottom: 2 }}>Getsemani IT Solutions</p>
              <p style={{ color: '#475569', fontSize: 13 }}>Especialistas em IA, automação de processos, desenvolvimento web e consultoria de TI para empresas que querem resultados reais.</p>
            </div>
          </div>

        </article>
      </div>
    </>
  );
}

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(20px, 4vw, 28px)',
  fontWeight: 800,
  color: '#f1f5f9',
  marginBottom: 16,
  marginTop: 0,
  lineHeight: 1.3,
};

const h3Style: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 700,
  color: '#e2e8f0',
  marginTop: 32,
  marginBottom: 10,
};

const pStyle: React.CSSProperties = {
  color: '#94a3b8',
  lineHeight: 1.9,
  fontSize: 16,
  marginBottom: 20,
};
