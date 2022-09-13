import {useState} from "react"
import MenuPassengersCategory from "./MenuPassengersCategory"
import "./menu-passengers.sass"

const MenuPassengers = ({passengers, setPassengers}) => {
    const [show, setShow] = useState(false)
    const toggleShow = () => {
        setShow(!show)
    }
    const passengersHandler = (e, index) => {
        let copy = Array.from(passengers)
        let element = e.target
        if (element.tagName === "BUTTON") {
            if (element.name === "plus") {
                copy[index]++
            } else {
                copy[index]--
            }
        } else {
            copy[index] = Number(element.value)
        }
        copy[0] = copy[1] + copy[2] + copy[3]
        setPassengers(copy)
    }

    return (
        <div onClick={toggleShow} className="menu__passengers">
            <span style={{color: "#9A9A9A"}}> Passengers:</span> {passengers[0]}
            {show &&
                <>
                    <div className="popup">
                    </div>
                    <div onClick={e => e.stopPropagation()} className="menu__passengers-modal">
                        <MenuPassengersCategory
                            title="Adults"
                            subtitle="Older than 12 years"
                            value={passengers[1]}
                            setValue={e => passengersHandler(e, [1])}
                        />
                        <MenuPassengersCategory
                            title="Children"
                            subtitle="From 2 to 12 nights"
                            value={passengers[2]}
                            setValue={e => passengersHandler(e, [2])}
                        />
                        <MenuPassengersCategory
                            title="Babies"
                            subtitle="Up to 2 years, no place"
                            value={passengers[3]}
                            setValue={e => passengersHandler(e, [3])}
                        />
                    </div>
                </>
            }
        </div>
    )
}

export default MenuPassengers