import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isAuth: localStorage.getItem('isAuth') || false
}

export const authSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        toggleAuth(state) {
            state.isAuth = !state.isAuth
        }
    },
})
export const {toggleAuth} = authSlice.actions
export default authSlice.reducer