import Link from 'next/link';

export function Logo({Component, className, children}) {
    return (
        <Component className={`logo ${className}`}><Link href="/" className="logo__link">{children}</Link></Component>
    );
}

Logo.defaultProps = {
    Component: 'h1',
}

export default Logo;
