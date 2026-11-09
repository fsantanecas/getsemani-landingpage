import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Site Lento Perde Cliente: Checklist de Core Web Vitals para Empresas | Getsemani IT Solutions',
  description: 'Descubra por que um site lento derruba suas vendas e use este checklist de Core Web Vitals (LCP, INP e CLS) para corrigir imagens, scripts e hospedagem sem refazer o site.',
  keywords: ['site lento', 'Core Web Vitals', 'velocidade do site', 'LCP INP CLS', 'otimização de site', 'desenvolvimento web para empresas', 'PageSpeed Insights'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/site-lento-core-web-vitals' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/site-lento-core-web-vitals',
    title: 'Site Lento Perde Cliente: Checklist de Core Web Vitals para Empresas',
    description: 'Por que um site lento derruba suas vendas e um checklist de Core Web Vitals para corrigir imagens, scripts e hospedagem.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Site lento e Core Web Vitals' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Site Lento Perde Cliente: Checklist de Core Web Vitals para Empresas',
      description: 'Descubra por que um site lento derruba suas vendas e use este checklist de Core Web Vitals (LCP, INP e CLS) para corrigir imagens, scripts e hospedagem sem refazer o site.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-11-09',
      dateModified: '2026-11-09',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/site-lento-core-web-vitals',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'O que são Core Web Vitals?', acceptedAnswer: { '@type': 'Answer', text: 'São três métricas do Google que medem a experiência real de quem usa o site: LCP (tempo para o maior elemento aparecer), INP (tempo de resposta aos cliques e toques) e CLS (quanto o layout pula durante o carregamento). Os limites considerados bons são LCP até 2,5 segundos, INP até 200 milissegundos e CLS até 0,1.' } },
        { '@type': 'Question', name: 'Site lento prejudica o posicionamento no Google?', acceptedAnswer: { '@type': 'Answer', text: 'Prejudica de forma moderada. O Google usa a experiência de página como um dos sinais de ranqueamento, mas conteúdo relevante pesa mais. O efeito maior costuma ser indireto: quem sai do site rápido não converte, e isso derruba o resultado do tráfego que você já paga ou conquistou.' } },
        { '@type': 'Question', name: 'Como medir a velocidade do meu site de graça?', acceptedAnswer: { '@type': 'Answer', text: 'Use o PageSpeed Insights, do próprio Google. Ele mostra dados reais de usuários quando o site tem tráfego suficiente e um diagnóstico técnico com os itens a corrigir. Teste a página inicial e as páginas que mais geram contato ou venda, sempre na versão mobile.' } },
        { '@type': 'Question', name: 'Preciso refazer o site para ficar rápido?', acceptedAnswer: { '@type': 'Answer', text: 'Na maioria dos casos, não. Imagens pesadas, scripts de terceiros e hospedagem fraca respondem pela maior parte da lentidão e se corrigem sem mexer no design. Refazer faz sentido quando a base técnica é muito antiga ou o tema carrega código que ninguém usa.' } },
        { '@type': 'Question', name: 'Quanto custa otimizar a velocidade de um site?', acceptedAnswer: { '@type': 'Answer', text: 'Uma otimização focada, com imagens, cache, scripts e ajustes de hospedagem, costuma ficar entre R$ 1.500 e R$ 6.000, dependendo do tamanho do site e da plataforma. É uma faixa de referência de mercado e muda conforme o escopo.' } },
      ],
    },
  ],
};

