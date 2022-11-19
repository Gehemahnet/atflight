import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {toggleAuthPopup} from "../../redux/slices/modal/authPopupSlice"
import logo from '../../assets/icons/layout/logo.svg'
import ThemeSwitcher from "../ui/ThemeSwitcher"
import Button from "../ui/Button"
import User from "../auth/User"
import HeaderProfile from "./HeaderProfile"


const Header = () => {
    const user = useSelector(state => state.user)
    const {isOpen} = useSelector(state => state.authPopup)
    const dispatch = useDispatch()
    return (
        <header className="header">
            <div className="wrapper">
                <img className="header__logo" src={logo} alt=""/>
                <div className="header__navigation">
                    <NavLink to="" className="header__link">Home</NavLink>
                    <NavLink to="blog" className="header__link">Blog</NavLink>
                    <NavLink to="adds" className="header__link">Add's</NavLink>
                    {(user.phone !== null || user.email !== null) &&
                        <NavLink to="settings" className="header__link">Settings</NavLink>
                    }
                    <button className="header__notification">
                        <span className="header__notification-counter"></span>
                    </button>
                </div>
                {user.phone || user.email !== null
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