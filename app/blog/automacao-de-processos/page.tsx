import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Automação de Processos: Guia Completo para Empresas em 2026 | Getsemani IT Solutions',
  description: 'Entenda o que é automação de processos, seus tipos, benefícios e como implementar na sua empresa. Reduza custos em até 70% e elimine erros operacionais com IA e RPA.',
  keywords: ['automação de processos', 'automatização de processos', 'RPA', 'automação empresarial', 'processos automatizados', 'automação com IA'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/automacao-de-processos' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/automacao-de-processos',
    title: 'Automação de Processos: Guia Completo para Empresas em 2026',
    description: 'Entenda o que é automação de processos e como implementar na sua empresa para reduzir custos e eliminar erros.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Automação de Processos' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Automação de Processos: Guia Completo para Empresas em 2026',
      description: 'Entenda o que é automação de processos, seus tipos, benefícios e como implementar na sua empresa.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-06-23',
      dateModified: '2026-06-23',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/automacao-de-processos',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'O que é automação de processos?', acceptedAnswer: { '@type': 'Answer', text: 'Automação de processos é o uso de tecnologia para executar tarefas repetitivas e previsíveis sem intervenção humana contínua, reduzindo erros e aumentando a eficiência operacional.' } },
        { '@type': 'Question', name: 'Quanto custa implementar automação de processos?', acceptedAnswer: { '@type': 'Answer', text: 'O custo varia conforme a complexidade. Projetos simples de automação podem começar a partir de R$ 3.000, enquanto soluções corporativas completas com IA podem chegar a R$ 50.000 ou mais. O ROI costuma ser atingido em 3 a 6 meses.' } },
        { '@type': 'Question', name: 'Quais processos podem ser automatizados?', acceptedAnswer: { '@type': 'Answer', text: 'Podem ser automatizados: geração de relatórios, emissão de notas fiscais, qualificação de leads, atendimento ao cliente via chatbot, controle de estoque, envio de e-mails, onboarding de clientes, aprovações de documentos e muito mais.' } },
        { '@type': 'Question', name: 'Quanto tempo leva para implementar?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do escopo. Automações simples ficam prontas em 1 a 2 semanas. Projetos de médio porte levam de 4 a 8 semanas. Transformações digitais completas podem levar de 3 a 6 meses.' } },
        { '@type': 'Question', name: 'Minha empresa precisa ser grande para automatizar processos?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Pequenas e médias empresas são as que mais se beneficiam da automação, pois têm equipes enxutas e ganham produtividade desproporcionalmente maior. Qualquer empresa com processos repetitivos pode e deve automatizar.' } },
      ],
    },
  ],
};

