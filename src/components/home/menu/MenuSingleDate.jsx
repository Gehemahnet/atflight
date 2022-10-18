import {useState} from "react"
import Calendar from "react-calendar"
import {NextButton, NextButtonDark, PrevButton, PrevButtonDark} from "./MenuDatePickerButtons"
import Button from "../../ui/Button"
import TimePicker from "react-time-picker"
import "./menu-time-picker.sass"

const MenuSingleDate = ({placeholder, additionalClass, value, setValue, time, setTime}) => {
    const [show, setShow] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    const reset = () => {
        setShow(false)
        setValue([new Date()])
        setTime("10:00")
    }
    const confirm = () => {
        setConfirmed(true)
        setShow(false)
    }
    const options = {month: "long", day: "numeric"}
    return (
        <div className={`menu__datepicker ${additionalClass && additionalClass}`} onClick={() => setShow(!show)}>
            {confirmed === false
                ? placeholder
                : `${value.toLocaleString(navigator.language, options)}, ${time}`
            }
            {show &&
                <>
                    <div className="popup"></div>
                    <div className="menu__datepicker-modal" onClick={e => e.stopPropagation()}
                    >
                        <Calendar
                            showDoubleView
                            minDate={new Date()}
                            onChange={setValue}
                            nextLabel={document.body.classList.contains("dark")?<NextButtonDark/> : <NextButton/>}
                            prevLabel={document.body.classList.contains("dark")?<PrevButtonDark/> : <PrevButton/>}
                        />
                        <div className="menu__datepicker-modal-check">
                            <div className="menu__datepicker-modal-time">
                                {placeholder.split(" ")[0]} Rent Time:
                                <TimePicker
                                    locale="en-EN"
                                    value={time}
                                    onChange={setTime}
                                    disableClock={true}
                                />
                            </div>
                            <span className="menu__datepicker-modal-final">
                                {`${value.toLocaleString(navigator.language, options)}, ${time}`}
                            </span>
                        </div>
                        <div className="menu__datepicker-modal-footer">
                            <button
                                type="button"
                                onClick={reset}
                                className="menu__datepicker-modal-reset"
                            >
                                Reset Selected
                            </button>
                            <Button
                                onClick={confirm}
                                text="Confirm"/>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default MenuSingleDate