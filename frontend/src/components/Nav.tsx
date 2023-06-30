'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { CgSearch } from 'react-icons/cg'

import { links } from '@/utils/data/links'

export function Nav() {
  return (
    <nav className={`nav header__nav`}>
      <div className="nav__wrap">
        <ul className="nav__list">
          {links.map((item) => {
            return (
              <li key={item.text}>
                {!item.subitems ? (
                  <Link
                    href={item.to}
                    target={item.target || '_self'}
                    className="nav__link"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <Link
                        href={item.to}
                        target={item.target || '_self'}
                        className="nav__link"
                      >
                        {item.text}
                        <MdKeyboardArrowDown size={20} />
                      </Link>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        className="dropdown__content"
                        sideOffset={5}
                        side="bottom"
                        align="start"
                      >
                        {item.subitems.map((subitem) => (
                          <DropdownMenu.Item
                            key={subitem.text}
                            className="dropdown__item"
                          >
                            <Link
                              href={subitem.to}
                              target={subitem.target || '_self'}
                              className="nav__link nav__link--dropdown"
                            >
                              {subitem.text}
                            </Link>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                )}
              </li>
            )
          })}
          <li>
            <button className="nav__search">
              <CgSearch size={20} />
            </button>
          </li>
        </ul>
        <button className="button nav__contato">
          <span>Fale conosco</span>
        </button>
        <button className="button nav__colaborador">
          <span>Área do colaborador</span>
        </button>
      </div>
    </nav>
  )
}
