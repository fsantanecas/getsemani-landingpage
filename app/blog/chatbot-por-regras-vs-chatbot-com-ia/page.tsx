import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chatbot por Regras vs. Chatbot com IA: Qual Escolher para o Atendimento | Getsemani IT Solutions',
  description: 'Compare chatbot por regras e chatbot com IA generativa: diferenças, custo, quando cada um compensa e como o modelo híbrido evita frustração no atendimento.',
  keywords: ['chatbot por regras', 'chatbot com IA', 'chatbot híbrido', 'chatbot para WhatsApp', 'bot de menu vs IA', 'atendimento automatizado'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/chatbot-por-regras-vs-chatbot-com-ia' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/chatbot-por-regras-vs-chatbot-com-ia',
    title: 'Chatbot por Regras vs. Chatbot com IA: Qual Escolher para o Atendimento da Sua Empresa',
    description: 'Compare chatbot por regras e chatbot com IA generativa: diferenças, custo, quando cada um compensa e como o modelo híbrido funciona.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Chatbot por Regras vs. Chatbot com IA' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Chatbot por Regras vs. Chatbot com IA: Qual Escolher para o Atendimento da Sua Empresa',
      description: 'Compare chatbot por regras e chatbot com IA generativa: diferenças, custo, quando cada um compensa e como o modelo híbrido evita frustração no atendimento.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-10-05',
      dateModified: '2026-10-05',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/chatbot-por-regras-vs-chatbot-com-ia',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Chatbot por regras ainda vale a pena em 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Vale, quando o atendimento tem poucas perguntas repetitivas e respostas fixas, como horário, endereço, segunda via ou status de pedido. Ele é mais barato, previsível e não inventa resposta. O problema aparece quando o cliente foge do roteiro.' } },
        { '@type': 'Question', name: 'Chatbot com IA pode dar resposta errada?', acceptedAnswer: { '@type': 'Answer', text: 'Pode, principalmente quando não há uma base de conhecimento bem organizada por trás. Por isso o projeto precisa de limites claros: o bot responde só com base em material aprovado e transfere para um humano quando não tem segurança.' } },
        { '@type': 'Question', name: 'Dá para começar com regras e migrar para IA depois?', acceptedAnswer: { '@type': 'Answer', text: 'Dá, e muitas vezes é o caminho mais seguro. Os fluxos e as perguntas mapeados no bot de regras viram a base de conhecimento do bot com IA. O que se perde é só o tempo de configuração se o projeto não for pensado para crescer.' } },
        { '@type': 'Question', name: 'O que é um chatbot híbrido?', acceptedAnswer: { '@type': 'Answer', text: 'É o bot que usa regras para o que precisa ser exato, como pagamento, cancelamento e dados sensíveis, e IA generativa para entender perguntas livres e conversar naturalmente. Costuma ser o melhor equilíbrio entre controle e experiência.' } },
        { '@type': 'Question', name: 'Qual é mais barato de manter?', acceptedAnswer: { '@type': 'Answer', text: 'O de regras tem custo mensal menor, mas exige edição manual a cada novo cenário. O de IA custa mais na implantação e no consumo de uso, porém absorve variações de pergunta sem reprogramar fluxo. O custo total depende do volume e da variedade das conversas.' } },
      ],
    },
  ],
};

