import {Fragment} from 'react'
import MenuDestination from "./MenuDestination"


const MenuMultiTrip = ({additionalLocations,setAdditionalLocations}) => {
    const addDestination = () => {
        let copy = Array.from(additionalLocations)
        copy.push("")
        setAdditionalLocations(copy)
    }
    const removeDestination = () => {
        let copy = Array.from(additionalLocations)
        copy.pop()
        setAdditionalLocations(copy)
    }
    const additionalLocationsHandler = (e, index) => {
        let copy = Array.from(additionalLocations)
        copy[index] = e
        setAdditionalLocations(copy)
    }
    return (
        <>
            <button type="button" className="menu__swap-button"></button>
            <div className="menu__row">
                <MenuDestination
                    placeholder="Next Destination"
                    value={additionalLocations[0]}
                    setValue={(e) => additionalLocationsHandler(e, 0)}
                />
                {additionalLocations.length < 4 &&
                    <button
                        type="button"
                        className="menu__multi-button plus"
                        onClick={addDestination}
                    >
                        Add destination
                    </button>
                }
                {additionalLocations.length > 1 &&
                    <button
                        type="button"
                        className="menu__multi-button minus"
                        onClick={removeDestination}
                    >
                        Remove destination
                    </button>
                }
            </div>
            {additionalLocations.slice(1).map((dest, index) =>
                <Fragment key={index}>
                    <button type="button" className="menu__swap-button"></button>
                    <div className="menu__row">
                        <MenuDestination
                            placeholder="Next Destination"
                            value={additionalLocations[index + 1]}
                            setValue={(e) => additionalLocationsHandler(e, index + 1)}
                        />
                    </div>
                </Fragment>
            )}
        </>
    )
}

export default MenuMultiTrip