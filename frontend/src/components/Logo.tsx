import Link from 'next/link';

export function Logo() {
    return (
        <h1 className={`logo header__logo`}><Link href="/" className="logo__link">Maxtec</Link></h1>
    );
}
