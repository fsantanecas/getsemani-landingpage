import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Getsemani IT Solutions | IA, Automação e Desenvolvimento Digital",
  description:
    "Transformamos tecnologia em crescimento inteligente. Soluções em Inteligência Artificial, automação de processos, desenvolvimento web e sistemas personalizados para empresas que querem resultados reais.",
  keywords: [
    "inteligência artificial",
    "automação de processos",
    "desenvolvimento web",
    "chatbot IA",
    "consultoria TI",
    "transformação digital",
    "sistemas personalizados",
    "Getsemani IT Solutions",
  ],
  metadataBase: new URL('https://getsemanitsolutions.com.br'),
  authors: [{ name: "Getsemani IT Solutions", url: "https://getsemanitsolutions.com.br" }],
  creator: "Getsemani IT Solutions",
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://getsemanitsolutions.com.br",
    siteName: "Getsemani IT Solutions",
    title: "Getsemani IT Solutions | IA, Automação e Desenvolvimento Digital",
    description:
      "Transformamos tecnologia em crescimento inteligente. +120 projetos entregues. 98% satisfação. Fale com um especialista.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Getsemani IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Getsemani IT Solutions | IA, Automação e Desenvolvimento Digital",
    description: "Transformamos tecnologia em crescimento inteligente para empresas modernas.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://getsemanitsolutions.com.br" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://getsemanitsolutions.com.br/#organization",
                name: "Getsemani IT Solutions",
                url: "https://getsemanitsolutions.com.br",
                logo: "https://getsemanitsolutions.com.br/logo.png",
                image: "https://getsemanitsolutions.com.br/og-image.png",
                description: "Soluções em IA, automação de processos, desenvolvimento web e consultoria de TI para empresas modernas.",
                telephone: "+55-11-96169-9686",
                email: "suporte@getsemanitsolutions.com.br",
                areaServed: { "@type": "Country", name: "Brasil" },
                priceRange: "$$",
                sameAs: ["https://instagram.com/getsemanitsolution/"],
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+55-11-96169-9686",
                  contactType: "customer service",
                  areaServed: "BR",
                  availableLanguage: "Portuguese",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Serviços Getsemani IT Solutions",
                itemListElement: [
                  { "@type": "Service", position: 1, name: "Automação de Processos", description: "Eliminamos tarefas manuais com fluxos automatizados que reduzem custos em até 70%.", provider: { "@type": "LocalBusiness", name: "Getsemani IT Solutions" } },
                  { "@type": "Service", position: 2, name: "Consultoria de TI", description: "Diagnóstico tecnológico completo e roadmap estratégico para modernizar sua infraestrutura.", provider: { "@type": "LocalBusiness", name: "Getsemani IT Solutions" } },
                  { "@type": "Service", position: 3, name: "Desenvolvimento Web", description: "Sites, sistemas e plataformas digitais de alto desempenho, otimizados para SEO e conversão.", provider: { "@type": "LocalBusiness", name: "Getsemani IT Solutions" } },
                  { "@type": "Service", position: 4, name: "Chatbot com Inteligência Artificial", description: "Assistentes inteligentes que atendem, qualificam e convertem leads automaticamente.", provider: { "@type": "LocalBusiness", name: "Getsemani IT Solutions" } },
                  { "@type": "Service", position: 5, name: "Inteligência Artificial para Empresas", description: "Modelos de IA aplicados: análise preditiva, NLP e visão computacional.", provider: { "@type": "LocalBusiness", name: "Getsemani IT Solutions" } },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
