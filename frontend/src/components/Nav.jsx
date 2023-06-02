import Link from 'next/link';
import { useState } from 'react';

export function Nav({className}) {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(show => !show);
    }

    return (
        <nav className={`nav ${className} ${show ? 'nav--open':''}`}>
            <div className="nav__wrap">
                <ul className="nav__list">
                    <Nav.Item to="/">Início</Nav.Item>
                    <Nav.Item to="/servico">Serviço</Nav.Item>
                    <Nav.Item to="/sobre">Sobre</Nav.Item>
                    <Nav.Item to="/faq">FAQ</Nav.Item>
                    <Nav.Item to="/noticias">Notícias</Nav.Item>
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

Nav.Item = function({Component, children, to, target}){
    return(
        <Component className="nav__item"><Link href={to} target={target} className="nav__link">{children}</Link></Component>
    )
}

Nav.Item.defaultProps = {
    Component: 'li',
    to: '/',
    target: '_self',
}

export default Nav;
