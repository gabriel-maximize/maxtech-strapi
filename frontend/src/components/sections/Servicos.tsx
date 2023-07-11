'use client'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Card, ICardProps } from '../Card'
import { Link } from '../Link'

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
        <div className="servicos__header">
          <h3 className="servicos__subtitle">
            Para cada necessidade, montamos um plano estratégico de atuação com
            um único objetivo, solucionar problemas e minimizar possíveis danos
            à marca dos nossos clientes.
          </h3>
          <Link href="#">Todos os serviços</Link>
        </div>
      </div>

      <div className="servicos__content">
        <Swiper
          className="servicos__list"
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.title} className="servicos__item">
              <Card thumb={card.thumb} title={card.title} link={card.link} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
