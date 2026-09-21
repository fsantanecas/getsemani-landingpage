import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Checklist de Integração de Sistemas: o Que Verificar Antes de Conectar Suas Ferramentas via API | Getsemani IT Solutions',
  description: 'Checklist prático pra revisar antes de integrar sistemas via API: segurança, autenticação, ambiente de teste, monitoramento e os erros que mais atrasam esse tipo de projeto.',
  keywords: ['checklist integração de sistemas', 'integração de sistemas via API', 'integração de API', 'checklist API', 'segurança em integração de sistemas', 'iPaaS'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog/checklist-integracao-de-sistemas' },
  openGraph: {
    type: 'article',
    url: 'https://getsemanitsolutions.com.br/blog/checklist-integracao-de-sistemas',
    title: 'Checklist de Integração de Sistemas: o Que Verificar Antes de Conectar Suas Ferramentas via API',
    description: 'Checklist prático pra revisar antes de integrar sistemas via API: segurança, autenticação, ambiente de teste e monitoramento.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Checklist de Integração de Sistemas' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Checklist de Integração de Sistemas: o Que Verificar Antes de Conectar Suas Ferramentas via API',
      description: 'Checklist prático pra revisar antes de integrar sistemas via API: segurança, autenticação, ambiente de teste, monitoramento e os erros que mais atrasam esse tipo de projeto.',
      author: { '@type': 'Organization', name: 'Getsemani IT Solutions', url: 'https://getsemanitsolutions.com.br' },
      publisher: { '@type': 'Organization', name: 'Getsemani IT Solutions', logo: { '@type': 'ImageObject', url: 'https://getsemanitsolutions.com.br/logo.png' } },
      datePublished: '2026-09-16',
      dateModified: '2026-09-16',
      mainEntityOfPage: 'https://getsemanitsolutions.com.br/blog/checklist-integracao-de-sistemas',
      image: 'https://getsemanitsolutions.com.br/og-image.png',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Por que preciso de um checklist antes de integrar sistemas?', acceptedAnswer: { '@type': 'Answer', text: 'Porque a maioria dos problemas de integração não aparece na hora de conectar a API, aparece semanas depois, quando um sistema muda de versão, um token expira ou um pico de uso derruba um endpoint sem monitoramento. Um checklist reduz esse tipo de surpresa antes que ela vire retrabalho.' } },
        { '@type': 'Question', name: 'Quais informações preciso levantar antes de contratar uma integração?', acceptedAnswer: { '@type': 'Answer', text: 'A lista de sistemas envolvidos, se cada um tem API documentada ou só acesso via banco de dados, quem é o responsável por cada ferramenta internamente, o volume de dados trafegado por dia e quais informações são sensíveis o suficiente pra exigir cuidado extra de segurança.' } },
        { '@type': 'Question', name: 'Integração via API é segura?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, quando segue práticas básicas: autenticação por token, criptografia na transmissão, controle de acesso por escopo e registro de logs. A maior parte dos incidentes não vem da tecnologia em si, vem de configuração feita às pressas, sem revisão.' } },
        { '@type': 'Question', name: 'Preciso ter ambiente de teste (sandbox) pra integrar sistemas?', acceptedAnswer: { '@type': 'Answer', text: 'Sempre que o sistema oferecer essa opção, sim. Testar a integração direto em produção significa que qualquer erro de mapeamento de dado ou de autenticação afeta clientes e operações reais. Um sandbox custa pouco perto do risco de rodar sem ele.' } },
        { '@type': 'Question', name: 'Quanto tempo leva pra seguir todo o checklist e colocar a integração no ar?', acceptedAnswer: { '@type': 'Answer', text: 'Pra uma integração simples entre duas ferramentas com API bem documentada, o checklist completo leva de 3 a 10 dias úteis, incluindo teste em sandbox. Projetos com sistemas legados ou múltiplas integrações encadeadas costumam levar de 4 a 8 semanas.' } },
      ],
    },
  ],
};

