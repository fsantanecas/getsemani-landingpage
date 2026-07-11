import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desenvolvimento Web para Empresas: o Guia Completo de Site e Sistema que Gera Resultado em 2026 | Getsemani IT Solutions',
  description: 'Entenda como um site ou sistema bem construído aumenta conversão e vendas. Tipos de projeto, prazos, custos reais e como escolher quem vai desenvolver o seu.',
  keywords: ['desenvolvimento web', 'criação de site para empresas', 'sistema web personalizado', 'site que converte', 'desenvolvimento de sistemas'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/desenvolvimento-web-para-empresas' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/desenvolvimento-web-para-empresas',
    title: 'Desenvolvimento Web para Empresas: o Guia Completo de Site e Sistema que Gera Resultado',
    description: 'Entenda como um site ou sistema bem construído aumenta conversão e vendas, e como escolher quem vai desenvolver o seu.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Desenvolvimento Web para Empresas' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Desenvolvimento Web para Empresas: o Guia Completo de Site e Sistema que Gera Resultado em 2026',
      description: 'Entenda como um site ou sistema bem construído aumenta conversão e vendas. Tipos de projeto, prazos, custos reais e como escolher quem vai desenvolver o seu.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-07-13',
      dateModified: '2026-07-13',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/desenvolvimento-web-para-empresas',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de site mesmo tendo Instagram e WhatsApp Business?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Redes sociais são ótimas pra relacionamento e alcance, mas a regra do jogo lá não é sua: o algoritmo muda, a conta pode ser bloqueada, e você não tem acesso aos dados de quem visitou. O site é o único canal digital que é realmente seu.' } },
        { '@type': 'Question', name: 'Qual a diferença entre site institucional e sistema personalizado?', acceptedAnswer: { '@type': 'Answer', text: 'Site institucional apresenta a empresa e gera lead. Sistema personalizado automatiza um processo específico do negócio, como agendamento, gestão de clientes ou portal de acesso. Muita empresa acaba precisando dos dois, em momentos diferentes.' } },
        { '@type': 'Question', name: 'Meu site atual é lento ou antigo. Vale reformar ou refazer do zero?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do estado da base atual. Se a estrutura é muito antiga, com mais de 4 ou 5 anos, ou foi construída numa plataforma limitada, geralmente compensa mais refazer do zero do que remendar. Um diagnóstico rápido já mostra qual caminho custa menos no total.' } },
        { '@type': 'Question', name: 'Depois de pronto, o site precisa de manutenção?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Atualizações de segurança, backups e pequenos ajustes de conteúdo são recorrentes. Site sem manutenção acumula vulnerabilidade e fica tecnicamente desatualizado com o tempo.' } },
        { '@type': 'Question', name: 'Um site bonito já é suficiente pra vender mais?', acceptedAnswer: { '@type': 'Answer', text: 'Não sozinho. Design bonito ajuda na primeira impressão, mas conversão depende de velocidade, clareza da oferta, prova social e um caminho óbvio até o contato. Design sem estratégia por trás gera elogio, não venda.' } },
      ],
    },
  ],
};

