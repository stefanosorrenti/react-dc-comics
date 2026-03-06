import imgLogo from "../assets/img/dc-logo.png"

export default function Header() {

    return (
        <header>
            <nav>
                <a href="#">
                    <img src={imgLogo} alt="" />
                </a>
                <a href="#">CHARACTERS</a>
                <a href="#">COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">TV</a>
                <a href="#">GAMES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </nav>
        </header>
    )
}