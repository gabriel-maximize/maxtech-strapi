import Head from 'next/head'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Banner } from '@/components/Banner';


export default function Home() {
  return (
    <>
      <div className={`home preload`}>
        <Head>
          <title>{`Maxtec - Mais ambiental todos os dias`}</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <meta property="og:image" content="/img/share.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://maxtec.com.br" />
          <meta property="og:title" content="Maxtec" />
          <meta property="og:description" content="Soluções de gerenciamento integrado de resíduos e terceirização de mão de obra para manutenção industrial, apoio administrativo, limpeza, conservação predial, hospitalar e industrial." />
        </Head>
        <Header />
          <Banner />
        <Footer />
    </div>
    </>
  )
}
