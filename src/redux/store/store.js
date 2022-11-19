import {configureStore} from '@reduxjs/toolkit'
import {themeSlice} from "../slices/themeSlice"
import {userSlice} from "../slices/user/userSlice"
import {userAircraftsList} from "../slices/user/userAircraftsSlice"
import {userPayments} from "../slices/user/userPaymentsSlice"
import {authPopupSlice} from "../slices/modal/authPopupSlice"
import {menuSlice} from "../slices/menuSlice"
import {profileSlice} from "../slices/modal/profileSlice"


const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        user: userSlice.reducer,
        userAircrafts: userAircraftsList.reducer,
        userPayments: userPayments.reducer,
        authPopup: authPopupSlice.reducer,
        menu: menuSlice.reducer,
        profile: profileSlice.reducer,
    },
})

export default store