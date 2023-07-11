import { Card, ICardProps } from '../Card'

export function Servicos() {
  const cards: Omit<ICardProps, 'variant'>[] = [
    {
      thumb: 'https://random.imagecdn.app/400/300',
      title: 'Gerenciamento de resíduos',
      link: '#',
    },
    {
      thumb: 'https://random.imagecdn.app/400/300',
      title: 'Locação de mão de obra',
      link: '#',
    },
    {
      thumb: 'https://random.imagecdn.app/400/300',
      title: 'Limpeza e conservação',
      link: '#',
    },
    {
      thumb: 'https://random.imagecdn.app/400/300',
      title: '(CTR) Centro de Tratamento de resíduos',
      link: '#',
    },
  ]

  return (
    <section className="servicos">
      <div className="container">
        <h2 className="servicos__title">
          Nossos <strong>serviços</strong>
        </h2>
        <h3 className="servicos__subtitle">
          Para cada necessidade, montamos um plano estratégico de atuação com um
          único objetivo, solucionar problemas e minimizar possíveis danos à
          marca dos nossos clientes.
        </h3>
      </div>

      <div className="servicos__content">
        <ul className="servicos__list">
          {cards.map((card) => (
            <li key={card.title} className="servicos__item">
              <Card thumb={card.thumb} title={card.title} link={card.link} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
