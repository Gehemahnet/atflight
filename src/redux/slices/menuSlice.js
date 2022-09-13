import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    section: "fr",
    subSection: "cr",
}

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setSection(state, action) {
            state.section = action.payload
        },
        setSubSection(state, action) {
            state.subSection = action.payload
        },
    }
})
export const {setSection, setSubSection} = menuSlice.actions
export default menuSlice.reducer