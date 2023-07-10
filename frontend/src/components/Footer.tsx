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
        <div>
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
        <div className="footer__institucional">
          <div className="footer__contato">
            <span className="footer__label">Fale conosco</span>
            <ul className="footer__list">
              <li className="footer__item">
                <span className="footer__telefone">98 91345-6789</span>
              </li>
              <li className="footer__item">
                <span className="footer__telefone">98 3042-1034</span>
              </li>
            </ul>
          </div>
          <div className="footer__endereco">
            <span className="footer__label">Visite-nos</span>
            <address>
              Av. Holandeses, n1 - Ed. Biadenne, ap 404 - Ponta do Farol - São
              Luís - MA
            </address>
          </div>
          <span className="footer__copyright">
            © {new Date().getFullYear()} Maxtec - Mais ambiental todos os dias.{' '}
            <br />
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
