import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {toggleEditor} from "../../redux/slices/modal/profileSlice"

import Select from "react-select"
import ProfileDataField from "./ProfileDataField"
import Button from "../ui/Button"

import profilePlaceholder from "../../assets/icons/settings/modal-profile-placeholder.svg"
import person from "../../assets/icons/settings/modal-person.svg"
import email from "../../assets/icons/settings/modal-email.svg"
import phone from "../../assets/icons/settings/modal-phone.svg"
import calendar from "../../assets/icons/settings/modal-calendar.svg"
import emergencyPhone from "../../assets/icons/settings/modal-emergency-phone.svg"
import salary from "../../assets/icons/settings/modal-salary.svg"
import government from "../../assets/icons/settings/modal-government-id.svg"
import license from "../../assets/icons/settings/modal-license.svg"
import del from "../../assets/icons/settings/modal-delete.svg"

import personDark from "../../assets/icons/settings/modal-person-dark.svg"
import emailDark from "../../assets/icons/settings/modal-email-dark.svg"
import phoneDark from "../../assets/icons/settings/modal-phone-dark.svg"
import calendarDark from "../../assets/icons/settings/modal-calendar-dark.svg"
import emergencyPhoneDark from "../../assets/icons/settings/modal-emergency-phone-dark.svg"
import salaryDark from "../../assets/icons/settings/modal-salary-dark.svg"
import governmentDark from "../../assets/icons/settings/modal-government-id-dark.svg"
import licenseDark from "../../assets/icons/settings/modal-license-dark.svg"


import {GENDERS, PROFESSIONS} from "../../data/menuSelectData"
import {LANGUAGES} from "../../data/languages"
import {set} from "../../redux/slices/user/userSlice"


const ProfileEditor = () => {
    const {editProfile} = useSelector(state => state.profile)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        firstName: user.firstName || "", lastName: user.lastName || "", email: user.email || "",
        phoneNumber: user.phoneNumber || "", dob: user.dob || "", gender: user.gender || "",
        emergencyContact: user.emergencyContact || "", roles: [], salary: user.salary || "",
        governmentId: user.governmentId || "", license: user.license || "", languages: []
    })
    const formHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const rolesHandler = value => {
        setForm({...form, roles: value})
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
        let copy = JSON.parse(JSON.stringify(form))
        let roles = []
        let languages = []
        if (copy.roles.length > 0) {
            copy.roles.map(role => roles.push(role.value))
            copy.roles = roles
        }
        if (copy.languages.length > 0) {
            copy.languages.map(language => languages.push(language.value))
            copy.languages = languages
        }
        dispatch(set(copy))
        localStorage.setItem('user', JSON.stringify(copy))
        // window.location.reload()
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
                                img={document.body.classList.contains("dark") ? personDark : person}
                            />
                            <ProfileDataField
                                label="Last Name"
                                placeholder="Enter Last Name"
                                name="lastName"
                                data={form.lastName}
                                setData={formHandler}
                                img={document.body.classList.contains("dark") ? personDark : person}
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
                            img={document.body.classList.contains("dark") ? emailDark : email}
                        />
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="Phone Number"
                            placeholder="+1 (000) 000-00-00"
                            name="phoneNumber"
                            data={form.phoneNumber}
                            setData={formHandler}
                            img={document.body.classList.contains("dark") ? phoneDark : phone}
                        />
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="Date of Birth"
                            placeholder="Add Date of Birth"
                            name="dob"
                            type="date"
                            data={form.dob}
                            setData={formHandler}
                            img={document.body.classList.contains("dark") ? calendarDark : calendar}
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
                            name="emergencyContact"
                            data={form.emergencyContact}
                            setData={formHandler}
                            img={document.body.classList.contains("dark") ? emergencyPhoneDark : emergencyPhone}
                        />
                        <br/>
                        <div style={{width: "284px"}} className="profile__modal-field">
                            <label className="profile__modal-field-label">My Profession</label>
                            <Select
                                isMulti={true}
                                placeholder="Choose Profession"
                                options={PROFESSIONS}
                                value={form.roles}
                                onChange={rolesHandler}
                                className="select"
                                classNamePrefix="select"
                            />
                        </div>
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="My Salary"
                            placeholder="USD / Per Hour"
                            name="salary"
                            data={form.salary}
                            setData={formHandler}
                            img={document.body.classList.contains("dark") ? salaryDark : salary}
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
                            img={document.body.classList.contains("dark") ? governmentDark : government}
                        />
                        <ProfileDataField
                            style={{width: "284px"}}
                            label="License Number"
                            placeholder="00000000000"
                            name="license"
                            data={form.license}
                            setData={formHandler}
                            img={document.body.classList.contains("dark") ? licenseDark : license}
                        />
                        <div style={{width: "100%"}} className="profile__modal-field">
                            <label className="profile__modal-field-label">I speak</label>
                            <Select
                                isMulti={true}
                                placeholder="Select Languages"
                                options={LANGUAGES}
                                value={form.languages}
                                onChange={languageHandler}
                                className="select"
                                classNamePrefix="select"
                            />
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