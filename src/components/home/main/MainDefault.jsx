import {useState} from "react"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setMode, toggleAuthPopup} from "../../../redux/slices/modal/authPopupSlice"


import {TYPES} from "../../../data/types"
import {DESTINATIONS} from "../../../data/destinations"

import LoadMoreButton from "../../ui/LoadMoreButton"
import Button from "../../ui/Button"

import "./main-default.sass"

import employee from "../../../assets/icons/home/employee-register.svg"


const MainDefault = () => {
    const [activeType, setActiveType] = useState("")
    const activeTypeHandler = e => {
        if (e.target.tagName !== "IMG") {
            if (e.target.name === activeType) {
                setActiveType("")
            } else {
                setActiveType(e.target.name)
            }
        } else {
            if (e.target.closest("button").name === activeType) {
                setActiveType("")
            } else {
                setActiveType(e.target.closest("button").name)
            }
        }
    }

    const [destinationLimit, setDestinationLimit] = useState(8)
    const limitHandler = (direction) => {
        direction === "hide" ? setDestinationLimit(destinationLimit - 4) : setDestinationLimit(destinationLimit + 4)
    }

    const dispatch = useDispatch()
    const employeeRegistration = () => {
        dispatch(toggleAuthPopup())
        dispatch(setMode("registration"))
    }
    return (
        <div className="main__default">
            <article className="main__default-intro">
                <h1 className="main__default-title">
                    We will help you find out the best air freight
                </h1>
                <h5 className="main__default-subtitle">
                    We are largest search engine for airline tickets in the Caribbean. We equally use the new transfer
                    options at your expense, and then redirect to the official website of the airline and the agency for
                    further purchase.
                </h5>
            </article>
            <article className="main__default-types">
                <h1 className="main__default-title">
                    Types of Vehicles We Have
                </h1>
                <div className="main__default-types-block">
                    {TYPES.map((type, index) =>
                        <div
                            className="main__default-types-item"
                            key={index}
                        >
                            <button
                                name={type.name}
                                className={activeType === type.name ? "main__default-types-button active" : "main__default-types-button"}
                                onClick={activeTypeHandler}
                            >
                                <img src={type.icon} alt=""/>
                                {type.name}
                            </button>
                            {activeType === type.name &&
                                <div className="main__default-types-description">
                                    {type.description} <Link className="main__default-types-link" to={type.readMore}>Read
                                    More</Link>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </article>
            <article className="main__default-popular">
                <h1 className="main__default-title">
                    Popular Destinations
                </h1>
                <h5 className="main__default-subtitle">
                    We are largest search engine for airline tickets in the Caribbean. We equally use the new transfer
                    options at your expense, and then redirect to the official website of the airline and the agency for
                    further purchase.
                </h5>
                <div className="main__default-popular-block">
                    {DESTINATIONS.slice(0, destinationLimit).map((item, index) =>
                        <Link
                            key={index}
                            to={`/destinations/${item.name.toLowerCase()}`}
                            className="main__default-popular-item"
                        >
                            <img src={item.icon} alt=""/>
                            <h4 className="main__default-popular-title">
                                {item.name}
                            </h4>
                        </Link>
                    )}
                </div>
                <div className="main__default-load-more-buttons">
                    {(destinationLimit > 8) && <LoadMoreButton text="Hide" onClick={() => limitHandler("hide")}/>}
                    {(destinationLimit < DESTINATIONS.length) &&
                        <LoadMoreButton text="Load More" onClick={() => limitHandler("more")}/>}
                </div>
            </article>
            <article className="main__default-employee">
                <div className="main__default-employee-block">
                    <img src={employee} alt=""/>
                    <h1 className="main__default-title">
                        Register as an employee
                    </h1>
                    <h5 className="main__default-subtitle">
                        Viverra adipiscing a, adipiscing sit mi, ullamcorper iaculis augue. In quam diam donec fermentum
                        sed. Lacus vestibulum.
                    </h5>
                    <Button text={"Start Registration"} onClick={employeeRegistration}/>
                </div>
            </article>
        </div>
    )
}

export default MainDefault