import Link from 'next/link'

export interface ICardProps {
  variant?: 'min' | 'details'
  thumb: string
  title: string
  description?: string
  link: string
}

export function Card({
  variant = 'min',
  thumb,
  title,
  description,
  link,
}: ICardProps) {
  return (
    <Link className="card" href={link}>
      <div className="card__content">
        <img
          className="card__thumb"
          src={thumb}
          alt={title}
          width={400}
          height={260}
        />
        <div className="card__info">
          <h2 className="card__title">{title}</h2>
          <p className="card__description" hidden={variant === 'details'}>
            {description}
          </p>
        </div>
      </div>
      <span className="card__action">Saiba mais</span>
    </Link>
  )
}
