import NextLink, { type LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface CustomLinkProps extends LinkProps {
  variant?: 'primary' | 'light'
  width?: 'default' | 'large' | 'small'
  children?: ReactNode
}

export function Link({ ...params }: CustomLinkProps) {
  return (
    <NextLink
      {...params}
      className={`button button--${params.variant} button--${params.width}`}
    >
      {params.children}
    </NextLink>
  )
}
