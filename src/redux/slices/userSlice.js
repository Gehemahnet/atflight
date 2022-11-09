import {createSlice} from "@reduxjs/toolkit"

function getState() {
    if (localStorage.getItem("user") !== null) {
        return {
            phone: JSON.parse(localStorage.getItem('user')).phone || null,
            email: JSON.parse(localStorage.getItem('user')).email || null,
            firstName: JSON.parse(localStorage.getItem('user')).firstName || null,
            lastName: JSON.parse(localStorage.getItem('user')).lastName || null,
            emergencyContact: JSON.parse(localStorage.getItem('user')).emergencyContact || null,
            id: JSON.parse(localStorage.getItem('user')).id || null,
            dob: JSON.parse(localStorage.getItem('user')).dob || null,
            license: JSON.parse(localStorage.getItem('user')).license || null,
            governmentId: JSON.parse(localStorage.getItem('user')).governmentId || null,
            roles: JSON.parse(localStorage.getItem('user')).roles || null,
            salary: JSON.parse(localStorage.getItem('user')).salary || null,
            photo: JSON.parse(localStorage.getItem('user')).photo || null,
            languages: JSON.parse(localStorage.getItem('user')).languages || null,
        }
    } else {
        return {
            phone: null,
            email: null,
            emergencyContact: null,
            firstName: null,
            lastName: null,
            id: null,
            dob: null,
            license: null,
            governmentId: null,
            roles: null,
            salary: null,
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
        },
        setEmergencyContact(state, action) {
            state.emergencyContact = action.payload
        },
        setId(state, action) {
            state.id = action.payload
        },
        setDob(state, action) {
            state.dob = action.payload
        },
        setLicense(state, action) {
            state.license = action.payload
        },
        setGovernmentId(state, action) {
            state.governmentId = action.payload
        },
        setRoles(state, action) {
            state.roles = action.payload
        },
        setPhoto(state, action) {
            state.photo = action.payload
        },
        setSalary(state, action) {
            state.salary = action.payload
        },
    }
})
export const {
    set,
    setPhone,
    setEmail,
    setName,
    setEmergencyContact,
    setId,
    setDob,
    setLicense,
    setGovernmentId,
    setSalary,
    setRoles,
    setPhoto,

} = userSlice.actions
export default userSlice.reducer