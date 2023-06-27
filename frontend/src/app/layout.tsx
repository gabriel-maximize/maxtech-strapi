import '@/styles/init.sass'

import { ReactNode } from "react";

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Maxtec - Mais ambiental todos os dias",
  description: "Soluções de gerenciamento integrado de resíduos e terceirização de mão de obra para manutenção industrial, apoio administrativo, limpeza, conservação predial, hospitalar e industrial.",
  openGraph: {
    title: "Maxtec",
    url: "https://maxtec.com.br",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/img/share.png",
        width: 1920,
        height: 1080,
        alt: 'Imagem do site maxtec',
      }
    ]
  }
}

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}