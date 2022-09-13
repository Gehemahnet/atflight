import {useState} from "react"
import {TYPES} from "../../../data/types"
import "react-datepicker/dist/react-datepicker.css"
import "./menu-date-picker.sass"
import MenuDestination from "./MenuDestination"
import MenuPassengers from "./MenuPassengers"
import MenuSlider from "./MenuSlider"
import MenuMultiTrip from "./MenuMultiTrip"
import MenuFooter from "./MenuFooter"
import MenuDatePicker from "./MenuDatePicker"



const MenuCharterRent = () => {
    const [start, setStart] = useState("")
    const [finish, setFinish] = useState("")

    const [additionalLocations, setAdditionalLocations] = useState([""])

    const [date, setDate] = useState([new Date(), new Date()])
    const [type, setType] = useState("default")
    const [trip, setTrip] = useState("default")

    const [filters, setFilters] = useState(false)
    const toggleFilters = () => {
        setFilters(!filters)
    }
    const [priceRange, setPriceRange] = useState([300, 500])
    const [passengers, setPassengers] = useState([0,0,0,0])
    return (
        <form className="menu__form charter-rent">
            <div className="menu__row">
                <MenuDestination placeholder={"Location From..."} value={start} setValue={setStart}/>
                <MenuDatePicker value={date} setValue={setDate}/>
            </div>
            <button type="button" className="menu__swap-button"></button>
            <div className="menu__row">
                <MenuDestination placeholder={"Location To..."} value={finish} setValue={setFinish}/>
                <select className="menu__select" onChange={e => setTrip(e.target.value)} value={trip}>
                    <option value="default" disabled hidden>Type of Trip</option>
                    <option value="one">One Way</option>
                    <option value="round">Round Way</option>
                    <option value="multi">Multitrip</option>
                </select>
                <select className="menu__select" onChange={e => setType(e.target.value)} value={type}>
                    <option value="default" disabled hidden>Plane Type</option>
                    {TYPES.map((type, index) => <option key={index} value={type.name}>{type.name}</option>)}
                </select>
            </div>
            {trip === "multi" &&
                <MenuMultiTrip
                    additionalLocations={additionalLocations}
                    setAdditionalLocations={setAdditionalLocations}
                />
            }
            {filters &&
                <div className="menu__filters">
                    <div className="menu__row">
                        <MenuSlider
                            placeholder="Price"
                            range={[100, 3000]}
                            value={priceRange}
                            setValue={setPriceRange}
                            category="$"
                        />
                        <MenuPassengers
                            passengers={passengers}
                            setPassengers={setPassengers}
                        />
                    </div>
                </div>
            }
            <MenuFooter
                filters={filters}
                setFilters={toggleFilters}
            />
        </form>
    )
}

export default MenuCharterRent