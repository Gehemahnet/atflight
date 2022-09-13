import MenuTabs from "./MenuTabs"
import MenuSection from "./MenuSection"
import "./menu.sass"


const Menu = () => {
    return (
        <div className="menu__content">
            <MenuTabs/>
            <MenuSection/>
        </div>
    )
}

export default Menu