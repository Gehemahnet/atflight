import {useDispatch, useSelector} from "react-redux";
import {toggleEditor} from "../../redux/slices/profileSlice";

const ProfileEditor = () => {
    const {editProfile} = useSelector(state => state.profile)
    const dispatch = useDispatch()
    return (
        <div className="popup" onClick={() => dispatch(toggleEditor(editProfile))}>
            PIZDA
        </div>
    )
}

export default ProfileEditor