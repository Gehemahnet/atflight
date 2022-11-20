import {useSelector} from "react-redux"
import AirplaneCard from "../ui/AirplaneCard"

import "./aircraft-list.sass"
import plus from "../../assets/icons/settings/aircraft-list-add-button.svg"
import plusDark from "../../assets/icons/settings/aircraft-list-add-button-dark.svg"
import placeholder from "../../assets/icons/settings/aircraft-list-placeholder-dark.svg"



const AircraftList = () => {
    const userAircrafts = useSelector(state => state.userAircrafts)
    return (
        <div className="aircraft-list">
            <div className="aircraft-list__header">
                <h1 className="aircraft-list__title">Aircraft List</h1>
                <button className="aircraft-list__header-button"><img src={document.body.classList.contains("dark")? plusDark: plus} alt=""/>Add Aircraft</button>
            </div>
            <div className="aircraft-list__main">
                {userAircrafts.length === 0
                    ? placeholder
                    : userAircrafts.map((item, index) =>
                        <AirplaneCard key={index} item={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default AircraftList