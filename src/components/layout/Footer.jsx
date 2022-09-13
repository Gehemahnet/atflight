import {NavLink} from "react-router-dom"
import logo from '../../assets/icons/layout/logo.svg'
import {SOCIAL, LINKS} from "../../data/links"

const Footer = () => {

    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer__top">
                    <img
                        className="footer__logo"
                        src={logo}
                        alt=""
                    />
                    <div className="footer__navigation">
                        {LINKS.map(link =>
                            <NavLink key={link.text} to={link.to} className="footer__link">{link.text}</NavLink>
                        )}
                    </div>
                    <div className="footer__social-media">
                        {SOCIAL.map(link =>
                            <a key={link.href}
                               className="footer__social-media-link"
                               href={link.href}
                            >
                                <img
                                    src={link.img}
                                    alt=""
                                />
                            </a>
                        )}
                    </div>
                </div>
                <div className="footer__bottom">
                    <span>(c) AT.Flights — All Rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer