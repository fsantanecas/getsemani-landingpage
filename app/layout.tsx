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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Getsemani IT Solutions",
              url: "https://getsemanitsolutions.com.br",
              logo: "https://getsemanitsolutions.com.br/logo.png",
              description:
                "Soluções em IA, automação, desenvolvimento web e sistemas personalizados para empresas modernas.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-96169-9686",
                email: "suporte@getsemanitsolutions.com.br",
                contactType: "customer service",
                areaServed: "BR",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://instagram.com/getsemanitsolution/"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col"><Providers>{children}</Providers></body>
    </html>
  );
}
