import imgLogo from "../assets/img/dc-logo.png"

export default function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={imgLogo} alt="" />
                    </a>

                    <div>
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">CHARACHTER</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">COMICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MOVIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GAMES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">COLLECTIBLES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FANS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOP</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}