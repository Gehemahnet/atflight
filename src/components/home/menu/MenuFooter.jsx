import Button from "../../ui/Button"
import search from "../../../assets/icons/home/search.svg"
import show from "../../../assets/icons/home/filters-show.svg"
import hide from "../../../assets/icons/home/filters-hide.svg"

const MenuFooter = ({filters, setFilters, onClick}) => {
    return (
        <div className="menu__footer">
            <button
                type="button"
                className="menu__filters-button"
                onClick={setFilters}
            >
                <img src={!filters ? show : hide} alt=""/>
                {!filters ? "Show More Filters" : "Hide Filters"}
            </button>
            <Button
                onClick={onClick}
                text="Search"
                img={search}
            />
        </div>
    )
}

export default MenuFooter