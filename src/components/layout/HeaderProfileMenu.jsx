import {Link} from "react-router-dom"
import Profile from "../../assets/icons/layout/profile.svg"
import Aircraft from "../../assets/icons/layout/aircraft.svg"
import Payments from "../../assets/icons/layout/payments.svg"
import Help from "../../assets/icons/layout/help.svg"
import Terms from "../../assets/icons/layout/terms.svg"
import Logout from "../../assets/icons/layout/logout.svg"
import Button from "../ui/Button"



const HeaderProfileMenu = ({toggleUserPopup}) => {
    const logout = () => {
        localStorage.removeItem("user")
        window.location.reload()
    }
    return (
        <>
            <div className="overlay" onClick={toggleUserPopup}></div>
            <div className="header__profile-popup" onClick={e => e.stopPropagation()}>
                <div className="header__profile-popup-block">
                    <Link to="settings" className="header__profile-popup-link">
                        <img src={Profile} alt=""/>
                        <span>My Profile</span>
                    </Link>
                </div>
                <div className="header__profile-popup-block">
                    <Link to="settings/aircraft" className="header__profile-popup-link">
                        <img src={Aircraft} alt=""/>
                        <span>My aircrafts</span>
                    </Link>
                    <Link to="settings/payments" className="header__profile-popup-link">
                        <img src={Payments} alt=""/>
                        <span>Payments & Payouts</span>
                    </Link>
                </div>
                <div className="header__profile-popup-block">
                    <Link to="help" className="header__profile-popup-link">
                        <img src={Help} alt=""/>
                        <span>Help & Feedback</span>
                    </Link>
                    <Link to="terms" className="header__profile-popup-link">
                        <img src={Terms} alt=""/>
                        <span>Terms of Service</span>
                    </Link>
                </div>
                <div className="header__profile-popup-footer">
                    <Button
                        text="Change Profile"
                    />
                    <Button
                        img={Logout}
                        onClick={logout}
                    />
                </div>
            </div>
        </>
    )
}

export default HeaderProfileMenu