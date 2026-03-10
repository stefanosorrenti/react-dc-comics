//IMPORTS
import imgLogo from "../assets/img/dc-logo.png"

//EXPORT COMPONENT
export default function Header() {
    //DATA
    const navLinksTitle = ['charachter', 'comics', 'movies', 'tv', 'games', 'collectibles', 'videos', 'fans', 'news', 'shop']


    return (
        //HEADER
        <header>
            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">

                    {/* NAVBAR LOGO */}
                    <a className="navbar-brand" href="#">
                        <img src={imgLogo} alt="" />
                    </a>

                    {/*NAVBAR DINAMUC BUTTON*/}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    {/*NAVBAR LINKS*/}
                    <div class="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav justify-content-end">

                            {navLinksTitle.map((linkTitle, index) => (  /*ADD DINAMIC LINK WITH MAP*/

                                <li key={index} className='nav-item'> {/*MARKUP*/}
                                    <a className={index === 1 ? 'nav-link p-2 selected position-relative' : 'nav-link p-2'} aria-current="page" href="#">{linkTitle.toUpperCase()}</a>
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            </nav>

            {/* JUMBOTRON */}
            <div className="jumbotron"></div>
            
        </header>
    )
}