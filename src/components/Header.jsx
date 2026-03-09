import imgLogo from "../assets/img/dc-logo.png"

export default function Header() {
const navLinksTitle = ['charachter', 'comics', 'movies', 'tv', 'games', 'collectibles', 'videos', 'fans', 'news', 'shop' ]
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={imgLogo} alt="" />
                    </a>

                    <div>
                        <ul className="navbar-nav">

                        {navLinksTitle.map((linkTitle, index) => (
                            
                            <li key={index} className='nav-item'>
                                <a className={index === 1?'nav-link selected':'nav-link' } aria-current="page" href="#">{linkTitle.toUpperCase()}</a>
                            </li>

                        ))}

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="jumbotron"></div>
        </header>
    )
}