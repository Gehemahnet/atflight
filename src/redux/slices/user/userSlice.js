import {createSlice} from "@reduxjs/toolkit"

function getState() {
    if (localStorage.getItem("user") !== null) {
        return {
            phoneNumber: JSON.parse(localStorage.getItem('user')).phone || null,
            email: JSON.parse(localStorage.getItem('user')).email || null,
            firstName: JSON.parse(localStorage.getItem('user')).firstName || "",
            lastName: JSON.parse(localStorage.getItem('user')).lastName || "",
            emergencyContact: JSON.parse(localStorage.getItem('user')).emergencyContact || null,
            id: JSON.parse(localStorage.getItem('user')).id || null,
            dob: JSON.parse(localStorage.getItem('user')).dob || null,
            license: JSON.parse(localStorage.getItem('user')).license || null,
            governmentId: JSON.parse(localStorage.getItem('user')).governmentId || null,
            roles: JSON.parse(localStorage.getItem('user')).roles || null,
            salary: JSON.parse(localStorage.getItem('user')).salary || "",
            photo: JSON.parse(localStorage.getItem('user')).photo || null,
            languages: JSON.parse(localStorage.getItem('user')).languages || null,
        }
    } else {
        return {
            phoneNumber: null,
            email: null,
            emergencyContact: null,
            firstName: "",
            lastName: "",
            id: null,
            dob: null,
            license: null,
            governmentId: null,
            roles: null,
            salary: "",
            photo: null,
            languages: null
        }
    }

}

const initialState = getState()

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set:(state,action) => action.payload,
        setPhone(state, action) {
            state.phone = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setName(state, action) {
            state.name = action.payload
        }
    }
})
export const {
    set,
    setPhone,
    setEmail

} = userSlice.actions
export default userSlice.reducer