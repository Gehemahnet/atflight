import Person from "../../assets/icons/layout/person.svg"
import {useSelector} from "react-redux";

const HeaderProfile = () => {
    const {userName, userLogin, photo} = useSelector(state => state.user)
    return (
        <div className="header__profile">
            <img src={photo === false ? Person : photo}
                 alt="userPhoto"
                 className={photo === false ? "header__profile-photo-placeholder" : "header__profile-photo"}
            />
            <span className="header__profile-name">
                {userName !== false
                    ? userName
                    : userLogin
                }
            </span>
        </div>
    );
};

export default HeaderProfile