export default function ArtigoAutomacaoProcessos() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Automação</span>
            <span style={{ fontSize: 12, color: '#475569' }}>23 de junho de 2026 · 8 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Automação de Processos: O Guia Completo para Empresas em 2026
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Empresas que automatizam seus processos reduzem custos operacionais em até 70% e liberam suas equipes para o que realmente importa: estratégia, criatividade e crescimento. Neste guia, você vai entender o que é automação de processos, quais tipos existem e como implementar na sua empresa — do zero.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-e" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que é automação de processos?</a></li>
              <li><a href="#por-que" style={{ color: '#94a3b8', textDecoration: 'none' }}>Por que sua empresa precisa de automação?</a></li>
              <li><a href="#tipos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Tipos de automação de processos</a></li>
              <li><a href="#como-implementar" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como implementar passo a passo</a></li>
              <li><a href="#resultados" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resultados esperados</a></li>
              <li><a href="#ia" style={{ color: '#94a3b8', textDecoration: 'none' }}>Automação com Inteligência Artificial</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-e">
            <h2 style={h2Style}>O que é automação de processos?</h2>
            <p style={pStyle}>
              Automação de processos é o uso de tecnologia para executar tarefas repetitivas, previsíveis e baseadas em regras sem a necessidade de intervenção humana contínua. Em vez de um colaborador realizar manualmente uma sequência de ações — preencher planilhas, enviar e-mails, gerar relatórios, atualizar sistemas — um software ou robô executa essas etapas automaticamente, com mais velocidade e zero margem para erros de distração.
            </p>
            <p style={pStyle}>
              O conceito não é novo. Indústrias fabris automatizaram linhas de produção há décadas. O que mudou nos últimos anos é a acessibilidade: hoje, qualquer empresa — pequena, média ou grande — pode automatizar processos administrativos, comerciais e de atendimento sem precisar de uma equipe de TI gigante ou de orçamentos milionários.
            </p>
            <p style={pStyle}>
              A automatização de processos abrange desde fluxos simples (como o envio automático de um e-mail de boas-vindas quando um lead se cadastra) até operações complexas (como a triagem inteligente de documentos com reconhecimento de linguagem natural usando Inteligência Artificial).
            </p>
          </section>

          {/* Seção 2 */}
          <section id="por-que" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Por que sua empresa precisa de automação de processos?</h2>
            <p style={pStyle}>
              A resposta mais direta é: porque seus concorrentes já estão automatizando. Empresas que adotam automação crescem significativamente mais rápido do que as que operam no modelo manual. Mas além da pressão competitiva, há razões concretas e mensuráveis.
            </p>

            <h3 style={h3Style}>Redução de custos operacionais</h3>
            <p style={pStyle}>
              Tarefas manuais e repetitivas consomem tempo de colaboradores qualificados que poderiam estar gerando valor estratégico. Quando você automatiza essas tarefas, o custo por operação cai drasticamente. Empresas que implementam automação de processos relatam reduções de 40% a 70% nos custos operacionais das áreas impactadas.
            </p>

            <h3 style={h3Style}>Eliminação de erros humanos</h3>
            <p style={pStyle}>
              Erros de digitação, esquecimentos, inconsistências entre sistemas — são realidades inevitáveis em processos manuais. Um robô de automação executa a mesma tarefa 10.000 vezes seguidas com o mesmo resultado. Isso é especialmente crítico em processos financeiros, fiscais e de atendimento ao cliente.
            </p>

            <h3 style={h3Style}>Escalabilidade sem contratação proporcional</h3>
            <p style={pStyle}>
              Sem automação, dobrar a operação geralmente significa dobrar a equipe. Com processos automatizados, você pode multiplicar o volume de operações sem contratar proporcionalmente — o que melhora drasticamente a margem de lucro conforme a empresa cresce.
            </p>

            <h3 style={h3Style}>Velocidade e disponibilidade 24/7</h3>
            <p style={pStyle}>
              Um processo automatizado não dorme, não tira férias e não precisa de intervalo. Pedidos recebidos às 3h da manhã podem ser processados, confirmados e até entregues digitalmente sem que nenhum humano precise acordar. Isso transforma a experiência do cliente e aumenta a competitividade.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Pronto para automatizar sua operação?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos para mapear os processos com maior potencial de automação na sua empresa.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="tipos" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Tipos de automação de processos</h2>
            <p style={pStyle}>
              Não existe um único tipo de automação. Diferentes tecnologias atendem diferentes necessidades. Conheça os principais:
            </p>

            <h3 style={h3Style}>RPA — Robotic Process Automation</h3>
            <p style={pStyle}>
              O RPA usa robôs de software que imitam as ações de um usuário humano em sistemas digitais: clicam em botões, preenchem formulários, copiam dados entre sistemas, geram relatórios. É ideal para processos estruturados em sistemas legados que não possuem APIs. Ferramentas populares: UiPath, Automation Anywhere, Power Automate.
            </p>

            <h3 style={h3Style}>Automação com Inteligência Artificial (IA)</h3>
            <p style={pStyle}>
              Enquanto o RPA tradicional segue regras fixas, a automação com IA consegue lidar com variações, exceções e tomar decisões baseadas em contexto. Exemplos: chatbots que entendem linguagem natural, sistemas que classificam documentos automaticamente, algoritmos que preveem demanda de estoque.
            </p>

            <h3 style={h3Style}>BPM — Business Process Management</h3>
            <p style={pStyle}>
              O BPM é uma abordagem mais ampla que envolve modelar, executar, monitorar e otimizar processos de negócio de forma contínua. Ferramentas de BPM criam fluxos de trabalho digitais com aprovações, notificações e rastreamento em tempo real.
            </p>

            <h3 style={h3Style}>Automação de marketing e vendas</h3>
            <p style={pStyle}>
              CRMs modernos e plataformas de marketing automation (como HubSpot, ActiveCampaign ou ferramentas customizadas) automatizam o relacionamento com leads: sequências de e-mails, qualificação automática, notificações para o time comercial no momento certo.
            </p>

            <h3 style={h3Style}>Integrações via API</h3>
            <p style={pStyle}>
              Muitas automatizações não precisam de robôs — basta conectar sistemas via API. Por exemplo: quando um pagamento é aprovado no gateway, o sistema automaticamente libera o acesso ao produto, envia o recibo por e-mail e atualiza o CRM. Tudo sem intervenção humana.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="como-implementar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como implementar automação de processos na sua empresa</h2>
            <p style={pStyle}>
              Implementar automação não precisa ser um projeto gigante. O caminho mais eficiente é começar pequeno, medir os resultados e escalar. Siga estes passos:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Mapeie os processos existentes', desc: 'Liste todas as tarefas repetitivas que sua equipe realiza. Documente o passo a passo de cada uma. Identifique quais são baseadas em regras claras (candidatas ideais para automação) e quais exigem julgamento humano.' },
                { num: '02', title: 'Priorize por impacto e esforço', desc: 'Calcule quanto tempo cada processo consome por semana. Multiplique pelo custo/hora da equipe envolvida. Priorize os processos com maior volume, maior custo e menor complexidade técnica para automatizar primeiro.' },
                { num: '03', title: 'Escolha a tecnologia adequada', desc: 'Processos em sistemas legados sem API → RPA. Processos que exigem interpretação de texto ou imagens → IA. Fluxos entre sistemas modernos → integrações via API. Atendimento ao cliente → chatbot. Cada problema tem a ferramenta certa.' },
                { num: '04', title: 'Implemente em fases (MVP)', desc: 'Automatize primeiro a versão mais simples do processo. Valide com usuários reais. Ajuste. Expanda. Evite tentar automatizar tudo de uma vez — projetos grandes e longos têm maior risco de falha.' },
                { num: '05', title: 'Monitore e otimize continuamente', desc: 'Automação não é "configure e esqueça". Defina KPIs claros (tempo de processamento, taxa de erro, custo por operação) e revise mensalmente. Processos de negócio mudam, e suas automações precisam acompanhar.' },
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
            <h2 style={h2Style}>Resultados esperados com automação de processos</h2>
            <p style={pStyle}>
              Os resultados variam conforme o processo e a maturidade digital da empresa, mas é possível estabelecer benchmarks realistas:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '70%', label: 'Redução em custos operacionais de processos automatizados' },
                { value: '90%', label: 'Diminuição de erros em tarefas baseadas em dados' },
                { value: '4×', label: 'Mais rápido no processamento de tarefas repetitivas' },
                { value: '3–6m', label: 'Prazo médio para atingir o ROI da automação' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 32 }}>
              Além dos números, existe um benefício intangível mas extremamente valioso: a moral da equipe. Colaboradores liberados de tarefas mecânicas e repetitivas ficam mais engajados, mais produtivos nas atividades estratégicas e mais satisfeitos com o trabalho.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="ia" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Automação de processos com Inteligência Artificial</h2>
            <p style={pStyle}>
              A próxima fronteira da automação de processos não é apenas executar regras — é tomar decisões inteligentes. Com Inteligência Artificial integrada aos fluxos de automação, as possibilidades se expandem exponencialmente.
            </p>
            <p style={pStyle}>
              Enquanto a automação tradicional (RPA) segue instruções fixas como "se campo X = Y, então faça Z", a automação com IA consegue:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li>Ler e interpretar documentos em linguagem natural (contratos, e-mails, formulários livres)</li>
              <li>Classificar e priorizar solicitações de suporte com base no sentimento e urgência</li>
              <li>Prever comportamento de clientes e acionar fluxos proativamente</li>
              <li>Detectar anomalias em dados financeiros ou operacionais em tempo real</li>
              <li>Personalizar comunicações em escala com base no perfil de cada usuário</li>
              <li>Aprender com os erros e se aperfeiçoar ao longo do tempo</li>
            </ul>
            <p style={pStyle}>
              Essa combinação — automação de processos potencializada por IA — é o que separa empresas que simplesmente operam de empresas que lideram seus mercados. E a boa notícia: essa tecnologia não é mais exclusividade de grandes corporações. Soluções customizadas e acessíveis estão disponíveis para empresas de qualquer porte.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Transforme sua operação com automação e IA
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Nossa equipe especializada mapeia os processos da sua empresa e entrega soluções de automação customizadas com resultados mensuráveis desde a primeira semana.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20automação%20de%20processos%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre automação de processos</h2>

            {[
              { q: 'O que é automação de processos?', a: 'Automação de processos é o uso de tecnologia para executar tarefas repetitivas e previsíveis sem intervenção humana contínua. Isso inclui desde o envio automático de e-mails até robôs que operam sistemas inteiros sem supervisão, reduzindo custos e eliminando erros.' },
              { q: 'Quanto custa implementar automação de processos?', a: 'O custo varia conforme a complexidade. Automações simples via integração de APIs podem começar a partir de R$ 3.000. Projetos com RPA ou IA customizada ficam na faixa de R$ 10.000 a R$ 50.000. O retorno sobre o investimento (ROI) costuma ser atingido em 3 a 6 meses.' },
              { q: 'Quais processos podem ser automatizados?', a: 'A maioria dos processos repetitivos e baseados em regras pode ser automatizada: geração de relatórios, emissão de notas fiscais, qualificação de leads, atendimento via chatbot, controle de estoque, envio de comunicações, aprovações de documentos, onboarding de clientes e muito mais.' },
              { q: 'Quanto tempo leva para implementar automação de processos?', a: 'Automações simples ficam prontas em 1 a 2 semanas. Projetos de médio porte levam de 4 a 8 semanas. Transformações digitais completas com múltiplos processos e IA integrada podem levar de 3 a 6 meses.' },
              { q: 'Minha empresa precisa ser grande para automatizar processos?', a: 'Não. Pequenas e médias empresas são as que proporcionalmente mais se beneficiam da automação, pois têm equipes enxutas e ganhos de produtividade são imediatos. Qualquer empresa com processos repetitivos pode e deve considerar a automação.' },
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
