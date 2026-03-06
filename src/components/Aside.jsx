import comicsIco from "../assets/img/buy-comics-digital-comics.png"
import merchIco from "../assets/img/buy-comics-merchandise.png"
import gpsIco from "../assets/img/buy-comics-shop-locator.png"
import subIco from "../assets/img/buy-comics-subscriptions.png"
import dcVisaIco from "../assets/img/buy-dc-power-visa.svg"




export default function Aside() {


    return (
        <aside>
            <nav>
                <a href="#">
                    <span><img src={comicsIco} alt="Comics Icon" /></span>
                    DIGITAL COMICS
                </a>

                <a href="#">
                    <span><img src={merchIco} alt="Merchandise Icon" /></span>
                    DC MERCHANDISE
                </a>

                <a href="#">
                    <span><img src={subIco} alt="Subscription Icon" /></span>
                    SUBSCRIPTION
                </a>

                <a href="#">
                    <span><img src={gpsIco} alt="Find Comic Shop Icon" /></span>
                    COMIC SHOP LOCATOR
                </a>

                <a href="#">
                    <span><img src={dcVisaIco} alt="DC VISA ICON" style={{width: '50px'}} /></span>
                    DC POWER VISA
                </a>

            </nav>
        </aside>
    )
}