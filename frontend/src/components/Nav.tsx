'use client'

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import Link from 'next/link';

import { MdKeyboardArrowDown } from "react-icons/md"
import { useState } from 'react';

import { links } from "@/utils/data/links";

export function Nav() {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(show => !show);
    }

    return (
        <nav className={`nav header__nav ${show ? 'nav--open':''}`}>
            <div className="nav__wrap">
                <ul className="nav__list">
                    {
                        links.map((item) => {
                            return (
                                <li key={item.text}>
                                {
                                    (!item.subitems) ? (
                                        <Link href={item.to} target={item.target || '_self'} className="nav__link">
                                            {item.text}
                                        </Link>
                                    ) : (
                                        <DropdownMenu.Root>
                                            <DropdownMenu.Trigger asChild>
                                                <Link href={item.to} target={item.target || '_self'} className="nav__link">
                                                    {item.text}
                                                    <MdKeyboardArrowDown size={20} />
                                                </Link>
                                            </DropdownMenu.Trigger>

                                            <DropdownMenu.Portal>
                                                <DropdownMenu.Content className="dropdown__content" sideOffset={5} side="bottom" align="start">
                                                    {
                                                        item.subitems.map((subitem) => (
                                                            <DropdownMenu.Item key={subitem.text} className="dropdown__item">
                                                                <Link
                                                                    href={subitem.to}
                                                                    target={subitem.target || '_self'}
                                                                    className="nav__link nav__link--dropdown"
                                                                >
                                                                    {subitem.text}        
                                                                </Link>
                                                            </DropdownMenu.Item>
                                                        ))
                                                    }
                                                </DropdownMenu.Content>
                                            </DropdownMenu.Portal>
                                        </DropdownMenu.Root>
                                    )
                                }
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="button nav__contato" onClick={toggleMenu}><span>Fale conosco</span></button>
                <button className="button nav__colaborador" onClick={toggleMenu}>Área do colaborador</button>
            </div>
            <button className="nav__menu" onClick={toggleMenu}>
                <span className="nav__label">Menu</span>
                <i className="nav__bar"></i>
                <i className="nav__bar"></i>
                <i className="nav__bar"></i>
            </button>
        </nav>
    );
}