export default function ArtigoSiteLentoCoreWebVitals() {
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
            <span style={{ fontSize: 12, color: '#475569' }}>9 de novembro de 2026 · 8 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Site Lento Perde Cliente: Checklist de Core Web Vitals para Empresas
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Você investe em anúncio, em Instagram, em indicação. O cliente clica, espera, olha para uma tela em branco e fecha. Você nunca fica sabendo que ele existiu. Site lento é o vazamento mais silencioso de um negócio digital, e quase sempre tem conserto sem refazer nada do visual.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#custo-da-lentidao" style={{ color: '#94a3b8', textDecoration: 'none' }}>O custo real de um site lento</a></li>
              <li><a href="#core-web-vitals" style={{ color: '#94a3b8', textDecoration: 'none' }}>Core Web Vitals sem jargão</a></li>
              <li><a href="#causas" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que costuma deixar o site lento</a></li>
              <li><a href="#medir" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como medir antes de mexer</a></li>
              <li><a href="#checklist" style={{ color: '#94a3b8', textDecoration: 'none' }}>Checklist em 5 passos</a></li>
              <li><a href="#quando-refazer" style={{ color: '#94a3b8', textDecoration: 'none' }}>Otimizar ou refazer?</a></li>
              <li><a href="#custo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quanto custa</a></li>
              <li><a href="#numeros" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que os números mostram</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="custo-da-lentidao">
            <h2 style={h2Style}>O custo real de um site lento</h2>
            <p style={pStyle}>
              Pense numa loja física com a porta emperrada. O cliente puxa, nada acontece, ele desiste e vai à vizinha. Ninguém contabiliza essa venda perdida, porque ela não deixou rastro. No site é igual, só que em escala: cada segundo de espera faz uma fração das visitas ir embora antes de ver o que você vende.
            </p>
            <p style={pStyle}>
              O problema piora no celular. A maior parte do acesso a sites de empresas brasileiras vem de smartphone, muitas vezes em 4G instável e em aparelho que não é topo de linha. Um site que parece ok no notebook do escritório, com fibra, pode ser insuportável na mão do cliente.
            </p>
            <p style={pStyle}>
              E tem o efeito dominó. Se você paga tráfego, está pagando por clique que vira abandono. Se depende de busca orgânica, o Google observa a experiência de página e, entre dois resultados parecidos, tende a favorecer o mais rápido.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="core-web-vitals" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Core Web Vitals sem jargão</h2>
            <p style={pStyle}>
              São três medidas que o Google usa para traduzir &quot;o site é gostoso de usar?&quot; em número. Você não precisa dominar a parte técnica, só saber o que cada uma quer dizer e qual é a meta.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
              {[
                { sigla: 'LCP', nome: 'Largest Contentful Paint', meta: 'Até 2,5 s', desc: 'Quanto tempo leva para o maior elemento da tela (geralmente a imagem principal ou o título) aparecer. É a sensação de "a página carregou".' },
                { sigla: 'INP', nome: 'Interaction to Next Paint', meta: 'Até 200 ms', desc: 'Quanto tempo o site demora para reagir quando alguém clica, toca ou digita. Botão que parece travado costuma ser problema de INP.' },
                { sigla: 'CLS', nome: 'Cumulative Layout Shift', meta: 'Até 0,1', desc: 'Quanto o conteúdo pula de lugar enquanto carrega. É aquele clique que cai no botão errado porque um banner empurrou a tela.' },
              ].map((m) => (
                <div key={m.sigla} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '18px 22px' }}>
                  <p style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: 6, fontSize: 16 }}>{m.sigla} <span style={{ color: '#64748b', fontWeight: 400, fontSize: 14 }}>({m.nome})</span> <span style={{ color: '#0ea5e9', fontSize: 14, marginLeft: 8 }}>Meta: {m.meta}</span></p>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 3 */}
          <section id="causas" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que costuma deixar o site lento</h2>
            <p style={pStyle}>
              Raramente é um vilão só. Na nossa experiência com sites de pequenas e médias empresas, quatro causas aparecem de novo e de novo.
            </p>

            <h3 style={h3Style}>Imagens pesadas</h3>
            <p style={pStyle}>
              A foto do banner saiu direto da câmera, com 4 MB, e foi publicada assim. Parece detalhe, mas essa única imagem pode ser responsável por metade do tempo de carregamento. Converter para formatos modernos como WebP ou AVIF e entregar no tamanho certo para cada tela resolve muito.
            </p>

            <h3 style={h3Style}>Excesso de scripts de terceiros</h3>
            <p style={pStyle}>
              Chat, pixel de anúncio, mapa, mapa de calor, três ferramentas de analytics. Cada uma foi instalada por um bom motivo, e juntas travam o navegador. Muita gente descobre que metade delas ninguém mais olha.
            </p>

            <h3 style={h3Style}>Hospedagem e cache fracos</h3>
            <p style={pStyle}>
              Servidor compartilhado barato, sem cache e sem CDN, responde devagar já no primeiro byte. Não adianta otimizar o resto se a resposta inicial demora um segundo e meio.
            </p>

            <h3 style={h3Style}>Tema ou plugins inchados</h3>
            <p style={pStyle}>
              Em sites feitos com temas prontos, é comum carregar dezenas de arquivos de estilo e script para recursos que a página nem usa. O site fica cheio de peso morto.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Quer saber a nota real do seu site?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos uma análise gratuita de velocidade e mostramos o que corrigir primeiro, em ordem de impacto.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero a análise gratuita →
            </Link>
          </div>

          {/* Seção 4 */}
          <section id="medir" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como medir antes de mexer</h2>
            <p style={pStyle}>
              Otimizar sem medir é chutar. Abra o PageSpeed Insights, do Google, cole o endereço da sua página inicial e rode o teste na aba mobile. Faça o mesmo com a página que mais gera contato ou venda, porque a home raramente é a única que importa.
            </p>
            <p style={pStyle}>
              Anote os três números (LCP, INP e CLS) e o tempo total. Esse é o seu ponto de partida. Depois de cada ajuste, meça de novo. Sem isso, não dá para saber se o trabalho valeu a pena.
            </p>
          </section>

          {/* Seção 5 */}
          <section id="checklist" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Checklist em 5 passos</h2>
            <p style={pStyle}>
              Esta ordem vai do que mais rende ao que mais exige:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Comprima e converta as imagens', desc: 'Use WebP ou AVIF, defina largura e altura de cada imagem e carregue as que ficam abaixo da dobra só quando o usuário rolar a página.' },
                { num: '02', title: 'Faça um inventário de scripts', desc: 'Liste tudo o que carrega no site. Remova o que ninguém usa e adie o que não precisa aparecer no primeiro segundo, como chat e mapa.' },
                { num: '03', title: 'Ative cache e CDN', desc: 'Entregue os arquivos a partir de servidores próximos do visitante e reaproveite o que ele já baixou na visita anterior.' },
                { num: '04', title: 'Reserve espaço para o que carrega depois', desc: 'Banners, vídeos e anúncios precisam ter altura definida, senão a página pula e o CLS estoura.' },
                { num: '05', title: 'Meça de novo e acompanhe todo mês', desc: 'Velocidade se degrada sozinha, a cada plugin novo ou campanha com banner pesado. Reveja os números mensalmente.' },
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
          <section id="quando-refazer" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Otimizar ou refazer?</h2>
            <p style={pStyle}>
              Minha recomendação é sempre começar otimizando. É mais barato, mais rápido e não mexe na identidade visual que a empresa já construiu. Na maioria dos casos, os cinco passos acima levam a nota do mobile de vermelho para verde.
            </p>
            <p style={pStyle}>
              Refazer entra na conversa quando a plataforma é muito antiga, quando o tema carrega código que não dá para remover ou quando o site também precisa de mudanças de conteúdo, formulário e integração. Aí a performance vira só mais um motivo, e não o único.
            </p>
          </section>

          {/* Seção 7 */}
          <section id="custo" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quanto custa</h2>
            <p style={pStyle}>
              As faixas abaixo são referências de mercado e variam conforme tamanho e plataforma do site:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li><strong style={{ color: '#e2e8f0' }}>Otimização focada (imagens, cache, scripts):</strong> entre R$ 1.500 e R$ 6.000, prazo de 1 a 3 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>Site novo, com performance pensada desde o início:</strong> a partir de R$ 6.000, conforme o escopo.</li>
            </ul>
            <p style={pStyle}>
              Compare esse valor com o que você gasta por mês em anúncio. Se uma parte relevante desse dinheiro vira visita abandonada, a otimização costuma se pagar rápido.
            </p>
          </section>

          {/* Seção 8 */}
          <section id="numeros" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que os números mostram</h2>
            <p style={pStyle}>
              Os dois primeiros dados vêm de um estudo do Google sobre velocidade em celular (Think with Google, 2017). São antigos, mas continuam sendo a referência mais citada sobre o tema, e a lógica não mudou. As metas de Core Web Vitals são as vigentes na documentação oficial do Google (web.dev). Trate os percentuais como ordem de grandeza, não como previsão para o seu site.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '53%', label: 'Das visitas em celular são abandonadas quando a página leva mais de 3 segundos para carregar' },
                { value: '+32%', label: 'Na chance de a pessoa sair quando o carregamento passa de 1 para 3 segundos' },
                { value: '2,5 s', label: 'Meta do Google para o LCP ser considerado bom' },
                { value: '200 ms', label: 'Meta do Google para o INP ser considerado bom' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, marginTop: 24 }}>
              O recado é prático: três segundos é um teto, não uma meta confortável. Quem fica abaixo disso entrega a mesma oferta com menos desistência.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Pronto para um site que carrega rápido e converte mais?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Auditamos, corrigimos e acompanhamos a performance do seu site, ou construímos um novo já com velocidade como requisito.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20site%20lento%20e%20Core%20Web%20Vitals%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre site lento e Core Web Vitals</h2>

            {[
              { q: 'O que são Core Web Vitals?', a: 'São três métricas do Google que medem a experiência real de quem usa o site: LCP (tempo para o maior elemento aparecer), INP (tempo de resposta aos cliques e toques) e CLS (quanto o layout pula durante o carregamento). Os limites considerados bons são LCP até 2,5 segundos, INP até 200 milissegundos e CLS até 0,1.' },
              { q: 'Site lento prejudica o posicionamento no Google?', a: 'Prejudica de forma moderada. O Google usa a experiência de página como um dos sinais de ranqueamento, mas conteúdo relevante pesa mais. O efeito maior costuma ser indireto: quem sai do site rápido não converte, e isso derruba o resultado do tráfego que você já paga ou conquistou.' },
              { q: 'Como medir a velocidade do meu site de graça?', a: 'Use o PageSpeed Insights, do próprio Google. Ele mostra dados reais de usuários quando o site tem tráfego suficiente e um diagnóstico técnico com os itens a corrigir. Teste a página inicial e as páginas que mais geram contato ou venda, sempre na versão mobile.' },
              { q: 'Preciso refazer o site para ficar rápido?', a: 'Na maioria dos casos, não. Imagens pesadas, scripts de terceiros e hospedagem fraca respondem pela maior parte da lentidão e se corrigem sem mexer no design. Refazer faz sentido quando a base técnica é muito antiga ou o tema carrega código que ninguém usa.' },
              { q: 'Quanto custa otimizar a velocidade de um site?', a: 'Uma otimização focada, com imagens, cache, scripts e ajustes de hospedagem, costuma ficar entre R$ 1.500 e R$ 6.000, dependendo do tamanho do site e da plataforma. É uma faixa de referência de mercado e muda conforme o escopo.' },
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
