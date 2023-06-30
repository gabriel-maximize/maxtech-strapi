import Image from 'next/image'

import { Nav } from './Nav'
import { Social } from './Social'
import Link from 'next/link'

interface HeaderProps {
  variant?: 'default' | 'with-logo'
}

export function Header({ variant = 'default' }: HeaderProps) {
  return (
    <header className={`header`}>
      <div className="header__bar">
        <div className="header__start">
          {variant === 'with-logo' ? (
            <h1>
              <Link href="/">
                <Image
                  src={'img/logo-mono.svg'}
                  alt="Maxtec"
                  width={138}
                  height={40}
                />
              </Link>
            </h1>
          ) : (
            <></>
          )}
          <Social />
        </div>
        <Nav />
      </div>
    </header>
  )
}
