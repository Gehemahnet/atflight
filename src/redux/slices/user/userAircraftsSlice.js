import {createSlice} from "@reduxjs/toolkit"
import {aircrafts} from "../../../data/aircraftListMock"

function getData() {
    if(localStorage.getItem("userAircrafts") !== null) {
        return JSON.parse(localStorage.getItem("userAircrafts"))
    } else {
        return aircrafts
    }
}


const initialState = getData()

export const userAircraftsList = createSlice({
    name: 'userAircraftsList',
    initialState,
    reducers: {
        add(state, action) {
            state = [...state,action.payload]
        },
        remove(state, action) {
            state = state.splice(state.indexOf(action.payload), 1)
        }
    }
})

export const {add, remove} = userAircraftsList.actions
export default userAircraftsList.reducer