
import {useDispatch, useSelector} from "react-redux"
import {toggleAuthPopup} from "../../redux/slices/modal/authPopupSlice"
import "./user.sass"
import Login from "./Login"
import Verification from "./Verification"
import Registration from "./Registration"


const User = () => {
    const {isOpen, mode} = useSelector(state => state.authPopup)
    const dispatch = useDispatch()
    const closePopup = () => {
        dispatch(toggleAuthPopup(isOpen))
    }
    return (
        <div className="popup" onClick={closePopup}>
            {mode === "login" && <Login closePopup={closePopup}/>}
            {(mode === "verification-email" || mode === "verification-mobile") && <Verification closePopup={closePopup}/>}
            {mode === "registration" && <Registration closePopup={closePopup}/>}
        </div>

    )
}

export default User