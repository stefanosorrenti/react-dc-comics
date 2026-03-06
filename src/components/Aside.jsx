import comicsIco from "../assets/img/buy-comics-digital-comics.png"
import merchIco from "../assets/img/buy-comics-merchandise.png"
import gpsIco from "../assets/img/buy-comics-shop-locator.png"
import subIco from "../assets/img/buy-comics-subscriptions.png"
import dcVisaIco from "../assets/img/buy-dc-power-visa.svg"




export default function Aside() {


    return (
        <aside>
            <div className="container">
                <ul className="nav py-5 justify-content-evenly align-items-center">

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span><img src={comicsIco} alt="Comics Icon" /></span>
                            DIGITAL COMICS
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span><img src={merchIco} alt="Merchandise Icon" /></span>
                            DC MERCHANDISE
                        </a>

                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span><img src={subIco} alt="Subscription Icon" /></span>
                            SUBSCRIPTION
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span><img src={gpsIco} alt="Find Comic Shop Icon" /></span>
                            COMIC SHOP LOCATOR
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="text-decoration-none" href="#">
                            <span><img src={dcVisaIco} alt="DC VISA ICON"/></span>
                            DC POWER VISA
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}