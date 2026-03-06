import facebookIco from "../assets/img/footer-facebook.png"
import youtubeIco from "../assets/img/footer-youtube.png"
import twitterIco from "../assets/img/footer-twitter.png"
import pinterestIco from "../assets/img/footer-pinterest.png"
import findShopIco from "../assets/img/footer-periscope.png"


export default function Footer() {


    return (
        <footer>
            <div className="container">
                <span>
                    DC COMICS
                    <ul>
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>
                </span>

                <span>
                    SHOP
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                </span>

                <span>
                    DC
                    <ul>
                        <li>Terms Of Use</li>
                        <li>Privacy policy (New)</li>
                        <li>Ad Choices</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Rates</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>
                </span>

                <span>
                    SITES
                    <ul>
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                </span>

                <div className="footer-contacts">
                    <button>SIGN-UP NOW!</button>

                    <div className="social-media">
                        <a href="#">FOLLOW US</a>
                        <a href="#">
                            <img src={facebookIco} alt="Facebook Icon" />
                        </a>
                        <a href="#">
                            <img src={twitterIco} alt="Twitter Icon" />
                        </a>
                        <a href="#">
                            <img src={youtubeIco} alt="Youtube Icon" />
                        </a>
                        <a href="#">
                            <img src={pinterestIco} alt="Pinyerest Icon" />
                        </a>
                        <a href="#">
                            <img src={findShopIco} alt="Find Comic Shop icon" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    )
}