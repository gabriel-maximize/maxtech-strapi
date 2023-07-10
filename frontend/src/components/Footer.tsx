import { Social } from './Social'
import { Nav } from './Nav'
import Image from 'next/image'
import { links } from '@/utils/data/links'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={`footer`}>
      <div className="container footer__container">
        <div className="footer__info">
          <Image
            src="/img/logo.svg"
            alt="Logo colorida Maxtec"
            width={122}
            height={122}
          />
          <Social />
        </div>
        <div className="footer__nav">
          <ul className="footer__list">
            {links.map((link) => (
              <li key={link.text} className="footer__item">
                <Link
                  className="footer__link"
                  href={link.to}
                  target={link.target || '_self'}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__submenu">
          <span className="footer__label">{links[1].text}</span>
          <ul className="footer__list footer__list--destaque">
            {links[1].subitems?.map((subitem) => (
              <li key={subitem.text} className="footer__item">
                {subitem.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contato">
          <span className="footer__label">Fale conosco</span>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="tel:+5598913456789" className="footer__telefone">
                <Image
                  src="/img/whatsapp.svg"
                  alt="Logo do whatsapp"
                  width={18}
                  height={19}
                />
                98 <strong>91345-6789</strong>
              </a>
            </li>
            <li className="footer__item">
              <a href="tel:+559830421034" className="footer__telefone">
                <Image
                  src="/img/telefone.svg"
                  alt="Logo de um telefone"
                  width={19}
                  height={19}
                />
                98 <strong>3042-1034</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__endereco">
          <span className="footer__label">Visite-nos</span>
          <span className="footer__address">
            <Image
              src="/img/pin.svg"
              alt="Logo de um pin de mapa"
              width={17}
              height={24}
            />
            <address>
              Av. Holandeses, n1 - Ed. Biadenne, ap 404 - Ponta do Farol - São
              Luís - MA
            </address>
          </span>
        </div>
      </div>
    </footer>
  )
}
