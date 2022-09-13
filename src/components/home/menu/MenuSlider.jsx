import {useState} from "react"
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './menu-slider.css'
import {onlyDigits} from "../../../data/regExp"

const MenuSlider = ({placeholder, category, range, value, setValue}) => {
    const [show, setShow] = useState(false)
    const [dirty, setDirty] = useState(false)
    const toggleShow = () => {
        setShow(!show)
    }
    const valueHandler = (e, index) => {
        let copy = Array.from(value)
        let element = e.target.value
        if (/\d/g.test(e.target.value.slice(-1))) {
            copy[index] = Number(element)
            setDirty(true)
            setValue(copy)
        }


    }
    return (
        <div className="menu__slider" onClick={toggleShow}>
            {placeholder}: {dirty ? `${value[0]} - ${value[1]}${category}` : "From - To"}
            {show &&
                <>
                    <div className="popup"></div>
                    <div className="menu__slider-modal" onClick={e => e.stopPropagation()}>
                        <span className="menu__slider-modal-title">
                            {placeholder}: {dirty ? `${value[0]} - ${value[1]}${category}` : "From - To"}
                        </span>
                        <Slider
                            range
                            min={range[0]}
                            max={range[1]}
                            value={value}
                            onChange={e => {
                                setValue(e)
                                setDirty(true)
                            }}
                        />
                        <div className="menu__slider-modal-inputs">
                            <input className="menu__slider-modal-input dollars"
                                   value={value[0]}
                                   onChange={e => valueHandler(e, 0)}
                                   onKeyUp={e => e.target.value.replace(onlyDigits,'')}
                                   type="text"/>
                            <input className="menu__slider-modal-input dollars"
                                   value={value[1]}
                                   onChange={e => valueHandler(e, 1)}
                                   onKeyUp={e => e.target.value.replace(onlyDigits,'')}
                                   type="text"/>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default MenuSlider