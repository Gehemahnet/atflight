import {useState} from "react"
import MenuDestination from "./MenuDestination"
import MenuFooter from "./MenuFooter"
import MenuMultiTrip from "./MenuMultiTrip"
import MenuSlider from "./MenuSlider"
import Switcher from "../../ui/Switcher"
import MenuDatePicker from "./MenuDatePicker"
import MenuPassengers from "./MenuPassengers";


const MenuSeatTicket = () => {
    const [start, setStart] = useState("")
    const [finish, setFinish] = useState("")
    const [additionalLocations, setAdditionalLocations] = useState([""])

    const [date, setDate] = useState([new Date(), new Date()])
    const [passengers, setPassengers] = useState([0,0,0,0])
    const [trip, setTrip] = useState("default")

    const [priceRange, setPriceRange] = useState([300, 500])
    const [luggage, setLuggage] = useState(false)
    const [transfer, setTransfer] = useState(false)
    const [convenientTransfer, setConvenientTransfer] = useState(false)

    const [filters, setFilters] = useState(false)
    const toggleFilters = () => {
        setFilters(!filters)
    }
    return (
        <div className="menu__form seat-ticket">
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
                <MenuPassengers
                    passengers={passengers}
                    setPassengers={setPassengers}
                />
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
                            placeholder={"Price"}
                            range={[100, 3000]}
                            value={priceRange}
                            setValue={setPriceRange}
                            category="$"
                        />
                        <Switcher
                            text="Only with luggage"
                            value={luggage}
                            setValue={setLuggage}
                        />
                        <Switcher
                            text="Without transfers"
                            value={transfer}
                            setValue={setTransfer}
                        />
                        <Switcher
                            text="Convenient transfers"
                            value={convenientTransfer}
                            setValue={setConvenientTransfer}
                        />
                    </div>
                </div>
            }
            <MenuFooter
                filters={filters}
                setFilters={toggleFilters}
            />
        </div>
    )
}

export default MenuSeatTicket