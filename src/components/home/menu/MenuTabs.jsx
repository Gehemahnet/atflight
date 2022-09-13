import {useDispatch, useSelector} from "react-redux"
import {setSection} from "../../../redux/slices/menuSlice"

const MenuTabs = () => {
    const {section} = useSelector(state => state.menu)
    const dispatch = useDispatch()
    const setMenuSection = e => dispatch(setSection(e.target.name))
    return (
        <div className="menu__tabs">
            <button
                className={section === "fr" ? "menu__tabs-item active" : "menu__tabs-item"}
                name="fr"
                onClick={setMenuSection}
            >
                Flight by route
            </button>
            <button
                className={section === "rt" ? "menu__tabs-item active" : "menu__tabs-item"}
                name="rt"
                onClick={setMenuSection}
            >
                Rent by time
            </button>
            <button
                className={section === "sc" ? "menu__tabs-item active" : "menu__tabs-item"}
                name="sc"
                onClick={setMenuSection}
            >
                Search Crew
            </button>
        </div>
    )
}

export default MenuTabs