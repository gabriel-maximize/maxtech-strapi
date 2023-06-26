import { Logo } from './Logo';
import { Nav } from './Nav';
import { Social } from './Social';

export function Header() {
    return (
        <header className={`header`}>
            <div className="container header__container">
                <Logo />
            </div>
            <div className="header__bar">
                <Social />
                <Nav />
            </div>
        </header>
    );
}

