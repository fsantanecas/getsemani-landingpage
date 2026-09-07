import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tendências de Inteligência Artificial para Empresas em 2026 | Getsemani IT Solutions',
  description: 'IA agêntica, adoção em alta e o que ainda é promessa: veja as tendências de inteligência artificial que realmente importam pra empresas em 2026, com dados de mercado.',
  keywords: ['tendências de inteligência artificial', 'IA para empresas 2026', 'IA agêntica', 'inteligência artificial empresarial', 'tendências IA 2026 Brasil', 'automação com IA'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/tendencias-ia-empresas-2026' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/tendencias-ia-empresas-2026',
    title: 'Tendências de Inteligência Artificial para Empresas em 2026',
    description: 'IA agêntica, adoção em alta e o que ainda é promessa: as tendências de IA que realmente importam pra empresas em 2026.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Tendências de Inteligência Artificial para Empresas em 2026' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Tendências de Inteligência Artificial para Empresas em 2026: o Que Já é Realidade (e o Que Ainda é Promessa)',
      description: 'IA agêntica, adoção em alta e o que ainda é promessa: veja as tendências de inteligência artificial que realmente importam pra empresas em 2026, com dados de mercado.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-09-07',
      dateModified: '2026-09-07',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/tendencias-ia-empresas-2026',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'O que é IA agêntica e por que ela é a principal tendência de 2026?', acceptedAnswer: { '@type': 'Answer', text: 'IA agêntica são sistemas de inteligência artificial capazes de planejar, tomar decisões e executar tarefas de ponta a ponta sem supervisão humana constante, diferente de um chatbot que só responde perguntas. Ela é a principal tendência de 2026 porque sai da promessa e começa a aparecer em aplicações reais de empresas de todos os portes.' } },
        { '@type': 'Question', name: 'Vale a pena minha empresa investir em IA agora ou esperar o mercado amadurecer?', acceptedAnswer: { '@type': 'Answer', text: 'Vale investir agora, mas de forma escalonada. Empresas que esperam a tecnologia "amadurecer" costumam perder a janela de vantagem competitiva. O caminho mais seguro é começar com um caso de uso pequeno e bem definido, medir resultado e só então expandir.' } },
        { '@type': 'Question', name: 'Preciso de uma equipe técnica interna para adotar IA na empresa?', acceptedAnswer: { '@type': 'Answer', text: 'Não necessariamente. A maioria das empresas brasileiras que adotam IA hoje usa ferramentas prontas ou soluções customizadas entregues por parceiros especializados, sem precisar montar um time de dados do zero. O que precisa existir internamente é clareza sobre qual problema a IA vai resolver.' } },
        { '@type': 'Question', name: 'Quais tendências de IA são só hype e quais já geram resultado real?', acceptedAnswer: { '@type': 'Answer', text: 'Automação de atendimento, geração de conteúdo e análise preditiva de dados já geram resultado mensurável hoje. IA agêntica totalmente autônoma, agentes que substituem times inteiros sem supervisão e "IA que se programa sozinha" ainda estão mais perto da promessa do que da prática na maioria das empresas.' } },
        { '@type': 'Question', name: 'Quanto custa começar a aplicar IA na minha empresa?', acceptedAnswer: { '@type': 'Answer', text: 'Projetos pontuais de IA aplicada, como um chatbot de atendimento ou automação de um processo específico, costumam começar na faixa de R$ 3.000 a R$ 15.000. Soluções mais amplas, com múltiplos casos de uso integrados, variam de R$ 20.000 a R$ 80.000 ou mais, dependendo da complexidade.' } },
      ],
    },
  ],
};

