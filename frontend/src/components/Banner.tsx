import Link from 'next/link';

export function Banner() {
    return (
        <div className="banner">
            <div className="container banner__container">
                <h2 className="banner__title title">
                    Somos uma empresa <strong>voltada para o futuro.</strong>
                </h2>
                <div className="banner__description">Nunc posuere purus magna, volutpat tristique ante tempor vel. Phasellus posuere pellentesque arcu</div>
                <Link href="/" className="button banner__action">Fale conosco</Link>
            </div>
            <div className="banner__media">
                <img src="img/banner.jpg" alt="" className="banner__img" />
            </div>
        </div>
    );
}

