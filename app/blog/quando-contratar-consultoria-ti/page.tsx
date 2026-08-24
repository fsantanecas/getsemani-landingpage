import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Quando Contratar uma Consultoria de TI (e Quando Não Vale a Pena) | Getsemani IT Solutions',
  description: 'Nem toda empresa precisa de consultoria de TI agora. Veja os sinais reais de que vale contratar, quando não vale, quanto custa e como escolher a certa.',
  keywords: ['consultoria de TI', 'consultoria de tecnologia', 'consultoria de TI para pequenas empresas', 'quanto custa consultoria de TI', 'consultoria de TI para empresas', 'terceirização de TI'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/quando-contratar-consultoria-ti' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/quando-contratar-consultoria-ti',
    title: 'Quando Contratar uma Consultoria de TI (e Quando Não Vale a Pena)',
    description: 'Os sinais reais de que vale contratar uma consultoria de TI, quando não vale, quanto custa e como escolher a certa.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Quando contratar consultoria de TI' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Quando Contratar uma Consultoria de TI (e Quando Não Vale a Pena)',
      description: 'Os sinais reais de que vale contratar uma consultoria de TI, quando não vale, quanto custa e como escolher a certa.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-08-24',
      dateModified: '2026-08-24',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/quando-contratar-consultoria-ti',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Quanto custa contratar uma consultoria de TI?', acceptedAnswer: { '@type': 'Answer', text: 'Para pequenas empresas, o valor por hora costuma ficar entre R$ 100 e R$ 300, e projetos fechados de diagnóstico e planejamento ficam na faixa de R$ 3.000 a R$ 15.000. Consultorias contínuas (mensais) variam bastante conforme o escopo, mas geralmente saem mais baratas do que contratar e manter um time interno completo.' } },
        { '@type': 'Question', name: 'Minha empresa é pequena demais pra precisar de consultoria de TI?', acceptedAnswer: { '@type': 'Answer', text: 'Não necessariamente. No Brasil, micro e pequenas empresas somam mais de 94% do setor de software e serviços, e boa parte delas usa consultoria pontual justamente por não ter estrutura pra manter um time de TI completo. O tamanho da empresa importa menos do que a complexidade e a urgência do problema.' } },
        { '@type': 'Question', name: 'Qual a diferença entre consultoria de TI e contratar um funcionário de TI?', acceptedAnswer: { '@type': 'Answer', text: 'Um funcionário interno resolve o dia a dia operacional. Uma consultoria entra pra diagnosticar, planejar e implementar uma mudança específica, com prazo definido e depois sai (ou continua em modelo de acompanhamento). São coisas complementares, não substitutas uma da outra.' } },
        { '@type': 'Question', name: 'Quanto tempo dura um projeto de consultoria de TI?', acceptedAnswer: { '@type': 'Answer', text: 'Diagnósticos costumam levar de 1 a 3 semanas. Projetos de implementação, de 1 a 4 meses, dependendo do escopo. Contratos de acompanhamento contínuo não têm prazo fixo e duram enquanto fizerem sentido pro negócio.' } },
        { '@type': 'Question', name: 'Consultoria de TI substitui minha equipe interna?', acceptedAnswer: { '@type': 'Answer', text: 'Na maioria dos casos, não deveria. O ideal é a consultoria trabalhar junto com quem já está na empresa, transferindo conhecimento, e não criar uma dependência eterna de um fornecedor externo pra tocar o básico.' } },
        { '@type': 'Question', name: 'Como sei se a consultoria contratada está entregando resultado?', acceptedAnswer: { '@type': 'Answer', text: 'Defina antes de começar quais métricas vão ser acompanhadas (tempo economizado, redução de custo, incidentes evitados, receita gerada) e peça relatórios periódicos. Se depois de alguns meses ninguém consegue apontar um número concreto que melhorou, é sinal de alerta.' } },
      ],
    },
  ],
};

