import {createSlice} from "@reduxjs/toolkit"
import {paymentsMock} from "../../../data/paymentsMock"


function getData() {
    if(localStorage.getItem("userPayments") !== null) {
        return JSON.parse(localStorage.getItem("userPayments"))
    } else {
        return paymentsMock
    }
}
const initialState = getData()

export const userPayments = createSlice({
    name: 'userPayments',
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

export const {add, remove} = userPayments.actions
export default userPayments.reducer