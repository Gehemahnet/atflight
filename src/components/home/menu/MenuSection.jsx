import {useSelector} from "react-redux"
import MenuFlightByRoute from "./MenuFlightByRoute"
import MenuRentByTime from "./MenuRentByTime"


const MenuSection = () => {
    const {section} = useSelector(state => state.menu)
    return (
        <>
            {section === "fr" && <MenuFlightByRoute/>}
            {section === "rt" && <MenuRentByTime/>}
        </>
    )
}

export default MenuSection