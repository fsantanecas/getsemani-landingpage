import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Inteligência Artificial para Empresas: o Guia Prático para Aplicar e Gerar Resultado em 2026 | Getsemani IT Solutions',
  description: 'Entenda como aplicar inteligência artificial no seu negócio na prática: onde ela já gera resultado, erros comuns e um passo a passo real para 2026.',
  keywords: ['inteligência artificial para empresas', 'IA nos negócios', 'adoção de IA no Brasil', 'ferramentas de IA para empresas', 'implementação de inteligência artificial'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/inteligencia-artificial-para-empresas' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/inteligencia-artificial-para-empresas',
    title: 'Inteligência Artificial para Empresas: o Guia Prático para Aplicar e Gerar Resultado',
    description: 'Entenda como aplicar inteligência artificial no seu negócio na prática, onde ela já gera resultado e como evitar os erros mais comuns.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Inteligência Artificial para Empresas' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Inteligência Artificial para Empresas: o Guia Prático para Aplicar e Gerar Resultado em 2026',
      description: 'Entenda como aplicar inteligência artificial no seu negócio na prática: onde ela já gera resultado, erros comuns e um passo a passo real para 2026.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-07-21',
      dateModified: '2026-07-21',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/inteligencia-artificial-para-empresas',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Minha empresa é pequena demais para usar IA?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Boa parte dos ganhos de IA hoje vêm de ferramentas acessíveis e processos simples, como automação de atendimento e organização de dados. O tamanho da empresa importa menos do que ter um processo claro para automatizar.' } },
        { '@type': 'Question', name: 'Quanto custa implementar IA em uma empresa?', acceptedAnswer: { '@type': 'Answer', text: 'Varia bastante conforme o escopo. Um piloto bem definido, cobrindo um processo específico, custa uma fração do que um projeto abrangente de transformação digital, e é o ponto de partida recomendado para a maioria das empresas.' } },
        { '@type': 'Question', name: 'Preciso ter um time de tecnologia interno para usar IA?', acceptedAnswer: { '@type': 'Answer', text: 'Não necessariamente. Muitas empresas começam com consultoria externa especializada para mapear o processo, escolher a ferramenta certa e treinar a equipe, sem precisar contratar um time de dados do zero.' } },
        { '@type': 'Question', name: 'Quanto tempo leva para ver resultado com IA?', acceptedAnswer: { '@type': 'Answer', text: 'Um piloto bem escopado costuma mostrar sinais de resultado entre 30 e 60 dias. Projetos mais amplos, que envolvem integração com vários sistemas, levam mais tempo, geralmente alguns meses até maturar.' } },
        { '@type': 'Question', name: 'IA vai substituir minha equipe?', acceptedAnswer: { '@type': 'Answer', text: 'Na maioria dos casos, o efeito real é a IA assumir tarefas repetitivas e liberar a equipe para atividades que exigem julgamento, relacionamento e decisão, não substituição direta de pessoas. Empresas que comunicam isso bem tendem a ter adoção mais tranquila internamente.' } },
      ],
    },
  ],
};

