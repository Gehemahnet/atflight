import {configureStore} from '@reduxjs/toolkit'
import {themeSlice} from "../slices/themeSlice"
import {userSlice} from "../slices/userSlice"
import {authPopupSlice} from "../slices/authPopupSlice"
import {menuSlice} from "../slices/menuSlice"
import {profileSlice} from "../slices/profileSlice"

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        user: userSlice.reducer,
        authPopup: authPopupSlice.reducer,
        menu: menuSlice.reducer,
        profile: profileSlice.reducer
    },
})

export default store