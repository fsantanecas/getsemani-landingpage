import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboards e Analytics para PMEs: Como Decidir com Dado, Não Achismo | Getsemani IT Solutions',
  description: 'Entenda como dashboards e analytics ajudam pequenas e médias empresas a decidir com base em dado real, não em intuição. Tipos, ferramentas, custos e passo a passo.',
  keywords: ['dashboards para empresas', 'analytics para PME', 'business intelligence', 'BI para pequenas empresas', 'dashboard personalizado', 'tomada de decisão com dados'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/dashboards-analytics-para-empresas' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/dashboards-analytics-para-empresas',
    title: 'Dashboards e Analytics para Pequenas e Médias Empresas: Como Decidir com Dado, Não Achismo',
    description: 'Como dashboards e analytics ajudam PMEs a decidir com base em dado real. Tipos, ferramentas, custos e passo a passo de implementação.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dashboards e Analytics para Empresas' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Dashboards e Analytics para Pequenas e Médias Empresas: Como Decidir com Dado, Não Achismo',
      description: 'Entenda como dashboards e analytics ajudam pequenas e médias empresas a decidir com base em dado real, não em intuição.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-08-17',
      dateModified: '2026-08-17',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/dashboards-analytics-para-empresas',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'O que é um dashboard de analytics?', acceptedAnswer: { '@type': 'Answer', text: 'É um painel visual que reúne os principais indicadores da empresa (vendas, financeiro, operação, marketing) em um só lugar, atualizado automaticamente a partir dos seus sistemas. Substitui a planilha manual que alguém precisa atualizar toda semana.' } },
        { '@type': 'Question', name: 'Preciso ter um cientista de dados na equipe para ter dashboards?', acceptedAnswer: { '@type': 'Answer', text: 'Não. A maioria dos dashboards de gestão (financeiro, comercial, operacional) não exige ciência de dados, exige conectar bem as fontes e desenhar os indicadores certos. Ciência de dados entra quando você quer previsão e modelos preditivos, não para o básico de acompanhar o negócio.' } },
        { '@type': 'Question', name: 'Quanto custa implementar dashboards personalizados?', acceptedAnswer: { '@type': 'Answer', text: 'Um dashboard simples com uma ou duas fontes de dados pode sair a partir de R$ 2.500. Projetos mais completos, com múltiplas integrações e vários painéis, ficam entre R$ 8.000 e R$ 30.000. Ferramentas prontas como Power BI ou Looker Studio reduzem custo de licença, mas ainda exigem configuração.' } },
        { '@type': 'Question', name: 'Quanto tempo leva para ter um dashboard funcionando?', acceptedAnswer: { '@type': 'Answer', text: 'Um painel simples fica pronto em 1 a 3 semanas. Projetos com várias fontes de dados e regras de negócio mais complexas levam de 4 a 8 semanas. O maior gargalo geralmente não é a ferramenta, é a qualidade e organização dos dados de origem.' } },
        { '@type': 'Question', name: 'Dashboard pronto (Power BI, Looker) ou personalizado? Qual escolher?', acceptedAnswer: { '@type': 'Answer', text: 'Ferramentas prontas funcionam bem quando os dados já estão organizados e o time sabe o que quer medir. Um dashboard personalizado vale a pena quando você precisa cruzar sistemas diferentes, aplicar regras específicas do seu negócio ou entregar o painel dentro do seu próprio sistema, sem depender de outra plataforma.' } },
      ],
    },
  ],
};

