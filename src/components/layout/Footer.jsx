import {NavLink} from "react-router-dom"
import logo from '../../assets/icons/layout/logo.svg'
import {SOCIAL} from "../../data/links"
import {useSelector} from "react-redux"

const Footer = () => {
    const user = useSelector(state => state.user)
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
                        <NavLink to="" className="footer__link">Home</NavLink>
                        <NavLink to="blog" className="footer__link">Blog</NavLink>
                        <NavLink to="adds" className="footer__link">Add's</NavLink>
                        {(user.phone !== null || user.email !== null) &&
                            <NavLink to="settings" className="footer__link">Settings</NavLink>
                        }
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