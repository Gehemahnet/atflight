import {configureStore} from '@reduxjs/toolkit'
import {themeSlice} from "../slices/themeSlice"
import {authSlice} from "../slices/authSlice"
import {authPopupSlice} from "../slices/authPopupSlice"
import {menuSlice} from "../slices/menuSlice"

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        isAuth: authSlice.reducer,
        authPopup: authPopupSlice.reducer,
        menu: menuSlice.reducer
    },
})

export default store