import {useState} from "react"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Button from "../../ui/Button";
import {NextButton, PrevButton} from "./MenuDatePickerButtons"


const MenuDatePicker = ({value, setValue}) => {
    const [show, setShow] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    const reset = () => {
        setValue([new Date(), new Date()])
    }
    const confirm = () => {
        setConfirmed(true)
        setShow(false)
    }
    const options = {month: "long", day: "numeric"}
    return (
        <div className="menu__datepicker" onClick={() => setShow(!show)}>
            {confirmed === false
                ? "Rent Dates"
                : `${value[0].toLocaleString(navigator.language, options)} 
                - ${value[1].toLocaleString(navigator.language, options)}`}
            {show &&
                <>
                    <div className="popup"></div>
                    <div className="menu__datepicker-modal" onClick={e => e.stopPropagation()}
                    >
                        <Calendar
                            showDoubleView
                            selectRange
                            minDate={new Date()}
                            onChange={setValue}
                            nextLabel={<NextButton/>}
                            prevLabel={<PrevButton/>}
                        />
                        <div className="menu__datepicker-modal-check">
                            <span>Rent Dates</span>
                            <span>
                                {`${value[0].toLocaleString(navigator.language, options)} 
                            - ${value[1].toLocaleString(navigator.language, options)}`}
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

export default MenuDatePicker