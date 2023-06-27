'use client'

import Link from 'next/link';
import { useState } from 'react';

export function Nav() {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(show => !show);
    }

    interface HeadersItens {
        text: string
        to: string
        target?: string
    }

    const headers: HeadersItens[] = [
        {
            text: "Início",
            to: '/',
        },
        {
            text: "Sobre",
            to: '/sobre',
        },
        {
            text: "FAQ",
            to: '/faq',
        },
        {
            text: "Notícias",
            to: '/noticias',
        },
    ]

    return (
        <nav className={`nav header__nav ${show ? 'nav--open':''}`}>
            <div className="nav__wrap">
                <ul className="nav__list">
                    {
                        headers.map((item) => (
                            <li key={item.text}>
                                <Link href={item.to} target={item.target || '_self'} className="nav__link">
                                    {item.text}
                                </Link>
                            </li>
                        ))
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

