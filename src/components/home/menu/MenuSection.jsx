import {useSelector} from "react-redux"
import MenuFlightByRoute from "./MenuFlightByRoute"
import MenuRentByTime from "./MenuRentByTime"
import MenuSearchCrew from "./MenuSearchCrew"


const MenuSection = () => {
    const {section} = useSelector(state => state.menu)
    return (
        <>
            {section === "fr" && <MenuFlightByRoute/>}
            {section === "rt" && <MenuRentByTime/>}
            {section === 'sc' && <MenuSearchCrew/>}
        </>
    )
}

export default MenuSection