import "./menu-select.sass"
import Select from "react-select"

const MenuSelect = ({placeholder, options, value, setValue, isMulti}) => {
    return (
        <div className="menu__select-container">
            <Select
                placeholder={placeholder}
                className="select"
                classNamePrefix="select"
                onChange={setValue}
                isMulti={isMulti}
                closeMenuOnSelect={false}
                options={options}
                value={value}
                closeMenuOnScroll={false}
            />
        </div>
    )
}

export default MenuSelect