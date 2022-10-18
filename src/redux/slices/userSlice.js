import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userLogin: localStorage.getItem('userLogin') || false,
    userName: localStorage.getItem('userName') || false,
    photo: JSON.parse(localStorage.getItem('photo')) || false,
}

export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.userLogin = action.payload
        },
        setPhoto(state, action) {
            state.photo = action.payload
        }
    },
})
export const {setLogin, photo} = userSlice.actions
export default userSlice.reducer