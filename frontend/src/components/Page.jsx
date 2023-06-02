import Head from 'next/head';
import { forwardRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const Page = forwardRef(({ title, children, className, bodyClass, headerClass, contentClass }, ref) => {
  return (
    <div ref={ref} className={`${className} ${bodyClass}`}>
      <Head>
        <title>{`${title}Maxtec`}</title>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <meta property="og:image" content="/img/share.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://maxtec.com.br" />
        <meta property="og:title" content="Maxtec" />
        <meta property="og:description" content="Soluções de gerenciamento integrado de resíduos e terceirização de mão de obra para manutenção industrial, apoio administrativo, limpeza, conservação predial, hospitalar e industrial." />
      </Head>
      <Header className={`${headerClass} ${className}__header`} />
      <div className={`content ${className}__content`}>
        {children}
      </div>
      <Footer className={`${headerClass} ${className}__footer`} />
    </div>
  );
});

Page.defaultProps = {
  title: '',
  className: '',
  headerClass: '',
  contentClass: '',
}

export default Page;
