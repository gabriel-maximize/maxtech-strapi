import Logo from './Logo';
import Nav from './Nav';
import Social from './Social';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export function Header({ className }) {
    const headerEl = useRef(null);

    return (
        <header ref={headerEl} className={`header ${className}`}>
            <div className="container header__container">
                <Logo className="header__logo">Maxtec</Logo>
            </div>
            <div className="header__bar">
                <Social className="header__social" />
                <Nav className="header__nav" />
            </div>
        </header>
    );
}

export default Header;
