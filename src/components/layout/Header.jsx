import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {toggleAuthPopup} from "../../redux/slices/authPopupSlice"
import {LINKS} from "../../data/links"
import logo from '../../assets/icons/layout/logo.svg'
import ThemeSwitcher from "../ui/ThemeSwitcher"
import Button from "../ui/Button"
import User from "../auth/User"
import HeaderProfile from "./HeaderProfile"


const Header = () => {
    const {userLogin} = useSelector(state => state.user)
    const {isOpen} = useSelector(state => state.authPopup)
    const dispatch = useDispatch()
    return (
        <header className="header">
            <div className="wrapper">
                <img className="header__logo" src={logo} alt=""/>
                <div className="header__navigation">
                    {LINKS.map(link =>
                        <NavLink key={link.text} to={link.to} className="header__link">{link.text}</NavLink>
                    )}
                    <button className="header__notification">
                        <span className="header__notification-counter"></span>
                    </button>
                </div>
                {userLogin !== false
                    ? <HeaderProfile/>
                    : <Button onClick={() => dispatch(toggleAuthPopup(isOpen))} text="Login"/>
                }
                <ThemeSwitcher/>
                {isOpen && <User/>}
            </div>
        </header>
    )
}

export default Header