export default function ArtigoChatbotRegrasVsIA() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Chatbots com IA</span>
            <span style={{ fontSize: 12, color: '#475569' }}>5 de outubro de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Chatbot por Regras vs. Chatbot com IA: Qual Escolher para o Atendimento da Sua Empresa
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Quase todo brasileiro que usa WhatsApp já conversou com um bot de empresa. E uma parte grande saiu dessa conversa irritada. Isso não prova que chatbot é ruim. Prova que a maioria das empresas escolhe o tipo de bot pelo preço ou pela moda, e não pelo tipo de pergunta que o cliente realmente faz. Bot por regras e bot com IA resolvem problemas diferentes, e trocar um pelo outro no lugar errado custa caro.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#diferenca" style={{ color: '#94a3b8', textDecoration: 'none' }}>A diferença que importa na prática</a></li>
              <li><a href="#comparativo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Comparativo lado a lado</a></li>
              <li><a href="#quando-regras" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quando o bot por regras basta</a></li>
              <li><a href="#quando-ia" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quando o bot com IA compensa</a></li>
              <li><a href="#hibrido" style={{ color: '#94a3b8', textDecoration: 'none' }}>O modelo híbrido</a></li>
              <li><a href="#como-decidir" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como decidir em 5 passos</a></li>
              <li><a href="#custo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Custo e manutenção</a></li>
              <li><a href="#numeros" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que os números mostram</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="diferenca">
            <h2 style={h2Style}>A diferença que importa na prática</h2>
            <p style={pStyle}>
              O bot por regras segue um mapa que alguém desenhou antes. O cliente escolhe uma opção, o bot responde o que foi programado para aquela opção. Se a pergunta cabe no mapa, funciona bem. Se não cabe, trava.
            </p>
            <p style={pStyle}>
              O bot com IA generativa lê a frase como uma pessoa leria. Ele tenta entender o que o cliente quer, busca a resposta numa base de conhecimento e escreve em linguagem natural. Aceita erro de digitação, áudio transcrito, pergunta dupla e mudança de assunto no meio da conversa.
            </p>
            <p style={pStyle}>
              A troca tem um preço, e ele não aparece na proposta comercial. O bot de regras é previsível: nunca diz algo que você não escreveu. O bot com IA é flexível, e flexibilidade sem limite vira risco. Escolher entre os dois é decidir quanto controle você aceita trocar por naturalidade.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="comparativo" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Comparativo lado a lado</h2>
            <p style={pStyle}>
              Os pontos abaixo resumem onde cada modelo ganha ou perde. Não existe coluna vencedora geral.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
              {[
                { criterio: 'Entende pergunta fora do roteiro', regras: 'Não. Pede para repetir ou joga para o menu.', ia: 'Sim, na maioria dos casos.' },
                { criterio: 'Previsibilidade da resposta', regras: 'Total. Só diz o que foi escrito.', ia: 'Alta, se houver base de conhecimento e limites bem definidos.' },
                { criterio: 'Tempo para colocar no ar', regras: 'Rápido para poucos fluxos.', ia: 'Maior, por causa da base de conhecimento e dos testes.' },
                { criterio: 'Manutenção', regras: 'Manual. Cada cenário novo vira um fluxo novo.', ia: 'Ajuste da base e revisão de conversas reais.' },
                { criterio: 'Risco de resposta errada', regras: 'Baixo. O erro costuma ser de fluxo, não de conteúdo.', ia: 'Existe, e precisa ser controlado com regras de segurança.' },
                { criterio: 'Experiência do cliente', regras: 'Boa em tarefa simples, frustrante fora dela.', ia: 'Mais natural, desde que saiba transferir para um humano.' },
              ].map((r) => (
                <div key={r.criterio} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '18px 22px' }}>
                  <p style={{ fontWeight: 700, color: '#f1f5f9', marginBottom: 10, fontSize: 15 }}>{r.criterio}</p>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: '0 0 6px' }}><strong style={{ color: '#e2e8f0' }}>Por regras:</strong> {r.regras}</p>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7, margin: 0 }}><strong style={{ color: '#e2e8f0' }}>Com IA:</strong> {r.ia}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 3 */}
          <section id="quando-regras" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quando o bot por regras basta</h2>
            <p style={pStyle}>
              Tem empresa que contrata IA sem precisar. Uma clínica pequena que só responde horário, endereço e confirmação de consulta não ganha muito com um modelo de linguagem. Um menu bem escrito, com três ou quatro caminhos, resolve e custa menos.
            </p>
            <p style={pStyle}>
              O bot por regras também é a escolha certa quando a resposta tem que sair exatamente como está no papel. Cobrança, prazo contratual, política de cancelamento. Nessas áreas, criatividade é defeito.
            </p>

            <h3 style={h3Style}>Sinais de que regras resolvem</h3>
            <p style={pStyle}>
              Pouca variedade de perguntas, volume baixo ou médio, respostas que raramente mudam e um cliente que já sabe o que quer quando chega. Se mais de 80% das conversas caem em meia dúzia de assuntos, comece por aqui.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="quando-ia" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quando o bot com IA compensa</h2>
            <p style={pStyle}>
              A IA começa a valer o investimento quando o cliente fala do jeito dele. E-commerce com catálogo grande, imobiliária, escola, clínica com muitos serviços: nesses cenários, a mesma dúvida chega de dez formas diferentes, e nenhum menu cobre todas.
            </p>
            <p style={pStyle}>
              Outro caso é o atendimento que depende de contexto. O cliente pergunta do prazo, depois do frete, depois muda o endereço. Um bot de regras trata cada mensagem como se fosse a primeira. O bot com IA mantém o fio da conversa e consulta o pedido no sistema enquanto responde.
            </p>

            <h3 style={h3Style}>O que precisa existir antes</h3>
            <p style={pStyle}>
              Base de conhecimento organizada, integração com os sistemas que guardam pedido, agenda ou cadastro e uma regra clara de quando passar para uma pessoa. Sem esses três pontos, a IA improvisa, e improviso em atendimento vira reclamação.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Em dúvida entre regras e IA para o seu atendimento?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Analisamos suas conversas reais em um diagnóstico gratuito de 30 minutos e indicamos o modelo que faz sentido.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 5 */}
          <section id="hibrido" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O modelo híbrido</h2>
            <p style={pStyle}>
              Na maioria dos projetos que acompanhamos, a resposta não é uma coisa nem outra. É as duas. A IA cuida da conversa livre, de entender o que o cliente quer e de explicar com naturalidade. As regras cuidam do que não pode errar: confirmar pagamento, cancelar contrato, mexer em dado pessoal.
            </p>
            <p style={pStyle}>
              Na prática, o cliente conversa com um bot que parece fluido, mas toda ação sensível passa por um fluxo fechado, com confirmação. Se a IA não tem segurança na resposta, o bot assume isso e chama um atendente em vez de arriscar. Esse desenho tira o melhor dos dois mundos e reduz o risco de a IA dizer algo que a empresa não pode cumprir.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="como-decidir" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como decidir em 5 passos</h2>
            <p style={pStyle}>
              Antes de pedir orçamento, vale passar por esta sequência:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Levante as 50 últimas conversas reais', desc: 'Leia o que o cliente de fato perguntou, sem filtrar. O padrão aparece rápido.' },
                { num: '02', title: 'Classifique por assunto', desc: 'Agrupe as conversas e veja quantos assuntos cobrem a maior parte do volume.' },
                { num: '03', title: 'Marque o que não pode errar', desc: 'Separe temas que exigem resposta exata, como preço, prazo, pagamento e dados pessoais.' },
                { num: '04', title: 'Teste o bot de regras no que é simples', desc: 'Se um fluxo resolve a maior parte, comece por ele e meça quantas conversas ainda escapam.' },
                { num: '05', title: 'Adicione IA onde o fluxo quebra', desc: 'Use a IA nos pontos em que o cliente foge do roteiro, com base de conhecimento e transferência para humano.' },
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

          {/* Seção 7 */}
          <section id="custo" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Custo e manutenção</h2>
            <p style={pStyle}>
              As faixas abaixo são referências de mercado e variam conforme o escopo:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li><strong style={{ color: '#e2e8f0' }}>Bot por regras para WhatsApp, com FAQ e triagem:</strong> a partir de R$ 2.500, prazo de 1 a 2 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>Bot híbrido ou com IA, integrado a CRM ou agenda:</strong> entre R$ 6.000 e R$ 18.000, prazo de 3 a 6 semanas.</li>
            </ul>
            <p style={pStyle}>
              O custo mensal também muda de natureza. No bot de regras, você paga em horas de edição toda vez que o negócio muda. No bot com IA, paga em consumo de uso e em revisão das conversas. Nenhum dos dois é &quot;instalar e esquecer&quot;. Quem promete isso está vendendo o lançamento, não o resultado.
            </p>
          </section>

          {/* Seção 8 */}
          <section id="numeros" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que os números mostram</h2>
            <p style={pStyle}>
              Os dados abaixo vêm da pesquisa Panorama Mobile Time/Opinion Box sobre mensageria no Brasil, realizada em 2022 com mais de 2 mil pessoas, e do Mapa do Ecossistema Brasileiro de Bots 2023. São anteriores à popularização da IA generativa no atendimento, então servem como retrato do problema que os bots de regras já enfrentavam. Vale tratar como ponto de partida, não como número atual.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '89%', label: 'Dos usuários de WhatsApp já conversaram com um chatbot de atendimento de empresa' },
                { value: '81%', label: 'Dos usuários já se comunicaram com marcas pelo WhatsApp' },
                { value: '37%', label: 'Dos que usaram chatbot se disseram insatisfeitos com a experiência' },
                { value: '~7 bi', label: 'De mensagens por mês trocadas com bots no Brasil (estimativa do Mapa de Bots 2023)' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>
            <p style={{ ...pStyle, marginTop: 24 }}>
              A leitura é simples. O cliente já está acostumado a falar com bot, e mais de um terço não gostou do que encontrou. A lacuna entre uso e satisfação é onde a escolha certa de tecnologia faz diferença.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Quer um chatbot que resolve em vez de irritar o cliente?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Desenhamos o modelo certo para o seu atendimento, seja por regras, IA ou híbrido, sempre com saída para um humano.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20chatbot%20por%20regras%20vs%20IA%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre chatbot por regras e com IA</h2>

            {[
              { q: 'Chatbot por regras ainda vale a pena em 2026?', a: 'Vale, quando o atendimento tem poucas perguntas repetitivas e respostas fixas, como horário, endereço, segunda via ou status de pedido. Ele é mais barato, previsível e não inventa resposta. O problema aparece quando o cliente foge do roteiro.' },
              { q: 'Chatbot com IA pode dar resposta errada?', a: 'Pode, principalmente quando não há uma base de conhecimento bem organizada por trás. Por isso o projeto precisa de limites claros: o bot responde só com base em material aprovado e transfere para um humano quando não tem segurança.' },
              { q: 'Dá para começar com regras e migrar para IA depois?', a: 'Dá, e muitas vezes é o caminho mais seguro. Os fluxos e as perguntas mapeados no bot de regras viram a base de conhecimento do bot com IA. O que se perde é só o tempo de configuração se o projeto não for pensado para crescer.' },
              { q: 'O que é um chatbot híbrido?', a: 'É o bot que usa regras para o que precisa ser exato, como pagamento, cancelamento e dados sensíveis, e IA generativa para entender perguntas livres e conversar naturalmente. Costuma ser o melhor equilíbrio entre controle e experiência.' },
              { q: 'Qual é mais barato de manter?', a: 'O de regras tem custo mensal menor, mas exige edição manual a cada novo cenário. O de IA custa mais na implantação e no consumo de uso, porém absorve variações de pergunta sem reprogramar fluxo. O custo total depende do volume e da variedade das conversas.' },
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
