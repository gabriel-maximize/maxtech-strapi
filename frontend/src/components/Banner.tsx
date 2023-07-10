import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export function Banner() {
  return (
    <div className="banner">
      <div className="container banner__container">
        <h2 className="banner__title title">
          Somos uma empresa <strong>voltada para o futuro.</strong>
        </h2>
        <div className="banner__description">
          Nunc posuere purus magna, volutpat tristique ante tempor vel.
          Phasellus posuere pellentesque arcu
        </div>
        <Link href="/" className="button banner__action">
          Fale conosco
        </Link>
      </div>
      <div className="banner__media">
        <Image
          src="/img/banner.jpg"
          alt="Banner de caminhões"
          className="banner__img"
          fill
          quality={100}
        />
      </div>
      <ul className="banner__list">
        <Card to="#">
          Conheça
          <br />
          <strong>nossos serviços</strong>
        </Card>
        <Card to="#" variant="ghost">
          Siga
          <br />
          <strong>nossas dicas</strong>
        </Card>
      </ul>
    </div>
  )
}

interface ICardProps {
  variant?: 'primary' | 'ghost'
  to: string
  children: ReactNode
}

function Card({ variant = 'primary', to, children }: ICardProps) {
  return (
    <li>
      <Link href={to} className={`banner__card banner__card--${variant}`}>
        <div className="banner__content">
          <span className={`banner__link banner__link--${variant}`}>
            {children}
          </span>
          <Image
            src="/img/arrow-down-2.svg"
            alt="Seta apontando para baixo"
            width={16}
            height={41}
          />
        </div>
      </Link>
    </li>
  )
}
