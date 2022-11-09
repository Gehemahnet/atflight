import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {toggleEditor} from "../../redux/slices/profileSlice"
// import {setDob, setEmail, setName, setPhone} from "../../redux/slices/userSlice"

import Select from "react-select"
import ProfileDataField from "./ProfileDataField"
import Button from "../ui/Button"

import person from "../../assets/icons/settings/modal-person.svg"
import profilePlaceholder from "../../assets/icons/settings/modal-profile-placeholder.svg"
import email from "../../assets/icons/settings/modal-email.svg"
import phone from "../../assets/icons/settings/modal-phone.svg"
import calendar from "../../assets/icons/settings/modal-calendar.svg"
import emergencyPhone from "../../assets/icons/settings/modal-emergency-phone.svg"
import salary from "../../assets/icons/settings/modal-salary.svg"
import government from "../../assets/icons/settings/modal-government-id.svg"
import license from "../../assets/icons/settings/modal-license.svg"
import del from "../../assets/icons/settings/modal-delete.svg"

import {GENDERS, PROFESSIONS} from "../../data/menuSelectData"
import {LANGUAGES} from "../../data/languages"
import {set} from "../../redux/slices/userSlice"





const ProfileEditor = () => {
    const {editProfile} = useSelector(state => state.profile)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        firstName: user.firstName || "", lastName: user.lastName || "" , email: user.email || "",
        phoneNumber: user.phoneNumber || "", dob: user.dob || "", gender: user.gender || "",
        emergencyPhone: user.emergencyPhone || "", roles: user.roles || [], salary: user.salary || "",
        governmentId: user.governmentId || "", license: user.license || "", languages: user.languages || []
    })
    const formHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const languageHandler = value => {
        setForm({...form, languages: value})
    }
    const togglePopup = () => {
        dispatch(toggleEditor(editProfile))
    }

    const deleteProfile = () => {
        localStorage.removeItem("user")
        window.location = "/"
    }
    const saveChanges = () => {
        dispatch(set(form))
        localStorage.setItem('user', JSON.stringify(form))
        window.location.reload()
    }

    return (
        <div className="popup" onClick={togglePopup}>
            <div className="profile__modal" onClick={e => e.stopPropagation()}>
                <div className="profile__modal-header">
                    <h2 className="profile__modal-title">
                        Edit profile
                    </h2>
                    <button onClick={togglePopup} className="profile__modal-close"/>
                </div>
                <form className="profile__modal-main">
                    <div style={{gap: "40px"}} className="profile__modal-main-block_divided">
                        <div style={{flex: "2"}}
                             className="profile__modal-main-block_division"
                        >
                            <ProfileDataField
                                label="First Name"
                                placeholder="Enter First Name"
                                name="firstName"
                                data={form.firstName}
                                setData={formHandler}
                                img={person}
                            />
                            <ProfileDataField
                                label="Last Name"
                                placeholder="Enter Last Name"
                                name="lastName"
                                data={form.lastName}
                                setData={formHandler}
                                img={person}
                            />
                        </div>
                        <div style={{justifyContent: "center", marginTop: "24px"}}
                             className="profile__modal-main-block_division"
                        >
                            <div className="profile__modal-photo">
                                <img src={profilePlaceholder} alt=""/>
                            </div>
                            <button type="button" className="profile__modal-upload-button">
                                Upload Photo
                            </button>
                        </div>
                    </div>
                    <div className="profile__modal-main-block" style={{justifyContent: "space-between"}}>
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="E-mail"
                            placeholder="Your E-mail"
                            name="email"
                            data={form.email}
                            setData={formHandler}
                            img={email}
                        />
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="Phone Number"
                            placeholder="+1 (000) 000-00-00"
                            name="phoneNumber"
                            data={form.phoneNumber}
                            setData={formHandler}
                            img={phone}
                        />
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="Date of Birth"
                            placeholder="Add Date of Birth"
                            name="dob"
                            type="date"
                            data={form.dob}
                            setData={formHandler}
                            img={calendar}
                        />
                        <div style={{width: "284px"}} className="profile__modal-field">
                            <label className="profile__modal-field-label">Gender</label>
                            <select onChange={formHandler} name="gender" className="profile__modal-select">
                                <option value="default" disabled={true}>Your Gender</option>
                                {GENDERS.map(gender =>
                                    <option key={gender.value} value={gender.value}>
                                        {gender.label}
                                    </option>
                                )}
                            </select>
                        </div>
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="Emergency Phone Number"
                            placeholder="+1 (000) 000-00-00"
                            name="emergencyPhone"
                            data={form.emergencyPhone}
                            setData={formHandler}
                            img={emergencyPhone}
                        />
                        <br/>
                        <div style={{width: "284px"}} className="profile__modal-field">
                            <label className="profile__modal-field-label">My Profession</label>
                            <select onChange={formHandler} name="roles" className="profile__modal-select">
                                <option value="default" disabled={true}>Choose Profession</option>
                                {PROFESSIONS.map(profession =>
                                    <option key={profession.value} value={profession.value}>
                                        {profession.label}
                                    </option>
                                )}
                            </select>
                        </div>
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="My Salary"
                            placeholder="USD / Per Hour"
                            name="salary"
                            data={form.salary}
                            setData={formHandler}
                            img={salary}
                        />
                        <br/>
                        <span className="profile__modal-notification">
                            * First and last name can be changed only by
                            providing documents
                        </span>
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="Government ID"
                            placeholder="00.00.0000"
                            name="governmentId"
                            data={form.governmentId}
                            setData={formHandler}
                            img={government}
                        />
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="License Number"
                            placeholder="00000000000"
                            name="license"
                            data={form.license}
                            setData={formHandler}
                            img={license}
                        />
                        <div style={{width: "100%"}} className="profile__modal-field">
                            <label className="profile__modal-field-label">I speak</label>
                            <Select isMulti={true} options={LANGUAGES} value={form.languages} onChange={languageHandler}/>
                        </div>
                    </div>
                    <div className="profile__modal-footer">
                        <button
                            type="button"
                            className="profile__modal-footer-button"
                            onClick={deleteProfile}
                        >
                            <img src={del} alt=""/>
                            Delete This Profile?
                        </button>
                        <Button
                            onClick={saveChanges}
                            text="Save Changes"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ProfileEditor