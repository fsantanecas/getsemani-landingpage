import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CRM Personalizado vs. CRM Pronto: Qual Escolher pra Sua Empresa | Getsemani IT Solutions',
  description: 'CRM pronto ou personalizado? Compare custos, prazos e quando cada opção faz mais sentido pra escolher o sistema certo pro seu negócio.',
  keywords: ['CRM personalizado', 'CRM pronto', 'CRM sob medida', 'sistema de CRM para empresas', 'dashboard personalizado'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/crm-personalizado-vs-crm-pronto' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/crm-personalizado-vs-crm-pronto',
    title: 'CRM Personalizado vs. CRM Pronto: Qual Escolher pra Sua Empresa',
    description: 'Compare custos, prazos e quando cada opção faz mais sentido pra escolher o sistema certo pro seu negócio.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CRM Personalizado vs. CRM Pronto' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'CRM Personalizado vs. CRM Pronto: Qual Escolher pra Sua Empresa',
      description: 'CRM pronto ou personalizado? Compare custos, prazos e quando cada opção faz mais sentido pra escolher o sistema certo pro seu negócio.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-07-31',
      dateModified: '2026-07-31',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/crm-personalizado-vs-crm-pronto',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'CRM pronto e CRM personalizado podem ser trocados depois?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, mas migrar dados de uma plataforma pra outra dá trabalho e exige planejamento, então vale pensar bem na escolha inicial pra evitar duas migrações em pouco tempo.' } },
        { '@type': 'Question', name: 'Dá pra personalizar um CRM pronto em vez de construir um do zero?', acceptedAnswer: { '@type': 'Answer', text: 'Em parte. A maioria das plataformas prontas permite customizar campos, funis e alguns fluxos de automação, mas dentro dos limites da arquitetura da ferramenta. Personalização profunda de integração ou de lógica de negócio geralmente exige um sistema sob medida.' } },
        { '@type': 'Question', name: 'Empresa pequena já pode pensar em CRM personalizado?', acceptedAnswer: { '@type': 'Answer', text: 'Pode, mas raramente compensa no início. O investimento inicial mais alto costuma fazer mais sentido quando o volume de vendas e a complexidade do processo já justificam o retorno em prazo razoável.' } },
        { '@type': 'Question', name: 'Quanto tempo leva pra ver resultado depois de implantar um CRM?', acceptedAnswer: { '@type': 'Answer', text: 'CRM bem implantado costuma se pagar em cerca de 90 dias, considerando o ganho de organização e de acompanhamento de oportunidades que antes se perdiam.' } },
        { '@type': 'Question', name: 'A Getsemani IT Solutions desenvolve CRM personalizado do zero?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Desenvolvemos sistemas de CRM sob medida, com dashboard personalizado, focados no processo comercial real de cada cliente, além de ajudar a configurar e integrar CRMs prontos quando essa é a opção mais adequada.' } },
      ],
    },
  ],
};

