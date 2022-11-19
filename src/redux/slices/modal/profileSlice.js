import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    editProfile: false
}
export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        toggleEditor(state) {
            state.editProfile = !state.editProfile
            document.body.classList.toggle('using-popup')
        }
    }
})

export const {toggleEditor} = profileSlice.actions
export default profileSlice.reducer