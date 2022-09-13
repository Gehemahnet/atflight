import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {setMode, verify} from "../../redux/slices/authPopupSlice"
import {Link} from "react-router-dom"
import {useGoogleLogin} from "@react-oauth/google"
import {emailRegExp, phoneRegExp, password} from "../../data/regExp"
import googleLogo from "../../assets/icons/user/google.svg"
import appleLogo from "../../assets/icons/user/apple.svg"
import backDark from "../../assets/icons/user/back-dark.svg"
import back from "../../assets/icons/user/back.svg"
import Checkbox from "../ui/Checkbox"
import Button from "../ui/Button"


const Registration = ({closePopup}) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({login: "", password: "", checkPassword: ""})
    const [disableRegistration, setDisableRegistration] = useState(true)
    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const backToLogin = () => {
        dispatch(setMode("login"))
    }
    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    })
    const register = () => {
        if (emailRegExp.test(form.login)) {
            dispatch(setMode("verification-email"))
            dispatch(verify(form.login))
        }
        else if (phoneRegExp.test(form.login)) {
            dispatch(setMode("verification-mobile"))
            dispatch(verify(form.login))
        } else {
            alert("Email or Phone number is incorrect.")
        }
    }
    useEffect(() => {
        if ((emailRegExp.test(form.login) || phoneRegExp.test(form.login))) {
          if (password.test(form.password) && form.password === form.checkPassword) {
              setDisableRegistration(false)
          }
        } else {
            setDisableRegistration(true)
        }
    },[form])
    return (
        <div className="user" onClick={event => event.stopPropagation()}>
            <div className="user__header">
                <h2 className="user__title">
                    Registration
                </h2>
                <button onClick={closePopup} className="user__close"/>
            </div>
            <form className="user__form">
                <h4 className="user__form-title">Create an account so you can enjoy our services</h4>
                <div className="user__field">
                    <label className="user__label">Email or Phone Number</label>
                    <input
                        value={form.login}
                        onChange={formHandler}
                        placeholder="Your Email or Phone Number"
                        name="login"
                        type="email"
                        className="user__input login"
                    />
                </div>
                <div className="user__field">
                    <label className="user__label">Password</label>
                    <input
                        value={form.password}
                        onChange={formHandler}
                        placeholder="Enter Password"
                        name="password"
                        type="password"
                        className="user__input password"
                    />
                </div>
                <div className="user__field">
                    <label className="user__label">Re-enter password</label>
                    <input
                        value={form.checkPassword}
                        onChange={formHandler}
                        placeholder="Re-Enter Password"
                        name="checkPassword"
                        type="password"
                        className="user__input password"
                    />
                </div>
                <div className="user__agreement">
                    <Checkbox/>
                    <span className="user__agreement-text">By Creating your account you have to agree with our<br/>
                        <Link className="user__agreement-link" to="terms">Terms and Condition</Link>
                    </span>
                </div>
                <h6 className="user__subtitle">
                    You can use these methods for registration
                </h6>
                <button className="user__google" onClick={() => googleLogin()}>
                    <img src={googleLogo} alt=""/>
                    Sign Up with Google
                </button>
                <button className="user__apple">
                    <img src={appleLogo} alt=""/>
                    Sign Up with Apple
                </button>
            </form>
            <div className="user__footer">
                <Button img={document.body.classList.contains("dark") ? backDark : back} onClick={backToLogin}/>
                <Button disabled={disableRegistration} text="Registration" onClick={register}/>
            </div>
        </div>
    )
}

export default Registration;