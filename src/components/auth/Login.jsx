import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {toggleAuth} from "../../redux/slices/authSlice"
import {setMode} from "../../redux/slices/authPopupSlice"
import {emailRegExp, phoneRegExp} from "../../data/regExp"
import {useGoogleLogin} from "@react-oauth/google"
import googleLogo from "../../assets/icons/user/google.svg"
import appleLogo from "../../assets/icons/user/apple.svg"
import Button from "../ui/Button"


const Login = ({closePopup}) => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.isAuth)
    const [form, setForm] = useState({
        login: "",
        password: ""
    })
    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const login = () => {
        if (emailRegExp.test(form.login) || phoneRegExp.test(form.login)) {
            dispatch(toggleAuth(isAuth))
            localStorage.setItem('isAuth', isAuth)
            closePopup()
        } else {
            alert("Email or Phone number is incorrect.")
        }
    }
    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    })
    const toRegistration = () => {
        dispatch(setMode("registration"))
    }
    return (
        <div className="user" onClick={event => event.stopPropagation()}>
            <div className="user__header">
                <h2 className="user__title">
                    Login
                </h2>
                <button onClick={closePopup} className="user__close"/>
            </div>
            <form className="user__form">
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
                <h6 className="user__subtitle">
                    You can use these methods to login
                </h6>
                <button className="user__google" onClick={() => googleLogin()}>
                    <img src={googleLogo} alt=""/>
                    Sign In with Google
                </button>
                <button className="user__apple">
                    <img src={appleLogo} alt=""/>
                    Sign In with Apple
                </button>
            </form>
            <div className="user__footer">
                <Button text="Register New" onClick={toRegistration}/>
                <Button text="Login" onClick={login}/>
            </div>
        </div>

    )
}


export default Login;