export default function ArtigoInteligenciaArtificial() {
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
            <span style={{ fontSize: 12, color: '#475569' }}>21 de julho de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Inteligência Artificial para Empresas: o Guia Prático para Aplicar e Gerar Resultado
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            A adoção de IA nas empresas brasileiras saltou de 13% em 2024 para 17% em 2025, segundo o Cetic.br, e entre as grandes empresas esse número já passa de 50%. O entusiasmo é real. A execução, nem tanto: 72% das empresas do país ainda estão em estágio iniciante ou experimental, testando ferramentas isoladas sem uma estratégia por trás. Esse guia é sobre a diferença entre os dois grupos.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-e" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que é IA aplicada a negócios, na prática</a></li>
              <li><a href="#onde-gera-resultado" style={{ color: '#94a3b8', textDecoration: 'none' }}>Onde a inteligência artificial já gera resultado real</a></li>
              <li><a href="#erros-comuns" style={{ color: '#94a3b8', textDecoration: 'none' }}>Os erros mais comuns na hora de adotar IA</a></li>
              <li><a href="#como-implementar" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como implementar IA na sua empresa</a></li>
              <li><a href="#custo-prazo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quanto custa e quanto tempo leva</a></li>
              <li><a href="#resultados" style={{ color: '#94a3b8', textDecoration: 'none' }}>IA em números</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-e">
            <h2 style={h2Style}>O que é IA aplicada a negócios, na prática</h2>
            <p style={pStyle}>
              Tem muita confusão entre &quot;usar IA&quot; e &quot;ter uma estratégia de IA&quot;. Usar IA é pedir para o ChatGPT escrever um e-mail. Ter estratégia é entender qual processo da empresa tem volume, repetição e dado disponível o suficiente para que um sistema de IA consiga aprender com ele e gerar economia de tempo, redução de erro ou aumento de receita de forma consistente.
            </p>
            <p style={pStyle}>
              Na prática, inteligência artificial aplicada a negócios cobre um leque bem mais amplo do que chatbot de atendimento. Envolve modelos de previsão de demanda, sistemas de recomendação, análise automática de documentos e contratos, triagem de leads, precificação dinâmica, detecção de fraude, geração de conteúdo e relatórios, e automação de decisões que antes dependiam inteiramente de uma pessoa olhando planilha. A pergunta que separa um projeto de IA que dá certo de um que vira custo permanente não é &quot;essa tecnologia é boa?&quot;. É &quot;esse problema específico da minha empresa se beneficia de padrão, previsão ou linguagem natural, e eu tenho dado suficiente para alimentar isso?&quot;.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="onde-gera-resultado" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Onde a inteligência artificial já gera resultado real</h2>
            <p style={pStyle}>
              Empresas que colhem resultado de IA hoje concentraram esforço em áreas com alto volume de tarefas repetitivas e dado estruturado. Alguns exemplos aparecem com frequência em implementações bem-sucedidas.
            </p>

            <h3 style={h3Style}>Atendimento e suporte ao cliente</h3>
            <p style={pStyle}>
              Chatbots e assistentes de IA generativa já respondem boa parte das dúvidas de primeiro nível, como status de pedido, horário de funcionamento e dúvidas de cadastro, liberando a equipe humana para casos que exigem julgamento. O ganho não é só em custo, é em velocidade de resposta, o que impacta direto satisfação e conversão.
            </p>

            <h3 style={h3Style}>Análise de dados e relatórios</h3>
            <p style={pStyle}>
              Times comerciais e financeiros vinham gastando horas montando relatório manual em planilha. Ferramentas de IA conseguem consolidar dados de fontes diferentes, identificar padrões e gerar relatório pronto, ou até responder perguntas em linguagem natural sobre os números do negócio.
            </p>

            <h3 style={h3Style}>Vendas e marketing</h3>
            <p style={pStyle}>
              Modelos de IA ajudam a qualificar leads, prevendo quem tem mais chance de fechar, personalizar comunicação em escala e otimizar campanhas de mídia paga com base em performance histórica. Empresas de e-commerce usam recomendação de produto baseada em IA há anos, e o mesmo princípio vem migrando para o B2B.
            </p>

            <h3 style={h3Style}>Processos internos e documentos</h3>
            <p style={pStyle}>
              Contratos, notas fiscais, formulários e planilhas que antes exigiam digitação manual agora podem ser lidos e processados por IA com taxa de erro menor do que a humana em tarefas repetitivas. Isso reduz retrabalho e libera a equipe para atividade de maior valor.
            </p>
          </section>

          {/* Seção 3 */}
          <section id="erros-comuns" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Os erros mais comuns na hora de adotar IA</h2>
            <p style={pStyle}>
              Depois de acompanhar dezenas de empresas tentando implementar IA, alguns erros se repetem tanto que já dá para prever onde o projeto vai travar.
            </p>
            <p style={pStyle}>
              O primeiro é começar pela ferramenta em vez do problema. A empresa assina um software de IA porque viu em um post no LinkedIn, sem antes mapear qual processo interno realmente precisa disso. O resultado é mais uma licença que ninguém usa depois do terceiro mês.
            </p>
            <p style={pStyle}>
              O segundo é ignorar a qualidade do dado. IA aprende com o que você alimenta nela. Se o CRM está bagunçado, se as planilhas têm inconsistência, se não existe histórico organizado, o modelo vai errar, e o erro vai minar a confiança da equipe no projeto inteiro antes mesmo dele amadurecer.
            </p>
            <p style={pStyle}>
              O terceiro é tratar IA como projeto de TI isolado, sem envolver quem vai usar no dia a dia. Ferramenta que a equipe não entende ou não confia simplesmente não é usada, não importa quão sofisticada seja.
            </p>
            <p style={pStyle}>
              E o quarto, talvez o mais caro, é não medir resultado. A empresa implementa, acha que &quot;parece estar ajudando&quot; e nunca compara antes e depois em número concreto. Sem métrica, fica impossível justificar continuar investindo, e o projeto morre no orçamento do ano seguinte.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Quer descobrir onde a IA pode gerar resultado real na sua empresa?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos para mapear os processos com maior potencial de automação e retorno no seu negócio.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 4 */}
          <section id="como-implementar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como implementar IA na sua empresa em 5 passos</h2>
            <p style={pStyle}>
              Um projeto de IA aplicada a negócios com boas chances de dar certo segue uma sequência parecida com esta:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Mapeie processos com volume e repetição', desc: 'Liste as tarefas que consomem mais horas da sua equipe e que se repetem com um padrão identificável: atendimento, geração de relatório, triagem de pedidos, resposta a e-mails recorrentes. São esses processos que costumam dar o retorno mais rápido quando automatizados com IA.' },
                { num: '02', title: 'Avalie a qualidade dos seus dados', desc: 'Antes de escolher qualquer ferramenta, olhe para o que você já tem: CRM, planilhas, histórico de atendimento, ERP. Dado organizado e consistente é o que faz um modelo de IA funcionar bem. Se o dado está bagunçado, esse é o primeiro investimento a fazer, antes da IA em si.' },
                { num: '03', title: 'Escolha um piloto pequeno e mensurável', desc: 'Resista à tentação de implementar IA em toda a empresa de uma vez. Escolha um processo específico, defina uma métrica clara de sucesso e rode um piloto de 30 a 60 dias.' },
                { num: '04', title: 'Envolva a equipe que vai usar a ferramenta', desc: 'Treine as pessoas, explique o que a IA faz e o que ela não faz, e crie um canal para reportar erro ou dúvida. Adoção de IA é tanto mudança de processo quanto mudança de cultura.' },
                { num: '05', title: 'Meça, ajuste e expanda', desc: 'Depois do piloto, compare o resultado com a métrica definida no início. Se funcionou, expanda para outros processos parecidos. Se não funcionou como esperado, ajuste o escopo ou o modelo antes de desistir.' },
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
              Os valores variam bastante conforme a complexidade e o número de sistemas envolvidos, mas dá para ter uma referência de mercado:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li><strong style={{ color: '#e2e8f0' }}>Piloto em um único processo, com ferramenta já pronta configurada:</strong> a partir de R$ 3.000, prazo de 2 a 4 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>Projeto de IA aplicada a um processo específico, com modelo próprio ou integração a sistemas:</strong> entre R$ 10.000 e R$ 35.000, prazo de 6 a 12 semanas.</li>
              <li><strong style={{ color: '#e2e8f0' }}>Programa de IA em múltiplas áreas da empresa, com consultoria contínua:</strong> a partir de R$ 40.000, prazo de alguns meses, com acompanhamento recorrente.</li>
            </ul>
            <p style={pStyle}>
              Um detalhe que a maioria não pergunta e deveria: quanto custa manter. Ajuste de modelo, monitoramento de resultado e retreinamento fazem parte do custo real de um projeto de IA ao longo do tempo, não só da implementação inicial.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="resultados" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>IA em números: o que os dados mostram</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '17%', label: 'Das empresas brasileiras já usam IA em 2025, contra 13% em 2024' },
                { value: '50%', label: 'Das grandes empresas do Brasil já adotaram IA, quase o dobro de 2024' },
                { value: '72%', label: 'Das empresas brasileiras ainda estão em estágio iniciante ou experimental de adoção' },
                { value: '88%', label: 'Das empresas planejam aumentar o investimento em IA em 2026' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 24, fontSize: 13, color: '#475569' }}>
              Fontes: Cetic.br (TIC Empresas 2025) e IDC/Microsoft. O dado de investimento planejado para 2026 é uma projeção de pesquisa setorial, não um número auditado.
            </p>

            <p style={{ ...pStyle, marginTop: 24 }}>
              A tendência mais clara para o período que vem não é &quot;mais IA genérica&quot;, é IA mais integrada aos sistemas que a empresa já usa, com agentes capazes de executar tarefas de várias etapas sozinhos, sob supervisão humana. Para empresa de pequeno e médio porte, o caminho mais realista continua sendo começar pequeno, medir de verdade e crescer com base em resultado, não em promessa de fornecedor.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Quer sair do estágio experimental e ter um plano real de IA?
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Fazemos um diagnóstico gratuito de 30 minutos para identificar onde a inteligência artificial gera retorno concreto no seu negócio.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20intelig%C3%AAncia%20artificial%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre inteligência artificial para empresas</h2>

            {[
              { q: 'Minha empresa é pequena demais para usar IA?', a: 'Não. Boa parte dos ganhos de IA hoje vêm de ferramentas acessíveis e processos simples, como automação de atendimento e organização de dados. O tamanho da empresa importa menos do que ter um processo claro para automatizar.' },
              { q: 'Quanto custa implementar IA em uma empresa?', a: 'Varia bastante conforme o escopo. Um piloto bem definido, cobrindo um processo específico, custa uma fração do que um projeto abrangente de transformação digital, e é o ponto de partida recomendado para a maioria das empresas.' },
              { q: 'Preciso ter um time de tecnologia interno para usar IA?', a: 'Não necessariamente. Muitas empresas começam com consultoria externa especializada para mapear o processo, escolher a ferramenta certa e treinar a equipe, sem precisar contratar um time de dados do zero.' },
              { q: 'Quanto tempo leva para ver resultado com IA?', a: 'Um piloto bem escopado costuma mostrar sinais de resultado entre 30 e 60 dias. Projetos mais amplos, que envolvem integração com vários sistemas, levam mais tempo, geralmente alguns meses até maturar.' },
              { q: 'IA vai substituir minha equipe?', a: 'Na maioria dos casos, o efeito real é a IA assumir tarefas repetitivas e liberar a equipe para atividades que exigem julgamento, relacionamento e decisão, não substituição direta de pessoas. Empresas que comunicam isso bem tendem a ter adoção mais tranquila internamente.' },
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