export default function ArtigoQuandoContratarConsultoriaTI() {
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
            <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>Consultoria em TI</span>
            <span style={{ fontSize: 12, color: '#475569' }}>24 de agosto de 2026 · 9 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Quando Contratar uma Consultoria de TI (e Quando Não Vale a Pena)
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Nem toda empresa precisa de uma consultoria de TI agora. Vindo de quem presta esse tipo de serviço, a frase pode soar estranha, mas é a mais honesta que dá pra fazer. Consultoria certa, no momento certo, se paga rápido. Contratada pelo motivo errado, vira uma despesa fixa sem retorno claro. Este guia mostra os dois lados: os sinais de que vale chamar ajuda de fora e os casos em que o problema está em outro lugar.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#o-que-e" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que uma consultoria de TI realmente faz</a></li>
              <li><a href="#sinais" style={{ color: '#94a3b8', textDecoration: 'none' }}>Sinais de que sua empresa precisa de uma consultoria</a></li>
              <li><a href="#quando-nao" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quando não vale a pena contratar</a></li>
              <li><a href="#como-escolher" style={{ color: '#94a3b8', textDecoration: 'none' }}>Como escolher a consultoria certa</a></li>
              <li><a href="#quanto-custa" style={{ color: '#94a3b8', textDecoration: 'none' }}>Quanto custa e o que esperar de resultado</a></li>
              <li><a href="#ia" style={{ color: '#94a3b8', textDecoration: 'none' }}>O papel da IA nesse tipo de consultoria hoje</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="o-que-e">
            <h2 style={h2Style}>O que uma consultoria de TI realmente faz</h2>
            <p style={pStyle}>
              Consultoria de TI não é "mandar alguém pra consertar o computador" nem "terceirizar o suporte". É trazer alguém de fora, com repertório em vários tipos de empresa e de problema, pra olhar sua operação com distância e apontar onde a tecnologia está travando o negócio, ou onde ela poderia estar ajudando e simplesmente não está sendo usada.
            </p>
            <p style={pStyle}>
              Na prática, o trabalho costuma passar por três fases: diagnóstico (entender o que existe hoje, os gargalos e os riscos), plano (o que priorizar, em que ordem, com que investimento) e implementação (executar, sozinho ou junto com o time interno da empresa). Algumas consultorias entregam só o plano. Outras, como a nossa, tocam a execução até o fim.
            </p>
            <p style={pStyle}>
              A confusão mais comum é achar que consultoria e desenvolvimento são a mesma coisa. Não são. Você pode contratar uma consultoria e ela concluir que a solução não é construir um sistema novo, é reorganizar processo, trocar de ferramenta pronta ou simplesmente parar de gastar dinheiro em algo que não traz retorno. Um bom consultor às vezes recomenda gastar menos, não mais.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="sinais" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Sinais de que sua empresa precisa de uma consultoria</h2>
            <p style={pStyle}>
              Alguns sintomas aparecem repetidamente em empresas que acabam se beneficiando de uma consultoria de TI. Se você reconhecer dois ou três da lista abaixo, provavelmente já passou do ponto de resolver isso sozinho no improviso.
            </p>

            <h3 style={h3Style}>Decisões de tecnologia no feeling</h3>
            <p style={pStyle}>
              Você escolhe sistema, fornecedor ou plataforma baseado em indicação de um conhecido ou no que parece mais moderno, sem comparar custo total, escalabilidade ou se aquilo resolve o problema real. Funciona até certo tamanho de empresa. Depois disso, cada escolha errada custa caro pra desfazer.
            </p>

            <h3 style={h3Style}>Sistemas que não conversam entre si</h3>
            <p style={pStyle}>
              Planilha aqui, ERP ali, CRM em outro canto, cada um com dado desatualizado em relação ao outro. Alguém no time passa horas por semana copiando informação de um sistema pro outro manualmente. Isso é dinheiro saindo pela torneira todo mês, mesmo que ninguém tenha parado pra somar quanto.
            </p>

            <h3 style={h3Style}>A empresa cresceu, mas a estrutura de TI não</h3>
            <p style={pStyle}>
              O que dava conta com dez funcionários trava com trinta. Sistema lento, processo que dependia de "o fulano sabe fazer isso de cabeça", segurança de dados tratada informalmente. Crescimento expõe rapidamente o que era improviso disfarçado de solução.
            </p>

            <h3 style={h3Style}>Já tentou resolver internamente e não decolou</h3>
            <p style={pStyle}>
              Comprou um sistema, contratou um freelancer, tentou implementar algo com a equipe atual, e o projeto ficou pela metade ou nunca foi usado de verdade. Às vezes o problema não era a ferramenta, era faltar alguém com experiência pra conduzir a mudança até o fim.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Não sabe se sua empresa precisa de consultoria agora?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos pra apontar, sem enrolação, se vale a pena investir nisso agora e onde.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="quando-nao" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quando não vale a pena contratar</h2>
            <p style={pStyle}>
              É tentador, do lado de quem vende consultoria, dizer que toda empresa precisa de uma. Não é verdade, e vale ser direto sobre isso.
            </p>

            <h3 style={h3Style}>O problema é de gestão, não de tecnologia</h3>
            <p style={pStyle}>
              Se ninguém segue o processo que já existe, trocar de sistema não resolve. Uma consultoria séria costuma apontar isso no diagnóstico, mas se você já sabe que o gargalo é disciplina interna e não ferramenta, comece por aí antes de gastar com tecnologia nova.
            </p>

            <h3 style={h3Style}>Dá pra resolver com um freelancer pontual</h3>
            <p style={pStyle}>
              Uma configuração específica, um ajuste isolado, um problema técnico bem delimitado. Se o escopo é pequeno e claro, contratar um freelancer ou um serviço avulso costuma ser mais barato e mais rápido do que abrir um projeto de consultoria completo.
            </p>

            <h3 style={h3Style}>Não há orçamento pra executar as recomendações</h3>
            <p style={pStyle}>
              Pagar por um diagnóstico caro e depois não ter dinheiro pra implementar nada do que foi recomendado é o cenário mais frustrante possível, tanto pra empresa quanto pra consultoria. Se o caixa está apertado, talvez o momento seja daqui a alguns meses, não agora.
            </p>

            <h3 style={h3Style}>A empresa ainda está validando o modelo de negócio</h3>
            <p style={pStyle}>
              Startups e empresas muito recentes, ainda testando se o produto encaixa no mercado, geralmente ganham mais investindo em vendas e validação do que em estrutura de TI robusta. Tecnologia sofisticada demais, cedo demais, é um jeito comum de queimar dinheiro que faria falta depois.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="como-escolher" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Como escolher a consultoria certa</h2>
            <p style={pStyle}>
              Decidiu que faz sentido contratar. Agora vem a parte que mais gera arrependimento quando feita errado: escolher quem vai fazer o trabalho.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Defina o problema antes de procurar fornecedor', desc: 'Escreva em uma frase qual dor você quer resolver. "Melhorar a TI" é vago demais. "Parar de perder pedido por sistema que não integra com o financeiro" é um problema que dá pra cotar e medir.' },
                { num: '02', title: 'Peça um diagnóstico, não uma venda', desc: 'Desconfie de quem já chega com a solução fechada na primeira conversa, antes de entender sua operação. Um bom diagnóstico inicial gratuito ou de baixo custo é o padrão do mercado, não um favor.' },
                { num: '03', title: 'Confira histórico e cases reais', desc: 'Peça pra falar com um cliente atual ou recente, do mesmo porte que o seu. Consultoria que só mostra prints bonitos de proposta, sem cliente real pra referenciar, é sinal de alerta.' },
                { num: '04', title: 'Alinhe modelo de cobrança e escopo por escrito', desc: 'Hora, projeto fechado ou mensalidade recorrente, cada modelo tem lógica diferente. Coloque no contrato o que está incluso, o que não está e o prazo de entrega. Verbal não resolve quando dá problema.' },
                { num: '05', title: 'Meça resultado com KPI definido antes de começar', desc: 'Combine, desde o início, qual número vai indicar sucesso: horas economizadas, custo reduzido, receita gerada. Sem isso, fica impossível saber depois se o investimento valeu.' },
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
          <section id="quanto-custa" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Quanto custa e o que esperar de resultado</h2>
            <p style={pStyle}>
              O mercado brasileiro de TI é dominado por empresas pequenas, o que muda a lógica de preço em relação ao que se vê em grandes corporações. Alguns números ajudam a calibrar a expectativa:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '94,3%', label: 'Das empresas de software e serviços no Brasil são micro ou pequenas' },
                { value: '5,3%', label: 'Crescimento esperado do mercado de TI brasileiro em 2026, após alta de 18,5% em 2025' },
                { value: 'R$100-300', label: 'Faixa de hora técnica cobrada por consultorias pra pequenas empresas' },
                { value: 'R$3-15mil', label: 'Faixa de projeto fechado de diagnóstico e plano pra PMEs' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 32 }}>
              Esses valores são estimativas de mercado, não uma tabela fechada. Cada consultoria precifica diferente conforme complexidade, prazo e quem vai executar. O ponto central não é o número exato, é entender que consultoria pontual de diagnóstico costuma custar uma fração do que custaria contratar e manter um profissional sênior de TI internamente só pra fazer esse trabalho uma vez.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="ia" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O papel da IA nesse tipo de consultoria hoje</h2>
            <p style={pStyle}>
              Uma consultoria de TI que em 2026 ainda não conversa sobre Inteligência Artificial está deixando dinheiro na mesa do cliente. Não porque IA seja a resposta pra tudo, mas porque hoje ela mudou o cálculo de custo de várias soluções que antes eram caras demais pra pequena e média empresa.
            </p>
            <p style={pStyle}>
              Na prática isso aparece de duas formas. Primeiro, no próprio diagnóstico: ferramentas de análise ajudam a mapear processo e identificar gargalo mais rápido do que uma auditoria manual tradicional. Segundo, e mais importante, nas recomendações: chatbot de atendimento, automação de tarefa repetitiva, análise preditiva de dados, tudo isso entrou na faixa de preço acessível pra empresas que há poucos anos nem cogitavam esse tipo de investimento.
            </p>
            <p style={pStyle}>
              Isso não substitui o julgamento humano na hora de decidir prioridade e estratégia. IA ajuda a executar mais rápido depois que a decisão certa já foi tomada. Consultoria boa continua sendo, no fundo, sobre entender o negócio antes de recomendar a ferramenta.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Descubra se este é o momento certo pra sua empresa
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Fazemos um diagnóstico honesto, sem empurrar projeto que sua empresa não precisa. Se fizer sentido esperar, a gente fala isso também.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20consultoria%20de%20TI%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre consultoria de TI</h2>

            {[
              { q: 'Quanto custa contratar uma consultoria de TI?', a: 'Para pequenas empresas, o valor por hora costuma ficar entre R$ 100 e R$ 300, e projetos fechados de diagnóstico e planejamento ficam na faixa de R$ 3.000 a R$ 15.000. Consultorias contínuas variam conforme o escopo, mas geralmente saem mais baratas do que manter um time interno completo.' },
              { q: 'Minha empresa é pequena demais pra precisar de consultoria de TI?', a: 'Não necessariamente. No Brasil, micro e pequenas empresas somam mais de 94% do setor de software e serviços, e boa parte usa consultoria pontual justamente por não ter estrutura pra um time de TI completo. O que importa é a complexidade do problema, não o tamanho da empresa.' },
              { q: 'Qual a diferença entre consultoria de TI e contratar um funcionário de TI?', a: 'Um funcionário interno resolve o dia a dia operacional. A consultoria entra pra diagnosticar, planejar e implementar uma mudança específica, com prazo definido, e depois sai ou continua em modelo de acompanhamento. São coisas complementares.' },
              { q: 'Quanto tempo dura um projeto de consultoria de TI?', a: 'Diagnósticos costumam levar de 1 a 3 semanas. Projetos de implementação, de 1 a 4 meses, dependendo do escopo. Contratos de acompanhamento contínuo não têm prazo fixo.' },
              { q: 'Consultoria de TI substitui minha equipe interna?', a: 'Na maioria dos casos, não deveria. O ideal é a consultoria trabalhar junto com quem já está na empresa, transferindo conhecimento, sem criar dependência eterna de um fornecedor externo pra tocar o básico.' },
              { q: 'Como sei se a consultoria contratada está entregando resultado?', a: 'Defina antes de começar quais métricas vão ser acompanhadas, como tempo economizado, redução de custo ou receita gerada, e peça relatórios periódicos. Se depois de alguns meses ninguém aponta um número concreto que melhorou, é sinal de alerta.' },
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