export default function ArtigoChecklistIntegracao() {
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
            <span style={{ fontSize: 12, color: '#475569' }}>16 de setembro de 2026 · 8 min de leitura</span>
          </div>

          {/* H1 */}
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, color: '#f1f5f9' }}>
            Checklist de Integração de Sistemas: o Que Verificar Antes de Conectar Suas Ferramentas via API
          </h1>

          <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 40, borderLeft: '3px solid #0ea5e9', paddingLeft: 16 }}>
            Boa parte dos projetos de integração não falha na integração em si. Falha antes dela, na hora de decidir o que conectar, com quem falar internamente e o que testar antes de ligar o sinal verde. Este checklist reúne os pontos que costumam ficar de fora da conversa inicial e que, quando ignorados, viram retrabalho semanas depois.
          </p>

          {/* Sumário */}
          <nav style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 28px', marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 16 }}>Neste artigo</p>
            <ol style={{ margin: 0, padding: '0 0 0 20px', color: '#64748b', lineHeight: 2.2, fontSize: 15 }}>
              <li><a href="#por-que-checklist" style={{ color: '#94a3b8', textDecoration: 'none' }}>Por que um checklist antes de integrar sistemas</a></li>
              <li><a href="#antes-de-comecar" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que levantar antes de começar</a></li>
              <li><a href="#seguranca" style={{ color: '#94a3b8', textDecoration: 'none' }}>Segurança e governança de dados</a></li>
              <li><a href="#checklist-tecnico" style={{ color: '#94a3b8', textDecoration: 'none' }}>Checklist técnico da integração</a></li>
              <li><a href="#passo-a-passo" style={{ color: '#94a3b8', textDecoration: 'none' }}>Passo a passo pra aplicar o checklist</a></li>
              <li><a href="#numeros" style={{ color: '#94a3b8', textDecoration: 'none' }}>O que os dados de mercado mostram</a></li>
              <li><a href="#faq" style={{ color: '#94a3b8', textDecoration: 'none' }}>Perguntas frequentes</a></li>
            </ol>
          </nav>

          {/* Seção 1 */}
          <section id="por-que-checklist">
            <h2 style={h2Style}>Por que um checklist antes de integrar sistemas</h2>
            <p style={pStyle}>
              Quando duas ferramentas precisam trocar dados, a tentação é abrir a documentação da API, escrever o código e testar em produção mesmo. Funciona em boa parte das vezes, até o dia em que um campo muda de formato, um limite de requisições é atingido no horário de pico ou um token de acesso expira sem ninguém perceber. Nesse momento o problema não é mais técnico, é operacional: pedido que não chega no ERP, cliente que paga e não recebe confirmação, estoque desatualizado.
            </p>
            <p style={pStyle}>
              Um checklist não elimina esse risco por completo, mas move a maior parte das decisões importantes pra antes do código ser escrito, quando ainda é barato corrigir rota. É a diferença entre descobrir uma limitação de API numa reunião de planejamento ou descobrir ela num chamado de suporte às 22h de uma sexta-feira.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="antes-de-comecar" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que levantar antes de começar</h2>
            <p style={pStyle}>
              Antes de escrever a primeira linha de integração, existem perguntas que precisam de resposta clara. Pular essa etapa é o motivo mais comum de orçamento estourado em projetos desse tipo.
            </p>

            <h3 style={h3Style}>Mapeie todos os sistemas envolvidos</h3>
            <p style={pStyle}>
              Liste cada ferramenta que vai participar da integração, incluindo as que parecem secundárias. É comum um projeto começar como "conectar CRM e ERP" e, no meio do caminho, descobrir que o sistema de emissão de nota fiscal também precisa entrar no fluxo. Quanto mais cedo esse mapa aparece, menor a chance de retrabalho.
            </p>

            <h3 style={h3Style}>Confirme se cada sistema tem API documentada</h3>
            <p style={pStyle}>
              Nem toda ferramenta expõe API pública, e nem toda API documentada está atualizada. Sistemas legados às vezes só permitem acesso direto ao banco de dados ou exportação de arquivo, o que muda completamente a abordagem técnica e o prazo do projeto. Descobrir isso na primeira semana é normal. Descobrir na quarta semana custa caro.
            </p>

            <h3 style={h3Style}>Defina quem é o dono de cada processo internamente</h3>
            <p style={pStyle}>
              Toda integração cruza áreas: vendas, financeiro, operação, atendimento. Cada uma dessas áreas tem uma pessoa que entende as regras de negócio por trás do dado, tipo o que fazer quando um CPF vem duplicado ou qual status de pedido dispara qual ação. Sem esse dono definido, quem programa a integração acaba tomando decisões de negócio sozinho, e normalmente erra alguma regra que só quem vive o processo conhece.
            </p>

            <h3 style={h3Style}>Estime o volume real de dados</h3>
            <p style={pStyle}>
              Uma integração que processa 50 pedidos por dia tem exigências bem diferentes de uma que processa 5 mil. Volume alto exige atenção a limite de requisições da API (rate limit), processamento em lote e fila de mensagens. Ignorar essa conta na fase de planejamento é uma das causas mais comuns de integração que funciona bem no teste e trava em produção.
            </p>
          </section>

          {/* CTA intermediário */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(124,58,237,0.08))', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 16, padding: '32px', margin: '48px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>Quer revisar sua integração com quem já fez esse mapeamento antes?</p>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 24 }}>Fazemos um diagnóstico gratuito de 30 minutos pra mapear os sistemas da sua empresa e apontar riscos antes de qualquer linha de código.</p>
            <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
              Quero meu diagnóstico gratuito →
            </Link>
          </div>

          {/* Seção 3 */}
          <section id="seguranca" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Segurança e governança de dados</h2>
            <p style={pStyle}>
              Integração de sistemas move dado sensível de um lugar pra outro em tempo real, muitas vezes sem ninguém olhando de perto. Isso torna a etapa de segurança tão importante quanto a técnica, e é a parte que mais fica de fora quando o prazo aperta.
            </p>

            <h3 style={h3Style}>Autenticação e controle de acesso</h3>
            <p style={pStyle}>
              Cada conexão precisa de autenticação própria, de preferência por token com escopo limitado, não uma senha genérica compartilhada entre sistemas. O ideal é que cada integração só tenha acesso ao que precisa usar. Se a integração só lê pedidos, ela não precisa ter permissão pra excluir cadastro de cliente.
            </p>

            <h3 style={h3Style}>Criptografia e trânsito de dados</h3>
            <p style={pStyle}>
              Toda troca de dado entre sistemas deve passar por conexão criptografada (HTTPS/TLS), sem exceção, mesmo em integrações internas. Dado de cliente, informação financeira e credencial de acesso nunca devem trafegar em texto simples entre dois servidores.
            </p>

            <h3 style={h3Style}>Adequação à LGPD</h3>
            <p style={pStyle}>
              Se a integração movimenta dado pessoal (nome, CPF, telefone, endereço), ela entra no escopo da LGPD. Isso significa registrar pra que serve cada dado tratado, limitar o acesso a quem realmente precisa dele e ter um plano claro caso algum sistema envolvido sofra um incidente de segurança.
            </p>
          </section>

          {/* Seção 4 - checklist técnico */}
          <section id="checklist-tecnico" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Checklist técnico da integração</h2>
            <p style={pStyle}>
              Com o levantamento de negócio e segurança feito, chega a parte técnica. Estes são os pontos que evitam que a integração pare de funcionar sem aviso:
            </p>
            <ul style={{ color: '#94a3b8', lineHeight: 2.2, paddingLeft: 24, margin: '0 0 24px' }}>
              <li>Testar tudo num ambiente de sandbox antes de conectar em produção</li>
              <li>Verificar o limite de requisições (rate limit) de cada API envolvida</li>
              <li>Definir o que acontece quando uma chamada falha: tentativa automática (retry), fila de reprocessamento ou alerta manual</li>
              <li>Confirmar a versão da API usada e o plano do fornecedor pra descontinuar versões antigas</li>
              <li>Escolher entre webhook (o sistema avisa quando algo muda) ou polling (você consulta em intervalos), conforme o volume e a urgência do dado</li>
              <li>Configurar logs de cada chamada, com data, resposta e tempo de execução, pra investigar problemas sem depender de "lembrar o que aconteceu"</li>
              <li>Definir um responsável e um canal de alerta caso a integração pare de funcionar</li>
            </ul>
            <p style={pStyle}>
              Esse checklist técnico parece burocracia até o dia em que uma API muda de versão sem aviso prévio. Quem já tinha log, alerta e plano de retry resolve em minutos. Quem não tinha, descobre o problema só quando o cliente reclama.
            </p>
          </section>

          {/* Seção 5 - Passos numerados */}
          <section id="passo-a-passo" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Passo a passo pra aplicar o checklist na prática</h2>
            <p style={pStyle}>
              Reunir toda essa lista de uma vez pode parecer trabalho demais. Na prática, ela se organiza em cinco etapas sequenciais.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 24 }}>
              {[
                { num: '01', title: 'Levante sistemas, donos e volume', desc: 'Liste as ferramentas envolvidas, quem responde por cada uma internamente e o volume de dados esperado. Essa etapa sozinha evita a maior parte dos atrasos do projeto.' },
                { num: '02', title: 'Confirme a documentação técnica de cada API', desc: 'Leia (ou peça pra alguém ler) a documentação de cada sistema. Verifique autenticação, rate limit, formatos de dado aceitos e se existe sandbox de teste.' },
                { num: '03', title: 'Defina segurança e acesso antes de programar', desc: 'Estabeleça como cada integração vai se autenticar, quais escopos de permissão ela terá e como o dado sensível será tratado, antes de escrever qualquer linha de código.' },
                { num: '04', title: 'Teste em sandbox com dado real (mas anonimizado)', desc: 'Rode a integração num ambiente separado da produção, usando um recorte de dado real sempre que possível. É nessa etapa que a maioria dos erros de mapeamento aparece.' },
                { num: '05', title: 'Coloque no ar com monitoramento ativo', desc: 'Suba pra produção só depois de configurar log, alerta de falha e um responsável definido. As primeiras semanas de uma integração nova merecem acompanhamento mais próximo que o normal.' },
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

          {/* Seção 6 - Números de mercado */}
          <section id="numeros" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>O que os dados de mercado mostram sobre integração de sistemas</h2>
            <p style={pStyle}>
              Os números do setor ajudam a entender por que esse tema virou prioridade em tantas empresas, e por que fazer certo desde o começo compensa.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 24 }}>
              {[
                { value: '80%+', label: 'Das organizações devem usar APIs e IA generativa em produção até 2026, segundo o Gartner' },
                { value: '2%', label: 'Das empresas conseguiram integrar com sucesso mais da metade de suas aplicações (MuleSoft Connectivity Benchmark 2026)' },
                { value: '21%+', label: 'Crescimento anual projetado pro mercado global de gestão de APIs até 2033' },
              ].map((r) => (
                <div key={r.label} style={{ background: 'rgba(14,165,233,0.05)', border: '1px solid rgba(14,165,233,0.12)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
                  <p style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>{r.value}</p>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>

            <p style={{ ...pStyle, marginTop: 32 }}>
              O dado da MuleSoft chama atenção especial: a maioria das empresas ainda opera com sistemas conectados pela metade, e isso custa em processos manuais e decisão tomada com informação atrasada. Não é falta de tecnologia disponível. É falta de planejamento antes de conectar o primeiro sistema, exatamente o que um checklist bem aplicado resolve.
            </p>
          </section>

          {/* CTA final */}
          <div style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(124,58,237,0.1))', border: '1px solid rgba(14,165,233,0.25)', borderRadius: 16, padding: '40px 32px', margin: '56px 0', textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12 }}>Getsemani IT Solutions</p>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, lineHeight: 1.3 }}>
              Conecte seus sistemas sem virar refém de retrabalho manual
            </h2>
            <p style={{ color: '#64748b', fontSize: 15, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
              Nossa equipe mapeia seus sistemas, aplica o checklist de segurança e entrega integrações monitoradas desde o primeiro dia no ar.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contato" style={{ background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)', color: '#fff', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>
                Solicitar diagnóstico gratuito
              </Link>
              <a href="https://wa.me/5511961699686?text=Olá!%20Li%20o%20artigo%20sobre%20checklist%20de%20integração%20de%20sistemas%20e%20gostaria%20de%20saber%20mais." target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', textDecoration: 'none', padding: '13px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, display: 'inline-block', border: '1px solid rgba(16,185,129,0.2)' }}>
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 56 }}>
            <h2 style={h2Style}>Perguntas frequentes sobre checklist de integração de sistemas</h2>

            {[
              { q: 'Por que preciso de um checklist antes de integrar sistemas?', a: 'Porque a maioria dos problemas de integração não aparece na hora de conectar a API, aparece semanas depois, quando um sistema muda de versão, um token expira ou um pico de uso derruba um endpoint sem monitoramento. Um checklist reduz esse tipo de surpresa antes que ela vire retrabalho.' },
              { q: 'Quais informações preciso levantar antes de contratar uma integração?', a: 'A lista de sistemas envolvidos, se cada um tem API documentada ou só acesso via banco de dados, quem é o responsável por cada ferramenta internamente, o volume de dados trafegado por dia e quais informações são sensíveis o suficiente pra exigir cuidado extra de segurança.' },
              { q: 'Integração via API é segura?', a: 'Sim, quando segue práticas básicas: autenticação por token, criptografia na transmissão, controle de acesso por escopo e registro de logs. A maior parte dos incidentes não vem da tecnologia em si, vem de configuração feita às pressas, sem revisão.' },
              { q: 'Preciso ter ambiente de teste (sandbox) pra integrar sistemas?', a: 'Sempre que o sistema oferecer essa opção, sim. Testar a integração direto em produção significa que qualquer erro de mapeamento de dado ou de autenticação afeta clientes e operações reais. Um sandbox custa pouco perto do risco de rodar sem ele.' },
              { q: 'Quanto tempo leva pra seguir todo o checklist e colocar a integração no ar?', a: 'Pra uma integração simples entre duas ferramentas com API bem documentada, o checklist completo leva de 3 a 10 dias úteis, incluindo teste em sandbox. Projetos com sistemas legados ou múltiplas integrações encadeadas costumam levar de 4 a 8 semanas.' },
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
