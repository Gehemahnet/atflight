import {useState} from "react"
import {GENDERS, PROFESSIONS} from "../../../data/menuSelectData"
import {TYPES} from "../../../data/types"
import MenuSelect from "./MenuSelect"
import MenuSlider from "./MenuSlider"
import MenuFooter from "./MenuFooter";

const MenuSearchCrew = () => {
    const [profession, setProfession] = useState(null)
    const [showTypes, setShowTypes] = useState(false)
    const toggleTypes = () => {
        setShowTypes(!showTypes)
    }
    const [types, setTypes] = useState([])
    const selectType = e => {
        let copy = Array.from(types)
        let element = e.currentTarget.name
        if (copy.find(item => item === element)) {
            let index = copy.indexOf(element)
            copy.splice(index, 1)
        } else {
            copy.push(element)
        }
        setTypes(copy)
    }

    const [salary, setSalary] = useState([100,450])
    const [experience, setExperience] = useState([500,1000])
    const [filters, setFilters] = useState(false)
    const toggleFilters = () => {
        setFilters(!filters)
    }
    const [flightTIme, setFlightTime] = useState([5, 10])
    const [gender, setGender] = useState(null)
    const [age, setAge] = useState([30,45])

    return (
        <div className="menu__body search-crew">
            <form className="menu__form">
                <div className="menu__row">
                    <MenuSelect
                        placeholder="Choose Profession"
                        options={PROFESSIONS}
                        value={profession}
                        setValue={setProfession}
                        isMulti={true}
                    />
                    <div className="menu__types-select" onClick={toggleTypes}>
                        {types.length <= 0 ? "Vehicle Types" : types.map(type => <span key={type}>{type}</span>)}
                        {showTypes &&
                            <>
                                <div className="popup"></div>
                                <div className="menu__types-select-modal" onClick={e => e.stopPropagation()}>
                                    {TYPES.map((item, index) =>
                                        <button
                                            key={index}
                                            className={types.find(i => item.name === i) ? "menu__types-select-type active" : "menu__types-select-type"}
                                            type="button"
                                            name={item.name}
                                            onClick={selectType}
                                        >
                                            <img src={item.icon} alt=""/>
                                            <span>{item.name}</span>
                                        </button>
                                    )}
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="menu__row">
                    <MenuSlider
                        placeholder="Salary"
                        value={salary}
                        setValue={setSalary}
                        range={[100, 1000]}
                        category="$/hour"
                    />
                    <MenuSlider
                        placeholder="Work Experience"
                        value={experience}
                        setValue={setExperience}
                        range={[1, 10000]}
                        category="hours"
                    />
                </div>
                {filters &&
                    <div className="menu__filters">
                        <div className="menu__row">
                            <MenuSlider
                                placeholder="Flight Time"
                                range={[1,20]}
                                value={flightTIme}
                                setValue={setFlightTime}
                                category="hours"
                            />
                            <MenuSelect
                                placeholder="Gender"
                                options={GENDERS}
                                value={gender}
                                setValue={setGender}
                            />
                            <MenuSlider
                                placeholder="Age"
                                range={[25,70]}
                                value={age}
                                setValue={setAge}
                                category="years"
                            />

                        </div>
                    </div>
                }
                <MenuFooter
                    filters={filters}
                    setFilters={toggleFilters}
                />
            </form>
        </div>
    )
}

export default MenuSearchCrew