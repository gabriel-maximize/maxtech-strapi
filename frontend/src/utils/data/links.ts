interface HeadersItens {
  text: string
  to: string
  target?: string
  subitems?: {
    text: string
    to: string
    target?: string
  }[]
}

export const links: HeadersItens[] = [
  {
    text: 'Início',
    to: '/',
  },
  {
    text: 'Serviço',
    to: '',
    subitems: [
      {
        text: 'Limpeza hospitalar',
        to: '/item-1',
      },
      {
        text: 'Limpeza de material cortante',
        to: '/item-2',
      },
    ],
  },
  {
    text: 'Sobre',
    to: '/sobre',
  },
  {
    text: 'FAQ',
    to: '/faq',
  },
  {
    text: 'Notícias',
    to: '/noticias',
  },
]
