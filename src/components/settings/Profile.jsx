import {useDispatch, useSelector} from "react-redux"
import Button from "../ui/Button"
import "./profile.sass"
import email from "../../assets/icons/settings/email.svg"
import phone from "../../assets/icons/settings/phone.svg"
import emergencyContact from "../../assets/icons/settings/emergency-contact.svg"
import governmentId from "../../assets/icons/settings/government-id.svg"
import licenseNumber from "../../assets/icons/settings/license.svg"
import salary from "../../assets/icons/settings/salary.svg"
import exit from "../../assets/icons/layout/logout.svg"
import ProfileField from "./ProfileField";
import {toggleEditor} from "../../redux/slices/profileSlice";
import ProfileEditor from "./ProfileEditor";

const Profile = () => {
    const user = useSelector(state => state.user)
    const {editProfile} = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const toggleEdit = () => {
        dispatch(toggleEditor(editProfile))
    }
    return (
        <div className="profile">
            {editProfile === true && <ProfileEditor/>}
            <div className="profile__header">
                <div className="profile__header-photo">
                    <button className="profile__header-photo-edit">
                    </button>
                </div>
                <div className="profile__header-info">
                    <h4 className="profile__header-name">
                        {user.name !== null ? user.name : user.email || user.phone}
                    </h4>
                    <h5 className="profile__header-id">ID {user.id !== null && user.id}</h5>
                    <h6 className="profile__header-roles">{user.roles !== null && user.roles.map(role => <span>{role}</span>)}</h6>
                </div>
            </div>
            <div className="profile__main">
                <ProfileField
                    img={email}
                    data={user.email}
                    description={"My email"}
                />
                <ProfileField
                    img={phone}
                    data={user.phone}
                    description={"My phone"}
                />
                <ProfileField
                    img={emergencyContact}
                    data={user.emergencyContact}
                    description={"Emergency contact"}
                />
                <ProfileField
                    img={governmentId}
                    data={user.dob}
                    description={"Date of birth"}
                />
                <ProfileField
                    img={governmentId}
                    data={user.governmentId}
                    description={"Government ID"}
                />
                <ProfileField
                    img={licenseNumber}
                    data={user.license}
                    description={"License"}
                />
                <div className="profile__main-field">
                    <div className="profile__main-field-data">
                        <img src={salary} alt=""/>
                        <span>{user.salary !== null ? `${user.salary} USD / Per hour` : "No data"}</span>
                    </div>
                    <div className="profile__main-field-description">
                        My salary
                    </div>
                </div>
            </div>
            <div className="profile__footer">
                <Button
                    text="Edit profile"
                    onClick={toggleEdit}
                />
                <Button
                    img={exit}
                />
            </div>
        </div>
    )
}

export default Profile