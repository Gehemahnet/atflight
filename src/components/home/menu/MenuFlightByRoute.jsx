import {useDispatch, useSelector} from "react-redux"
import {setSubSection} from "../../../redux/slices/menuSlice"
import MenuCharterRent from "./MenuCharterRent"
import MenuSeatTicket from "./MenuSeatTicket"

const MenuFlightByRoute = () => {
    const {subSection} = useSelector(state => state.menu)
    const dispatch = useDispatch()
    return (
        <div className="menu__body flight-by-route">
            <div className="menu__radio">
                <div>
                    <input onChange={() => dispatch(setSubSection("cr"))} type="radio" name="fr"
                           checked={subSection === "cr"}/>
                    <span>Charter Rent</span>
                </div>
                <div>
                    <input onChange={() => dispatch(setSubSection("st"))} type="radio" name="fr"
                           checked={subSection === "st"}/>
                    <span>Seat Ticket</span>
                </div>
            </div>
            {subSection === "cr" ? <MenuCharterRent/> : <MenuSeatTicket/>}
        </div>
    )
}

export default MenuFlightByRoute