import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen: false,
    mode: "login",
    data: null,
    verificationCode: null
}

export const authPopupSlice = createSlice({
    name: 'authPopupCalled',
    initialState,
    reducers: {
        toggleAuthPopup(state) {
            state.isOpen = !state.isOpen
            document.body.classList.toggle('using-popup')
        },
        setMode(state, action) {
            state.mode = action.payload
        },
        verify(state, action) {
            state.data = action.payload
        },
        setVerificationCode(state, action) {
            state.verificationCode = action.payload
        }
    },
})
export const {toggleAuthPopup, setMode, verify, setVerificationCode} = authPopupSlice.actions
export default authPopupSlice.reducer