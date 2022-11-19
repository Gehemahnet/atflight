import {useDispatch, useSelector} from "react-redux"
import mailBox from "../../assets/icons/user/mailbox.svg"
import phone from "../../assets/icons/user/phone.svg"
import back from "../../assets/icons/user/back.svg"
import backDark from "../../assets/icons/user/back-dark.svg"
import VerificationCode from "../ui/VerificationCode"
import Button from "../ui/Button"
import {setMode} from "../../redux/slices/modal/authPopupSlice"

const Verification = ({closePopup}) => {
    const {mode, data, verificationCode} = useSelector(state => state.authPopup)
    const dispatch = useDispatch()
    const backToRegistration = () => {
        dispatch(setMode("registration"))
    }
    const verify = () => {
        closePopup()
        dispatch(setMode("login"))
    }
    return (
        <div className="user" onClick={event => event.stopPropagation()}>
            <div className="user__header">
                <h2 className="user__title">
                    {mode === "verification-email" ? "E-mail Verification" : "Phone Verification"}
                </h2>
                <button onClick={closePopup} className="user__close"/>
            </div>
            <img className="user__verification-image" src={mode === "verification-email" ? mailBox : phone} alt=""/>
            <h3 className="user__verification-text">
                {mode === "verification-email" ? "Check Your E-mail" : "Check Your Phone"}
            </h3>
            <h4 className="user__verification-sent">
                We send a 6 digits code to<br/>
                <span className="user__verification-data">{data}</span>
            </h4>
            <VerificationCode/>
            <div className="user__footer">
                <Button  img={document.body.classList.contains("dark") ? backDark : back} onClick={backToRegistration}/>
                <Button
                    disabled={typeof verificationCode !== "string" || verificationCode.length !== 6}
                    text="Confirm"
                    onClick={verify}
                />
            </div>
        </div>
    )
}

export default Verification