export default function ArtigoDashboardsAnalytics() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Analytics & Performance</span>
            <span style={{ fontSize: 12, color: '#475569' }}>17 de agosto de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Dashboards e Analytics para Pequenas e Médias Empresas: Como Decidir com Dado, Não Achismo
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Um levantamento recente da Microsoft com pequenas e médias empresas brasileiras mostrou algo curioso: 74% dos gestores dizem usar dados automatizados no dia a dia, mas só 33% conseguem transformar esse número em decisão estratégica de fato. A empresa até tem o dado. O que falta é um jeito de olhar para ele e agir. É aí que entra o dashboard.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-sao" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que são dashboards e analytics, na prática</a></li>
              <li><a href="#por-que" style={{ color: '#94a3b8', textDecoration: 'none' }}>Por que sua empresa precisa parar de decidir no feeling</a></li>
              <li><a href="#tipos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Tipos de dashboard e o que cada um resolve</a></li>
              <li><a href="#como-implementar" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como implementar um dashboard que a equipe realmente usa</a></li>
              <li><a href="#resultados" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resultados esperados</a></li>
              <li><a href="#ia" style={{ color: '#94a3b8', textDecoration: 'none' }}>Do dashboard descritivo ao analytics preditivo com IA</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-sao">
            <h2 style={h2Style}>O que são dashboards e analytics, na prática</h2>
            <p style={pStyle}>
              Dashboard é um painel visual que reúne os indicadores mais importantes do seu negócio em um único lugar, atualizado sozinho a partir dos sistemas que você já usa. Nada de esperar alguém consolidar planilha no fim do mês. O número está ali, ao vivo, pronto para ser olhado.
            </p>
            <p style={pStyle}>
              Analytics é o processo por trás desse painel: coletar dado bruto de várias fontes, cruzar essas informações, transformar em métrica útil e, no estágio mais avançado, prever o que provavelmente vai acontecer. Uma boa analogia é pensar no painel do carro. O dashboard mostra velocidade e nível de combustível agora. Analytics é o que te avisa que, no ritmo atual, você vai ficar sem combustível antes de chegar.
            </p>
            <p style={pStyle}>
              Para uma pequena ou média empresa, isso costuma significar coisas bem concretas: saber qual produto está com margem apertada sem precisar pedir relatório pro financeiro, enxergar em tempo real se a meta de vendas do mês está no caminho certo, identificar qual canal de marketing traz cliente de verdade e não só clique.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="por-que" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Por que sua empresa precisa parar de decidir no feeling</h2>
            <p style={pStyle}>
              Intuição de quem conhece o negócio tem valor, ninguém discute isso. O problema é usar só ela quando existe dado disponível sendo ignorado. Um estudo da IBM com CEOs de 30 países, incluindo o Brasil, encontrou que apenas 43% das empresas usam inteligência artificial como base para decisões estratégicas. A maioria ainda decide majoritariamente no achismo, mesmo tendo acesso a ferramentas digitais.
            </p>
            <p style={pStyle}>
              O efeito disso aparece rápido no caixa. Preço definido sem olhar margem real de cada produto. Campanha de marketing que continua rodando porque "sempre funcionou", mesmo com o retorno caindo há meses. Contratação feita porque "parece que o time está sobrecarregado", sem nenhum número que confirme isso.
            </p>

            <h3 style={h3Style}>O gap entre ter dado e usar dado</h3>
            <p style={pStyle}>
              Segundo o mesmo levantamento da Microsoft citado acima, 74% dos gestores de PME brasileiras já usam dados automatizados com frequência no dia a dia. O gargalo não é falta de informação, é falta de um lugar único e simples que traduza aquilo em decisão. É exatamente essa lacuna que o dashboard resolve.
            </p>

            <h3 style={h3Style}>Velocidade vira vantagem competitiva</h3>
            <p style={pStyle}>
              Quando o número certo está na tela, a decisão que levaria dias de troca de e-mail e planilha acontece em minutos. Isso importa mais em mercado apertado, onde o concorrente que ajusta preço, estoque ou campanha mais rápido sai na frente antes de você nem perceber que perdeu terreno.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Quer enxergar seu negócio com clareza?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos para mapear quais dados da sua empresa já podem virar dashboard hoje.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="tipos" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Tipos de dashboard e o que cada um resolve</h2>
            <p style={pStyle}>
              Não existe um único dashboard "certo" pra empresa toda. Cada área tem sua própria pergunta a responder, e o painel deveria ser desenhado em cima dessa pergunta, não do software que está disponível.
            </p>

            <h3 style={h3Style}>Dashboard financeiro</h3>
            <p style={pStyle}>
              Fluxo de caixa, contas a pagar e receber, margem por produto ou serviço, inadimplência. É o painel que costuma trazer o retorno mais rápido, porque expõe imediatamente onde o dinheiro está vazando.
            </p>

            <h3 style={h3Style}>Dashboard comercial</h3>
            <p style={pStyle}>
              Funil de vendas, taxa de conversão por vendedor, ticket médio, meta batida versus meta projetada. Ajuda a corrigir rota no meio do mês, em vez de descobrir o resultado só no fechamento.
            </p>

            <h3 style={h3Style}>Dashboard operacional</h3>
            <p style={pStyle}>
              Produtividade por equipe, tempo médio de atendimento, estoque, prazo de entrega. É o tipo mais comum em empresas que prestam serviço ou têm operação logística.
            </p>

            <h3 style={h3Style}>Dashboard de marketing</h3>
            <p style={pStyle}>
              Custo por lead, origem do tráfego, taxa de conversão por canal. Sem esse painel, é comum a empresa continuar investindo em canal que traz volume, mas não traz cliente que paga.
            </p>

            <h3 style={h3Style}>Ferramentas mais usadas</h3>
            <p style={pStyle}>
              Power BI e Looker Studio são as opções prontas mais comuns, com boa curva de aprendizado e custo de licença baixo. Metabase é uma alternativa open source interessante para quem quer mais controle. Já quando o negócio precisa cruzar sistemas próprios ou entregar o painel dentro do produto da empresa, o caminho costuma ser um dashboard personalizado, construído sob medida.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="como-implementar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como implementar um dashboard que a equipe realmente usa</h2>
            <p style={pStyle}>
              A maior causa de dashboard abandonado não é tecnologia ruim, é painel que ninguém pediu e que não responde nenhuma pergunta real do dia a dia. Siga esta ordem para evitar isso:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Defina as 3 a 5 perguntas que o painel precisa responder', desc: 'Antes de escolher ferramenta, pergunte ao time: qual decisão vocês tomam toda semana sem ter o número na mão? Essa lista curta é o ponto de partida, não o software.' },
                { num: '02', title: 'Mapeie de onde vem cada dado', desc: 'ERP, planilha, CRM, plataforma de e-commerce, sistema financeiro. Confirme se o dado já existe em algum lugar antes de assumir que precisa ser coletado do zero.' },
                { num: '03', title: 'Escolha entre ferramenta pronta ou painel personalizado', desc: 'Se os dados já estão organizados e a necessidade é padrão, Power BI ou Looker Studio resolvem rápido. Se envolve integração entre sistemas diferentes ou regra de negócio específica, vale um painel sob medida.' },
                { num: '04', title: 'Construa a primeira versão em semanas, não meses', desc: 'Comece com os indicadores essenciais funcionando de verdade. É mais fácil melhorar um painel simples que já está em uso do que terminar um painel completo que ninguém testou ainda.' },
                { num: '05', title: 'Coloque o painel na rotina, não só no computador', desc: 'Defina quem olha o quê e com que frequência: reunião semanal de vendas com o dashboard aberto, checagem diária de caixa. Dashboard que não vira hábito de gestão perde relevância em poucas semanas.' },
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
            <h2 style={h2Style}>Resultados esperados com dashboards e analytics</h2>
            <p style={pStyle}>
              Alguns números ajudam a dimensionar o tamanho do problema que um dashboard resolve, e o espaço de melhoria disponível pra quem ainda não decide com dado:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '74%', label: 'dos gestores de PME no Brasil já usam dados automatizados com frequência (Microsoft)' },
                { value: '33%', label: 'conseguem de fato transformar esses dados em decisão estratégica (Microsoft)' },
                { value: '43%', label: 'das empresas usam IA como base para decisão estratégica, entre CEOs de 30 países (IBM)' },
                { value: '1–3 sem.', label: 'prazo estimado para um primeiro dashboard funcional entrar no ar (estimativa Getsemani)' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 32 }}>
              O dado mais revelador não é o quanto a empresa economiza, é a distância entre os dois primeiros números da lista acima. Ter acesso a dado automatizado virou padrão. Saber transformar esse dado em decisão ainda é o que separa quem cresce de quem só acumula planilha.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="ia" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Do dashboard descritivo ao analytics preditivo com IA</h2>
            <p style={pStyle}>
              O dashboard tradicional responde "o que aconteceu": quanto vendi, quanto gastei, quantos clientes atendi. É útil, mas olha só para trás. A próxima camada, cada vez mais acessível pra empresa de qualquer porte, é o analytics preditivo: usar IA para responder "o que provavelmente vai acontecer" e "o que fazer a respeito".
            </p>
            <p style={pStyle}>
              Na prática, isso aparece em coisas como:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li>Previsão de demanda de estoque com base em sazonalidade histórica</li>
              <li>Alerta automático quando uma métrica sai do padrão esperado, sem precisar de alguém olhando o gráfico o dia inteiro</li>
              <li>Identificação de clientes com risco de cancelamento antes que eles de fato cancelem</li>
              <li>Simulação de cenário: "se eu subir o preço em 8%, qual o impacto estimado na demanda?"</li>
              <li>Resumo em linguagem natural do que mudou no painel desde a última semana</li>
            </ul>
            <p style={pStyle}>
              O ponto importante aqui é sequência. Empresa que ainda não tem um dashboard básico funcionando não deveria pular direto pra IA preditiva. O modelo preditivo é tão bom quanto o dado que alimenta ele, então o primeiro passo continua sendo o mesmo: organizar a base antes de sofisticar a análise.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Troque a planilha manual por um painel que decide junto com você
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Mapeamos os dados que sua empresa já tem e construímos um dashboard personalizado, conectado aos seus sistemas, com os indicadores que realmente importam pro seu negócio.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20dashboards%20e%20analytics%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre dashboards e analytics</h2>

            {[
              { q: 'O que é um dashboard de analytics?', a: 'É um painel visual que reúne os principais indicadores da empresa (vendas, financeiro, operação, marketing) em um só lugar, atualizado automaticamente a partir dos seus sistemas. Substitui a planilha manual que alguém precisa atualizar toda semana.' },
              { q: 'Preciso ter um cientista de dados na equipe para ter dashboards?', a: 'Não. A maioria dos dashboards de gestão (financeiro, comercial, operacional) não exige ciência de dados, exige conectar bem as fontes e desenhar os indicadores certos. Ciência de dados entra quando você quer previsão e modelos preditivos, não para o básico de acompanhar o negócio.' },
              { q: 'Quanto custa implementar dashboards personalizados?', a: 'Um dashboard simples com uma ou duas fontes de dados pode sair a partir de R$ 2.500. Projetos mais completos, com múltiplas integrações e vários painéis, ficam entre R$ 8.000 e R$ 30.000. Ferramentas prontas como Power BI ou Looker Studio reduzem custo de licença, mas ainda exigem configuração.' },
              { q: 'Quanto tempo leva para ter um dashboard funcionando?', a: 'Um painel simples fica pronto em 1 a 3 semanas. Projetos com várias fontes de dados e regras de negócio mais complexas levam de 4 a 8 semanas. O maior gargalo geralmente não é a ferramenta, é a qualidade e organização dos dados de origem.' },
              { q: 'Dashboard pronto (Power BI, Looker) ou personalizado? Qual escolher?', a: 'Ferramentas prontas funcionam bem quando os dados já estão organizados e o time sabe o que quer medir. Um dashboard personalizado vale a pena quando você precisa cruzar sistemas diferentes, aplicar regras específicas do seu negócio ou entregar o painel dentro do seu próprio sistema, sem depender de outra plataforma.' },
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