export default function ArtigoTendenciasIA() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Inteligência Artificial</span>
            <span style={{ fontSize: 12, color: '#475569' }}>7 de setembro de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Tendências de Inteligência Artificial para Empresas em 2026: o Que Já é Realidade (e o Que Ainda é Promessa)
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Todo ano alguém anuncia que "a IA vai mudar tudo". Em 2026 isso finalmente parou de ser só discurso: a adoção cresceu, os agentes autônomos saíram do slide da apresentação e entraram em produção, e o mercado começou a separar quem usa IA de verdade de quem só fala sobre ela. Veja o que já funciona, o que ainda é aposta e como decidir onde investir primeiro.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#panorama" style={{ color: '#94a3b8', textDecoration: 'none' }}>Onde as empresas brasileiras estão com IA agora</a></li>
              <li><a href="#agentica" style={{ color: '#94a3b8', textDecoration: 'none' }}>IA agêntica: a tendência que domina 2026</a></li>
              <li><a href="#realidade" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que já é realidade nas empresas</a></li>
              <li><a href="#promessa" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que ainda é promessa (e exige cuidado)</a></li>
              <li><a href="#como-comecar" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como aplicar as tendências sem cair no hype</a></li>
              <li><a href="#numeros" style={{ color: '#94a3b8', textDecoration: 'none' }}>2026 em números</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="panorama">
            <h2 style={h2Style}>Onde as empresas brasileiras estão com IA agora</h2>
            <p style={pStyle}>
              O salto de adoção foi rápido. Segundo o Cetic.br, o uso de inteligência artificial por empresas brasileiras passou de 13% em 2024 para 17% em 2025. Entre as grandes empresas o movimento foi ainda mais forte, saindo de 38% para 50% de adoção em um ano. Pequenas empresas, com 10 a 49 funcionários, foram de 10% para 15% no mesmo período.
            </p>
            <p style={pStyle}>
              Globalmente o quadro é parecido. O relatório State of AI 2025 da McKinsey mostra que 71% das organizações já usam IA generativa em pelo menos uma função de negócio, com uma média de três funções diferentes por empresa. Ou seja, IA deixou de ser projeto piloto isolado e começou a se espalhar dentro das operações.
            </p>
            <p style={pStyle}>
              O discurso do mercado mudou junto. Até pouco tempo atrás a conversa girava em torno de "testar" IA generativa em algum canto da empresa. Agora o tema é integração com processos existentes, governança de dados, infraestrutura e, principalmente, retorno sobre o investimento. Quem ainda trata IA como experimento isolado está ficando pra trás de quem já colocou ela dentro do fluxo de trabalho.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="agentica" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>IA agêntica: a tendência que domina 2026</h2>
            <p style={pStyle}>
              Se teve um termo que dominou as conversas sobre tecnologia em 2026, foi "IA agêntica". A diferença pra um chatbot comum é grande. Um chatbot responde perguntas dentro de um roteiro. Um agente de IA planeja etapas, toma decisões dentro de um contexto e executa tarefas completas do início ao fim, muitas vezes coordenando várias ferramentas ao mesmo tempo, sem precisar de alguém aprovando cada passo.
            </p>
            <p style={pStyle}>
              O Gartner projeta que 40% das aplicações corporativas vão ter agentes de IA voltados pra tarefas específicas até o fim de 2026, contra menos de 5% em 2025. É um salto de adoção que poucas tecnologias tiveram em tão pouco tempo. Áreas como atendimento, triagem de solicitações, geração de relatórios e qualificação de leads são as que mais recebem esse tipo de agente hoje.
            </p>
            <p style={pStyle}>
              Só que existe um detalhe importante que boa parte dos artigos otimistas sobre o tema não menciona: nem todo projeto de IA agêntica vai dar certo. O próprio Gartner estima que mais de 70% das iniciativas de IA agêntica vão fracassar até 2029, principalmente por falta de definição clara do caso de uso e por falhas de governança. A tecnologia amadureceu, mas a forma como as empresas planejam esses projetos ainda não acompanhou o mesmo ritmo.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Quer saber onde a IA gera resultado real na sua empresa?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos pra mapear onde IA e automação trazem retorno mensurável no seu negócio, sem promessa vazia.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="realidade" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que já é realidade nas empresas</h2>
            <p style={pStyle}>
              Algumas aplicações de IA deixaram de ser tendência e viraram operação normal em empresas de todos os portes. Estas são as que mais aparecem gerando resultado concreto hoje:
            </p>

            <h3 style={h3Style}>Atendimento ao cliente automatizado</h3>
            <p style={pStyle}>
              Chatbots com IA generativa já respondem grande parte das dúvidas de primeiro nível em canais como WhatsApp, site e redes sociais, escalando pra um atendente humano só quando o caso exige. O ganho de velocidade é imediato e o custo por atendimento cai de forma consistente.
            </p>

            <h3 style={h3Style}>Geração e revisão de conteúdo</h3>
            <p style={pStyle}>
              Times de marketing, jurídico e atendimento usam IA generativa pra rascunhar e-mails, contratos, posts e respostas padrão, revisando o resultado em vez de escrever do zero. Isso não elimina o trabalho humano, mas corta uma boa parte do tempo gasto em tarefas repetitivas de escrita.
            </p>

            <h3 style={h3Style}>Análise preditiva de dados</h3>
            <p style={pStyle}>
              Prever demanda de estoque, identificar clientes com risco de cancelamento e antecipar picos de atendimento são usos de IA que já saíram do departamento de dados das grandes corporações e chegaram em empresas médias, geralmente embutidos em dashboards e ferramentas de CRM.
            </p>

            <h3 style={h3Style}>Automação de fluxos internos com IA</h3>
            <p style={pStyle}>
              Segundo o Cetic.br, "automatizar fluxos de trabalho" é o uso mais comum de IA entre empresas brasileiras hoje. Classificação automática de documentos, triagem de solicitações de suporte por urgência e roteamento inteligente de tarefas são exemplos que já rodam em produção, não só em prova de conceito.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="promessa" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que ainda é promessa (e exige cuidado)</h2>
            <p style={pStyle}>
              Nem tudo que aparece em manchete sobre IA já está pronto pra produção. Antes de investir tempo e orçamento, vale separar o que ainda é aposta de longo prazo:
            </p>

            <h3 style={h3Style}>Agentes totalmente autônomos, sem qualquer supervisão</h3>
            <p style={pStyle}>
              A ideia de um agente que toma decisões de negócio sozinho, sem nenhum ponto de checagem humano, ainda é arriscada pra maioria dos casos de uso. Funciona bem em tarefas bem delimitadas. Falha quando o contexto muda ou quando a decisão tem impacto financeiro ou legal maior.
            </p>

            <h3 style={h3Style}>IA substituindo times inteiros da noite pro dia</h3>
            <p style={pStyle}>
              O discurso de que a IA vai eliminar departamentos inteiros em poucos meses não bate com o que se observa na prática. O que acontece é redistribuição de tarefas: a IA assume o repetitivo, e as pessoas passam mais tempo em decisão, relacionamento e exceção. Empresas que tentam pular essa etapa costumam ter retrabalho.
            </p>

            <h3 style={h3Style}>"Plug and play" sem organização de dados</h3>
            <p style={pStyle}>
              Nenhuma ferramenta de IA, por mais avançada que seja, compensa uma base de dados bagunçada. Projetos que ignoram essa etapa e tentam pular direto pra automação sofisticada são os que mais acabam abandonados antes de chegar em produção.
            </p>
          </section>

          {/* Seção 5 */}
          <section id="como-comecar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como aplicar as tendências sem cair no hype</h2>
            <p style={pStyle}>
              O erro mais comum não é ficar de fora da onda de IA. É entrar nela do jeito errado, tentando implantar a tendência mais badalada antes de ter a base pronta. Este é o caminho que costuma funcionar:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Escolha um problema real, não uma tecnologia da moda', desc: 'Em vez de perguntar "como usamos IA agêntica", pergunte "qual processo hoje consome tempo demais e segue um padrão claro". A tecnologia vem depois de definido o problema, nunca antes.' },
                { num: '02', title: 'Organize os dados antes de automatizar', desc: 'Se as informações da sua empresa estão espalhadas em planilhas soltas, sistemas que não conversam entre si ou cadastros incompletos, comece por aí. Toda automação avançada depende de dado limpo pra funcionar direito.' },
                { num: '03', title: 'Comece com escopo pequeno e supervisão humana', desc: 'Escolha um processo específico, mantenha um humano revisando o resultado nas primeiras semanas e só amplie a autonomia da IA depois que o padrão de acerto for consistente.' },
                { num: '04', title: 'Meça retorno, não só uso', desc: 'Não basta a IA estar "sendo usada". Defina métricas claras: tempo economizado, redução de erro, custo por atendimento, taxa de conversão. Sem número, é impossível saber se o projeto está funcionando.' },
                { num: '05', title: 'Escale só o que provou valor', desc: 'Depois que um caso de uso mostrar resultado consistente, replique o mesmo modelo pra outros processos parecidos. Escalar antes de validar é a receita mais comum pra projeto de IA abandonado.' },
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

          {/* Seção 6 */}
          <section id="numeros" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>2026 em números</h2>
            <p style={pStyle}>
              Alguns dados ajudam a colocar o momento em perspectiva:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '17%', label: 'Das empresas brasileiras já usam IA, segundo o Cetic.br (13% em 2024)' },
                { value: '50%', label: 'Das grandes empresas do Brasil adotam IA, ante 38% no ano anterior' },
                { value: '71%', label: 'Das organizações globais usam IA generativa em pelo menos uma função' },
                { value: '40%', label: 'Das aplicações corporativas devem ter agentes de IA até o fim de 2026' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 32 }}>
              Fontes: Cetic.br (Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação), relatório State of AI 2025 da McKinsey e previsões do Gartner divulgadas pela ABES. Os números de adoção agêntica são projeções de mercado pra 2026, não medições fechadas do ano, e devem ser lidos como tendência, não como fato consumado.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Aplique IA na sua empresa com direção, não com hype
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Ajudamos empresas a identificar onde a inteligência artificial gera retorno real e a implementar isso com escopo controlado, medindo resultado desde a primeira semana.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20tendências%20de%20IA%20para%20empresas%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre tendências de IA para empresas</h2>

            {[
              { q: 'O que é IA agêntica e por que ela é a principal tendência de 2026?', a: 'IA agêntica são sistemas capazes de planejar, decidir e executar tarefas de ponta a ponta sem supervisão humana constante, diferente de um chatbot que só responde perguntas dentro de um roteiro. Ela é a principal tendência de 2026 porque saiu da fase de promessa e começou a aparecer em aplicações reais de empresas de todos os portes.' },
              { q: 'Vale a pena minha empresa investir em IA agora ou esperar o mercado amadurecer?', a: 'Vale investir agora, de forma escalonada. Empresas que esperam a tecnologia "amadurecer" costumam perder a janela de vantagem competitiva pros concorrentes que já começaram. O caminho mais seguro é escolher um caso de uso pequeno e bem definido, medir o resultado e só então expandir.' },
              { q: 'Preciso de uma equipe técnica interna para adotar IA na empresa?', a: 'Não necessariamente. A maioria das empresas brasileiras que adotam IA hoje usa ferramentas prontas ou soluções customizadas entregues por parceiros especializados, sem precisar montar um time de dados do zero. O que precisa existir internamente é clareza sobre qual problema a IA vai resolver.' },
              { q: 'Quais tendências de IA são só hype e quais já geram resultado real?', a: 'Automação de atendimento, geração de conteúdo e análise preditiva de dados já geram resultado mensurável hoje. IA agêntica totalmente autônoma, agentes que substituem times inteiros sem supervisão e "IA que se programa sozinha" ainda estão mais perto da promessa do que da prática pra maioria das empresas.' },
              { q: 'Quanto custa começar a aplicar IA na minha empresa?', a: 'Projetos pontuais, como um chatbot de atendimento ou a automação de um processo específico, costumam começar na faixa de R$ 3.000 a R$ 15.000. Soluções mais amplas, com múltiplos casos de uso integrados, variam de R$ 20.000 a R$ 80.000 ou mais, dependendo da complexidade.' },
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