export default function ArtigoDesenvolvimentoWeb() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Desenvolvimento Web</span>
            <span style={{ fontSize: 12, color: '#475569' }}>13 de julho de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Desenvolvimento Web para Empresas: o Guia Completo de Site e Sistema que Gera Resultado
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Um segundo a mais pra carregar seu site custa 7% de conversão. Isso não é exagero de agência querendo vender projeto, é dado de mercado. E no Brasil, quase dois terços das pessoas acessam a internet só pelo celular. Se o seu site não é rápido, não é responsivo e não foi pensado pra converter, você está perdendo cliente todos os dias sem nem saber.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-e" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que é desenvolvimento web?</a></li>
              <li><a href="#tipos" style={{ color: '#94a3b8', textDecoration: 'none' }}>Site institucional, e-commerce ou sistema: qual é o seu caso</a></li>
              <li><a href="#o-que-importa" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que separa um site bom de um site que converte</a></li>
              <li><a href="#como-implementar" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como funciona o processo de desenvolvimento</a></li>
              <li><a href="#custo-prazo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quanto custa e quanto tempo leva</a></li>
              <li><a href="#resultados" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resultados esperados</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-e">
            <h2 style={h2Style}>O que é desenvolvimento web (e por que só &quot;ter um site&quot; não é suficiente)</h2>
            <p style={pStyle}>
              Desenvolvimento web é o processo de projetar, construir e manter sites, sistemas e plataformas que rodam na internet. Isso vai muito além de ter uma página bonita: envolve arquitetura de informação, performance, segurança, integração com outras ferramentas e, principalmente, um objetivo de negócio claro por trás de cada decisão.
            </p>
            <p style={pStyle}>
              Grande parte das pequenas e médias empresas brasileiras ainda trata o site como item obrigatório da lista, tipo cartão de visita digital. Ele existe, tem o logo, tem o telefone, e para por aí. O problema é que hoje o site compete com Google, Instagram e WhatsApp ao mesmo tempo, na mesma aba do navegador do cliente. Se ele demora, se não fica bom no celular ou se não deixa claro o que fazer a seguir, a pessoa sai. Na maioria das vezes, sai pro concorrente.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="tipos" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Site institucional, e-commerce ou sistema: qual é o seu caso</h2>
            <p style={pStyle}>
              Nem todo projeto de desenvolvimento web é a mesma coisa. Os três formatos mais comuns pra empresa são:
            </p>

            <h3 style={h3Style}>Site institucional ou landing page</h3>
            <p style={pStyle}>
              Foco em apresentar a empresa, gerar autoridade e converter visitante em lead, seja por formulário, WhatsApp ou agendamento direto. É o ponto de partida pra maioria dos negócios que ainda não tem presença digital estruturada.
            </p>

            <h3 style={h3Style}>E-commerce</h3>
            <p style={pStyle}>
              Loja virtual completa, com catálogo, carrinho, pagamento e, geralmente, integração com gateway de pagamento, frete e estoque. Exige mais cuidado com performance e segurança porque lida direto com transação financeira.
            </p>

            <h3 style={h3Style}>Sistema web personalizado</h3>
            <p style={pStyle}>
              Plataformas internas ou voltadas pro cliente final: portal do aluno, sistema de agendamento, painel de gestão, área do cliente. Aqui o desenvolvimento é sob medida, porque cada processo de negócio é diferente do outro.
            </p>
            <p style={pStyle}>
              A pergunta que decide qual caminho seguir não é &quot;quanto custa&quot;. É &quot;o que esse site ou sistema precisa fazer sozinho, sem eu precisar intervir&quot;.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Não sabe qual formato faz sentido pro seu negócio?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos pra mapear exatamente o que sua empresa precisa hoje.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="o-que-importa" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que separa um site bom de um site que converte</h2>
            <p style={pStyle}>
              Existe uma diferença grande entre &quot;o site está no ar&quot; e &quot;o site está gerando resultado&quot;. Alguns fatores concentram a maior parte do impacto:
            </p>

            <h3 style={h3Style}>Velocidade de carregamento</h3>
            <p style={pStyle}>
              Cada segundo extra de demora no carregamento aumenta a taxa de rejeição em até 32%, e uma melhora de só 0,1 segundo já é suficiente pra aumentar conversão no varejo em mais de 8%. Site lento não é detalhe técnico. É dinheiro saindo pela porta todos os dias.
            </p>

            <h3 style={h3Style}>Experiência no celular</h3>
            <p style={pStyle}>
              Praticamente dois terços dos brasileiros acessam a internet exclusivamente pelo celular. Um site que &quot;funciona no celular também&quot; não é suficiente. Ele precisa ser pensado primeiro pro celular, com a versão de desktop vindo depois, não o contrário.
            </p>

            <h3 style={h3Style}>Clareza de próximo passo</h3>
            <p style={pStyle}>
              Todo site precisa deixar óbvio o que a pessoa deve fazer depois de ler aquela página: pedir orçamento, agendar conversa, comprar, preencher um formulário curto. Site bonito sem chamada pra ação clara gera visita. Não gera cliente.
            </p>

            <h3 style={h3Style}>Segurança e infraestrutura</h3>
            <p style={pStyle}>
              Certificado SSL, backups automáticos, proteção contra ataques básicos. Isso não aparece pro visitante, mas aparece rápido quando falta, geralmente no pior momento possível: o dia em que o site cai ou é invadido.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="como-implementar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como funciona o processo de desenvolvimento</h2>
            <p style={pStyle}>
              Um projeto de desenvolvimento web bem conduzido segue uma sequência parecida com esta:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Diagnóstico e escopo', desc: 'Entendemos o objetivo do site ou sistema, o público, os concorrentes e o que precisa existir na primeira versão. É aqui que já se define se o caso pede site institucional, e-commerce ou sistema sob medida.' },
                { num: '02', title: 'Arquitetura e design', desc: 'Definição da estrutura de páginas ou telas, fluxo de navegação e identidade visual. O design já nasce pensando em conversão, não só em estética.' },
                { num: '03', title: 'Desenvolvimento', desc: 'Codificação do front-end, que é o que o usuário vê, e do back-end, que é o que roda por trás (banco de dados, integrações, lógica de negócio), com entregas incrementais pra validar o caminho cedo.' },
                { num: '04', title: 'Testes e ajustes', desc: 'Testes de performance, responsividade e usabilidade antes de qualquer coisa ir ao ar. Ajustes finos de velocidade e SEO técnico entram nessa etapa.' },
                { num: '05', title: 'Lançamento e evolução', desc: 'Publicação, monitoramento dos primeiros resultados e ajustes com base em dado real de uso. Site bom não é projeto que termina. É ativo que evolui.' },
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
            <h2 style={h2Style}>Quanto custa e quanto tempo leva</h2>
            <p style={pStyle}>
              Os valores variam bastante conforme a complexidade, mas dá pra ter uma referência de mercado:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li><strong style={{ color: '#e2e8f0' }}>Landing page ou site institucional simples:</strong> a partir de R$ 3.000, prazo de 1 a 3 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>Site institucional completo, com múltiplas páginas e blog:</strong> entre R$ 6.000 e R$ 15.000, prazo de 3 a 6 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>E-commerce:</strong> a partir de R$ 12.000, prazo de 4 a 10 semanas dependendo das integrações.</li>
              <li><strong style={{ color: '#e2e8f0' }}>Sistema web personalizado:</strong> varia bastante conforme o escopo, geralmente entre R$ 15.000 e R$ 80.000 ou mais, prazo de 6 semanas a alguns meses.</li>
            </ul>
            <p style={pStyle}>
              Tem um detalhe que a maioria não pergunta e deveria: quanto custa manter. Hospedagem, domínio, atualizações de segurança e eventuais ajustes fazem parte do custo real do site ao longo do ano, não só do desenvolvimento inicial.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="resultados" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Resultados esperados com um site bem construído</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '7%', label: 'Queda em conversão a cada 1 segundo extra de carregamento' },
                { value: '65%', label: 'Dos brasileiros acessam a internet só pelo celular' },
                { value: '8,4%', label: 'Aumento em conversão no varejo com ganho de 0,1s de velocidade' },
                { value: '1–3m', label: 'Prazo médio até o site começar a gerar retorno mensurável' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Seu site está deixando dinheiro na mesa?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Nossa equipe entrega sites e sistemas rápidos, seguros e pensados pra conversão desde a primeira semana.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20desenvolvimento%20web%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre desenvolvimento web</h2>

            {[
              { q: 'Preciso de site mesmo tendo Instagram e WhatsApp Business?', a: 'Sim. Redes sociais são ótimas pra relacionamento e alcance, mas a regra do jogo lá não é sua: o algoritmo muda, a conta pode ser bloqueada, e você não tem acesso aos dados de quem visitou. O site é o único canal digital que é realmente seu.' },
              { q: 'Qual a diferença entre site institucional e sistema personalizado?', a: 'Site institucional apresenta a empresa e gera lead. Sistema personalizado automatiza um processo específico do negócio, como agendamento, gestão de clientes ou portal de acesso. Muita empresa acaba precisando dos dois, em momentos diferentes.' },
              { q: 'Meu site atual é lento ou antigo. Vale reformar ou refazer do zero?', a: 'Depende do estado da base atual. Se a estrutura é muito antiga, com mais de 4 ou 5 anos, ou foi construída numa plataforma limitada, geralmente compensa mais refazer do zero do que remendar. Um diagnóstico rápido já mostra qual caminho custa menos no total.' },
              { q: 'Depois de pronto, o site precisa de manutenção?', a: 'Sim. Atualizações de segurança, backups e pequenos ajustes de conteúdo são recorrentes. Site sem manutenção acumula vulnerabilidade e fica tecnicamente desatualizado com o tempo.' },
              { q: 'Um site bonito já é suficiente pra vender mais?', a: 'Não sozinho. Design bonito ajuda na primeira impressão, mas conversão depende de velocidade, clareza da oferta, prova social e um caminho óbvio até o contato. Design sem estratégia por trás gera elogio, não venda.' },
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
