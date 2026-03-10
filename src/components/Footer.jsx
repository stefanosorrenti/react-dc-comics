//IMPORTS
import facebookIco from "../assets/img/footer-facebook.png"
import youtubeIco from "../assets/img/footer-youtube.png"
import twitterIco from "../assets/img/footer-twitter.png"
import pinterestIco from "../assets/img/footer-pinterest.png"
import findShopIco from "../assets/img/footer-periscope.png"
import dcBgLogo from "../assets/img/dc-logo-bg.png"


export default function Footer() {
    //DATA
    const socialIcons = [
        {
            name: 'Facebook Icon',
            src: facebookIco,

        },

        {
            name: 'Twitter Icon',
            src: twitterIco,

        },

        {
            name: 'Youtube Icon',
            src: youtubeIco,

        },

        {
            name: 'Pintarest Icon',
            src: pinterestIco,

        },

        {
            name: 'Find Comic Shop icon',
            src: findShopIco,

        },


    ]

    const dcComicsList = ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']
    const dcList = ['Terms Of Use',
        'Privacy policy(New)',
        'Ad Choices',
        'Advertising',
        'Jobs',
        'Subscriptions',
        'Talent Workshops',
        'CPSC Certificates',
        'Rates',
        'Shop Help',
        'Contact Us'
    ]

    const dcSitesList = ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']

    return (
        /* FOOTER */
        <footer>
            
            {/*FOOTER LINKS LIST*/}
            <div className="container">

                <div className="row">

                    <div className="col-12 col-md-6 col-lg-2 my-5">

                        {/* DC COMICS LIST */}
                        <span className="d-block mb-3">
                            DC COMICS
                        </span>

                        <ul className="list-group list-group-flush text-white">
                            {dcComicsList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        {/* SHOP LIST */}
                        <span className="d-block my-3">
                            SHOP
                        </span>

                        <ul className="list-group text-white">
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>

                    </div>

                    <div className="col-12 col-md-6 col-lg-2 my-5">

                        {/* DC LIST */}
                        <span className="d-block mb-3">
                            DC
                        </span>

                        <ul className="list-group text-white">
                            {dcList.map((item, index) => (

                                <li key={index}>{item}</li>

                            ))}
                        </ul>

                    </div>

                    <div className="col-12 col-md-6 col-lg-2 my-5">

                        {/* SITES LIST */}
                        <span className="d-block mb-3">
                            SITES
                        </span>

                        <ul className="list-group text-white">
                            {dcSitesList.map((item, index) => (
                                <li key={index}>{item}</li>

                            ))}
                        </ul>

                    </div>

                    {/* FOOTER LOGO IMAGE */}
                    <div className="col-12 col-md-6 col-lg-6">

                    </div>
                </div>

            </div>

            {/* FOOTER CONTACTS */}
            <div className="footer-contacts py-4">
                <div className="container d-flex justify-content-between align-items-center">

                    {/* SIGN-UP BUTTON */}
                    <button>SIGN-UP NOW!</button>

                    {/* SOCIAL MEDIA ICONS */}
                    <div className="social-media">

                        {/* FOLLOW US LINK */}
                        <a className="text-decoration-none fw-bold" href="#">FOLLOW US</a>

                        {socialIcons.map((icon, index) => (  /* DINAMIC SOCIALS LOGO */

                            /* MARKUP */
                            <a key={index} href="#">
                                <img src={icon.src} alt={icon.name} />
                            </a>

                        ))}

                    </div>
                </div>

            </div>

        </footer>
    )
}



