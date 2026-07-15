import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Getsemani IT Solutions',
  description: 'Artigos sobre automação de processos, desenvolvimento web, chatbots com IA, inteligência artificial e tecnologia para empresas.',
  keywords: ['blog Getsemani', 'automação de processos', 'desenvolvimento web', 'chatbot com IA', 'inteligência artificial para empresas'],
  alternates: { canonical: 'https://getsemanitsolutions.com.br/blog' },
  openGraph: {
    type: 'website',
    url: 'https://getsemanitsolutions.com.br/blog',
    title: 'Blog | Getsemani IT Solutions',
    description: 'Artigos sobre automação de processos, desenvolvimento web, chatbots com IA, inteligência artificial e tecnologia para empresas.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Blog Getsemani IT Solutions' }],
    siteName: 'Getsemani IT Solutions',
    locale: 'pt_BR',
  },
};

const posts = [
  {
    slug: 'chatbot-com-ia-para-atendimento',
    categoria: 'Chatbots com IA',
    data: '14 de julho de 2026',
    tempoLeitura: '9 min de leitura',
    titulo: 'Chatbot com IA para Atendimento: Como Funciona, Quanto Custa e Como Implementar',
    resumo: 'Entenda a diferença entre bot de menu e chatbot com IA generativa, os erros mais comuns na implementação e quanto custa colocar um no ar.',
  },
  {
    slug: 'desenvolvimento-web-para-empresas',
    categoria: 'Desenvolvimento Web',
    data: '13 de julho de 2026',
    tempoLeitura: '9 min de leitura',
    titulo: 'Desenvolvimento Web para Empresas: o Guia Completo de Site e Sistema que Gera Resultado',
    resumo: 'Site institucional, e-commerce ou sistema personalizado: entenda as diferenças, o que separa um site bom de um site que converte, custos e prazos reais.',
  },
  {
    slug: 'automacao-de-processos',
    categoria: 'Automação',
    data: '23 de junho de 2026',
    tempoLeitura: '8 min de leitura',
    titulo: 'Automação de Processos: O Guia Completo para Empresas em 2026',
    resumo: 'O que é automação de processos, os tipos disponíveis (RPA, IA, BPM, integrações via API) e como implementar reduzindo custos operacionais em até 70%.',
  },
];

export default function BlogIndex() {
  return (
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

      {/* Conteúdo */}
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 96px' }}>

        <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 16, color: '#f1f5f9' }}>
          Blog
        </h1>
        <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.8, marginBottom: 48 }}>
          Conteúdo prático sobre automação, desenvolvimento web, chatbots com IA e tecnologia para empresas que querem crescer com menos esforço manual e mais dado real.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              style={{ textDecoration: 'none', display: 'block', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '28px 28px' }}
            >
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: 12, color: '#0ea5e9', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', padding: '4px 12px', borderRadius: 99 }}>{post.categoria}</span>
                <span style={{ fontSize: 12, color: '#475569' }}>{post.data} · {post.tempoLeitura}</span>
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#f1f5f9', marginBottom: 10, lineHeight: 1.3 }}>{post.titulo}</h2>
              <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{post.resumo}</p>
              <p style={{ color: '#0ea5e9', fontSize: 14, fontWeight: 700, marginTop: 16, marginBottom: 0 }}>Ler artigo →</p>
            </Link>
          ))}
        </div>

      </main>
    </div>
  );
}