export default function ArtigoCrmPersonalizadoVsPronto() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>CRM com Dashboard Personalizado</span>
            <span style={{ fontSize: 12, color: '#475569' }}>31 de julho de 2026 · 8 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            CRM Personalizado vs. CRM Pronto: Qual Escolher pra Sua Empresa
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Negócio sem CRM perde, em média, 20% das oportunidades de venda só por falta de acompanhamento do lead. Sem um lugar único pra registrar contato, histórico e próximo passo, parte da equipe comercial trabalha de memória, e memória falha. A dúvida que fica é outra: depois de decidir que precisa de CRM, vale assinar uma plataforma pronta ou vale investir num sistema sob medida?
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-e" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que é CRM pronto e o que é CRM personalizado</a></li>
              <li><a href="#crm-pronto" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quando o CRM pronto é a escolha certa</a></li>
              <li><a href="#crm-personalizado" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quando vale a pena um CRM personalizado</a></li>
              <li><a href="#como-decidir" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como decidir qual é o seu caso</a></li>
              <li><a href="#custo-prazo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quanto custa e quanto tempo leva cada opção</a></li>
              <li><a href="#numeros" style={{ color: '#94a3b8', textDecoration: 'none' }}>CRM em números</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-e">
            <h2 style={h2Style}>O que é CRM pronto e o que é CRM personalizado</h2>
            <p style={pStyle}>
              CRM pronto é uma plataforma já construída, testada e usada por milhares de empresas ao mesmo tempo, tipo Pipedrive, RD Station CRM ou HubSpot. Você assina um plano, configura campos e funis dentro do que a ferramenta permite, e começa a usar em dias. O trade-off é que você se adapta ao sistema, não o contrário.
            </p>
            <p style={pStyle}>
              CRM personalizado é construído, ou adaptado, especificamente pro processo comercial da sua empresa. Os campos, os funis, as automações e os relatórios são desenhados em torno de como o seu time realmente vende, não de um modelo genérico que serve pra qualquer segmento. O ganho de encaixe vem acompanhado de um investimento inicial maior e de um prazo de entrega mais longo.
            </p>
            <p style={pStyle}>
              Nenhuma das duas opções é superior por definição. A pergunta certa não é &quot;qual CRM é melhor&quot;, é &quot;o meu processo comercial é padrão o suficiente pra caber numa ferramenta pronta, ou ele é a minha vantagem competitiva e merece um sistema desenhado só pra ele&quot;.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="crm-pronto" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quando o CRM pronto é a escolha certa</h2>
            <p style={pStyle}>
              Pra maioria das pequenas e médias empresas, um CRM de prateleira bem implantado resolve o problema. Faz sentido escolher essa opção quando:
            </p>

            <h3 style={h3Style}>O processo de vendas é relativamente padrão</h3>
            <p style={pStyle}>
              Se o seu funil se parece com o de outras empresas do seu segmento, captar lead, qualificar, apresentar proposta, fechar, uma ferramenta pronta provavelmente já tem esse fluxo configurável nativamente, sem precisar de código customizado.
            </p>

            <h3 style={h3Style}>A equipe é pequena ou está começando a estruturar vendas</h3>
            <p style={pStyle}>
              Times menores costumam ganhar mais com rapidez de implantação do que com personalização profunda. Uma plataforma pronta com poucos usuários pode estar rodando em poucos dias.
            </p>

            <h3 style={h3Style}>O orçamento inicial é limitado</h3>
            <p style={pStyle}>
              O CRM pronto tem barreira de entrada baixa: geralmente uma assinatura mensal por usuário, sem investimento inicial pesado. Isso importa bastante pra empresa que ainda está validando o próprio processo comercial.
            </p>

            <h3 style={h3Style}>Já existe integração pronta com as ferramentas que você usa</h3>
            <p style={pStyle}>
              Se o CRM pronto já se conecta nativamente com seu WhatsApp Business, seu e-mail e sua plataforma de anúncios, você economiza o trabalho, e o custo, de construir essas pontes do zero.
            </p>
          </section>

          {/* Seção 3 */}
          <section id="crm-personalizado" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quando vale a pena um CRM personalizado</h2>
            <p style={pStyle}>
              Por outro lado, tem situação em que o CRM pronto começa a mostrar limite, e é aí que o personalizado compensa:
            </p>

            <h3 style={h3Style}>Seu processo comercial é a sua vantagem competitiva</h3>
            <p style={pStyle}>
              Empresas com um jeito de vender bem diferente do padrão do mercado, com etapas, aprovações ou regras específicas, sentem o CRM pronto como uma camisa de força. Um sistema sob medida modela exatamente o processo que já funciona pra você, em vez de forçar o processo a se encaixar num molde genérico.
            </p>

            <h3 style={h3Style}>O time já é grande ou está em escala acelerada</h3>
            <p style={pStyle}>
              Com dezenas ou centenas de vendedores, o custo por usuário de um CRM pronto cresce rápido, e às vezes ultrapassa o investimento de ter um sistema próprio, sem limite de licenças, no médio prazo.
            </p>

            <h3 style={h3Style}>Você precisa de integração profunda com outros sistemas</h3>
            <p style={pStyle}>
              Quando o CRM precisa conversar em tempo real com ERP, telefonia, sistema de estoque ou uma automação específica de WhatsApp, a integração customizada de um CRM sob medida costuma ser mais estável do que empilhar conectores genéricos numa ferramenta pronta.
            </p>

            <h3 style={h3Style}>Você quer ser dono completo do dado</h3>
            <p style={pStyle}>
              Em plataformas prontas, exportar e cruzar seus próprios dados às vezes esbarra em limitação da ferramenta. Um sistema personalizado te dá controle total sobre onde o dado mora e como ele é analisado, incluindo dashboards construídos especificamente pras métricas que importam pro seu negócio.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Não sabe se o seu processo comercial pede um CRM pronto ou um personalizado?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos pra mapear seu funil de vendas e indicar o caminho com melhor custo-benefício pro seu caso.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 4 */}
          <section id="como-decidir" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como decidir qual é o seu caso</h2>
            <p style={pStyle}>
              Um jeito prático de chegar à resposta certa segue uma sequência parecida com esta:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Mapeie seu funil de vendas atual', desc: 'Escreva as etapas reais do seu processo comercial, do primeiro contato até o fechamento. Se o funil for parecido com o de qualquer empresa do seu segmento, isso já é um sinal a favor do CRM pronto.' },
                { num: '02', title: 'Liste as integrações que você não abre mão', desc: 'WhatsApp, ERP, telefonia, plataforma de e-commerce. Quanto mais integração profunda e em tempo real você precisa, mais peso ganha a opção personalizada.' },
                { num: '03', title: 'Projete o custo em 3 anos, não só no primeiro mês', desc: 'Assinatura mensal por usuário parece barata no começo, mas multiplicada por vários anos e por um time que cresce, pode ultrapassar o investimento de um sistema próprio. Faça essa conta antes de decidir.' },
                { num: '04', title: 'Avalie o quanto seu processo pode mudar em breve', desc: 'Empresa em fase de descoberta, ainda testando como vender, ganha mais flexibilidade com uma ferramenta pronta, que permite ajustar configuração rápido sem depender de desenvolvimento.' },
                { num: '05', title: 'Peça um diagnóstico antes de assinar ou contratar', desc: 'Um comparativo objetivo, com o seu funil real e os seus números, evita o erro mais caro nessa decisão: escolher pela marca mais conhecida em vez de escolher pelo que o seu processo comercial de fato exige.' },
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
          <section id="custo-prazo" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quanto custa e quanto tempo leva cada opção</h2>
            <p style={pStyle}>
              Os valores variam conforme o porte da equipe e a complexidade das integrações, mas dá pra ter uma referência de mercado:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li><strong style={{ color: '#e2e8f0' }}>CRM pronto, plano básico para equipe pequena:</strong> a partir de R$ 100 a R$ 300 por usuário/mês, implantação em poucos dias.</li>
              <li><strong style={{ color: '#e2e8f0' }}>CRM pronto, plano avançado com automações e integrações:</strong> entre R$ 300 e R$ 800 por usuário/mês, implantação de 1 a 3 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>CRM personalizado, projeto sob medida:</strong> a partir de R$ 15.000, prazo de 6 a 12 semanas dependendo das integrações e do volume de funcionalidades.</li>
            </ul>
            <p style={pStyle}>
              Um detalhe que costuma pesar na decisão e que pouca gente calcula de cara: o CRM pronto cobra assinatura pra sempre, mês após mês, por usuário. O CRM personalizado concentra o investimento no início e, depois de pronto, o custo recorrente é só de manutenção, geralmente bem menor que uma assinatura multiplicada por dezenas de licenças.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="numeros" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>CRM em números</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '20%', label: 'Das oportunidades de venda são perdidas em média por empresas sem CRM' },
                { value: '29%', label: 'É o aumento médio em vendas relatado por empresas que adotam um CRM' },
                { value: '39%', label: 'É o ganho médio de produtividade do time comercial depois da adoção' },
                { value: 'US$ 8,71', label: 'Retorno médio para cada US$ 1 investido em CRM, segundo levantamento da Oracle' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 24, fontSize: 13, color: '#475569' }}>
              Números de mercado, agregados de pesquisas e relatórios do setor de CRM, não dados exclusivos da Getsemani IT Solutions.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Pronto pra escolher o CRM certo pro seu negócio?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Fazemos um diagnóstico gratuito de 30 minutos pra mapear seu processo comercial e indicar o caminho com melhor retorno pro seu caso.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20CRM%20personalizado%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre CRM personalizado e CRM pronto</h2>

            {[
              { q: 'CRM pronto e CRM personalizado podem ser trocados depois?', a: 'Sim, mas migrar dados de uma plataforma pra outra dá trabalho e exige planejamento, então vale pensar bem na escolha inicial pra evitar duas migrações em pouco tempo.' },
              { q: 'Dá pra personalizar um CRM pronto em vez de construir um do zero?', a: 'Em parte. A maioria das plataformas prontas permite customizar campos, funis e alguns fluxos de automação, mas dentro dos limites da arquitetura da ferramenta. Personalização profunda de integração ou de lógica de negócio geralmente exige um sistema sob medida.' },
              { q: 'Empresa pequena já pode pensar em CRM personalizado?', a: 'Pode, mas raramente compensa no início. O investimento inicial mais alto costuma fazer mais sentido quando o volume de vendas e a complexidade do processo já justificam o retorno em prazo razoável.' },
              { q: 'Quanto tempo leva pra ver resultado depois de implantar um CRM?', a: 'CRM bem implantado costuma se pagar em cerca de 90 dias, considerando o ganho de organização e de acompanhamento de oportunidades que antes se perdiam.' },
              { q: 'A Getsemani IT Solutions desenvolve CRM personalizado do zero?', a: 'Sim. Desenvolvemos sistemas de CRM sob medida, com dashboard personalizado, focados no processo comercial real de cada cliente, além de ajudar a configurar e integrar CRMs prontos quando essa é a opção mais adequada.' },
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
