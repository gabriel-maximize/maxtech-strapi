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
    text: 'Serviços',
    to: '',
    subitems: [
      {
        text: 'Higienização',
        to: '/higienizacao',
      },
      {
        text: 'Limpeza predial',
        to: '/limpeza-predial',
      },
      {
        text: 'Coleta de resíduos',
        to: '/coleta-residuos',
      },
      {
        text: 'CTR Centro de tratamento de resíduos',
        to: '/tratamento-residuos',
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
