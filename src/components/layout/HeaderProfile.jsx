import {useState} from "react"
import {useSelector} from "react-redux"
import Person from "../../assets/icons/layout/person.svg"
import HeaderProfileMenu from "./HeaderProfileMenu";


const HeaderProfile = () => {
    const {userName, userLogin, photo} = useSelector(state => state.user)
    const [userPopup, setUserPopup] = useState(true)
    const toggleUserPopup = () => {
        setUserPopup(!userPopup)
    }
    return (
        <div className="header__profile" onClick={toggleUserPopup}>
                <img
                    src={photo === false ? Person : photo}
                    alt="userPhoto"
                    className={photo === false ? "header__profile-photo-placeholder" : "header__profile-photo"}
                />
                <span className="header__profile-name">
                    {userName !== false
                        ? userName
                        : userLogin
                    }
                </span>
                <button className="header__profile-button"/>
            {userPopup === true &&
                <HeaderProfileMenu
                    toggleUserPopup={toggleUserPopup}
                />
            }
        </div>
    );
};

export default HeaderProfile