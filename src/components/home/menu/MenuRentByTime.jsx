import {useState} from "react"
import MenuDestination from "./MenuDestination"
import Checkbox from "../../ui/Checkbox"
import {TYPESTOSELECT} from "../../../data/menuSelectData"
import MenuSelect from "./MenuSelect"
import MenuSingleDate from "./MenuSingleDate"
import MenuFooter from "./MenuFooter"
import MenuSlider from "./MenuSlider"
import MenuPassengers from "./MenuPassengers"


const MenuRentByTime = () => {
    const [location, setLocation] = useState("")
    const [toAnother, setToAnother] = useState(false)
    const [withoutPilot, setWithoutPilot] = useState(false)

    const [another, setAnother] = useState("")

    const [type, setType] = useState([])

    const [start, setStart] = useState(new Date())
    const [startTime, setStartTime] = useState("10:00")
    const [finish, setFinish] = useState(new Date())
    const [finishTime, setFinishTime] = useState("10:00")

    const [filters, setFilters] = useState(false)
    const toggleFilters = () => {
        setFilters(!filters)
    }
    //Filters state
    const [priceRange, setPriceRange] = useState([300, 500])
    const [passengers, setPassengers] = useState([0,0,0,0])
    const [distance, setDistance] = useState([100, 10000])
    const [speed, setSpeed] = useState([150, 1500])
    return (
        <div className="menu__body rent-by-time">
            <form className="menu__form">
                <div className="menu__row">
                    <MenuDestination placeholder="Location Name" value={location} setValue={setLocation}/>
                    <div className="menu__checkbox">
                        <Checkbox value={toAnother} setValue={setToAnother}/>
                        <span className="menu__checkbox-text">Return to another airport?</span>
                    </div>
                    <div className="menu__checkbox">
                        <Checkbox value={withoutPilot} setValue={setWithoutPilot}/>
                        <span className="menu__checkbox-text">Rent without a pilot</span>
                    </div>
                </div>
                {toAnother &&
                    <div className="menu__row">
                        <MenuDestination placeholder="Location Name" value={another} setValue={setAnother}/>
                    </div>
                }
                <div className="menu__row">
                    <MenuSelect
                        placeholder="Plane Type"
                        options={TYPESTOSELECT}
                        value={type}
                        setValue={setType}
                    />
                    <MenuSingleDate
                        placeholder="Start Date & Time"
                        additionalClass={"start"}
                        value={start}
                        setValue={setStart}
                        time={startTime}
                        setTime={setStartTime}
                    />
                    <MenuSingleDate
                        placeholder="Finish Date & Time"
                        additionalClass={"finish"}
                        value={finish}
                        setValue={setFinish}
                        time={finishTime}
                        setTime={setFinishTime}
                    />
                </div>
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
                            <MenuSlider
                                placeholder="Distance"
                                range={[500, 5000]}
                                value={distance}
                                setValue={setDistance}
                                category="km"
                            />
                            <MenuSlider
                                placeholder="Speed"
                                value={speed}
                                setValue={setSpeed}
                                range={[100, 1000]}
                                category="km/h"
                            />
                        </div>
                    </div>
                }
                <MenuFooter
                    filters={filters}
                    setFilters={toggleFilters}
                />
            </form>
        </div>
    )
}

export default MenuRentByTime