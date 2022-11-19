import {useState} from "react"
import {useSelector} from "react-redux"
import Person from "../../assets/icons/layout/person.svg"
import HeaderProfileMenu from "./HeaderProfileMenu";


const HeaderProfile = () => {
    const user = useSelector(state => state.user)
    const [userPopup, setUserPopup] = useState(false)
    const toggleUserPopup = () => {
        setUserPopup(!userPopup)
    }
    const name = user.firstName + " " + user.lastName
    return (
        <div className="header__profile">
                <img
                    src={user.photo === null ? Person : user.photo}
                    alt=""
                    className={user.photo === null ? "header__profile-photo-placeholder" : "header__profile-photo"}
                />
                <span className="header__profile-name">
                    {(user.firstName !== "" || user.lastName !== "")
                        ? name
                        : user.email || user.phone
                    }
                </span>
                <button className="header__profile-button" onClick={toggleUserPopup}/>
            {userPopup === true &&
                <HeaderProfileMenu
                    toggleUserPopup={toggleUserPopup}
                />
            }
        </div>
    );
};

export default HeaderProfile