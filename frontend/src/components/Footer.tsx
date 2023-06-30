import { Social } from './Social'
import { Nav } from './Nav'

export function Footer() {
  return (
    <footer className={`footer`}>
      <div className="container footer__container">
        <Nav />
        <div className="footer__institucional">
          <Social />
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
