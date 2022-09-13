import {useState} from "react"
import {useDispatch} from "react-redux"
import {setVerificationCode} from "../../redux/slices/authPopupSlice"
import {onlyDigits} from "../../data/regExp"
import "./verification-code.sass"


const VerificationCode = () => {
    const [code, setCode] = useState(["","","","","",""])
    const dispatch = useDispatch()
    const codeHandler = (e) => {
        let copy = Array.from(code)
        copy[e.target.name] = e.target.value.replace(onlyDigits, "")
        setCode(copy)
        dispatch(setVerificationCode(copy.join("")))
    }
    const jumpHandler = (e) => {
        let element = e.target
        let maxLength = element.getAttribute('maxlength')
        if (element.value.length >= maxLength) {
            do{
                element = element.nextSibling
            }
            while(element && !(/text/.test(element.type)))
            if(element && /text/.test(element.type)) {
                element.focus()
            }
        }
        if (e.key === "Backspace") {
            do{
                element = element.previousSibling
            }
            while(element && !(/text/.test(element.type)))
            if(element && /text/.test(element.type)) {
                element.focus()
            }
        }
    }
    return (
        <div className="verification__container">
            {code.map((input, index) =>
                <input
                    key={index}
                    name={String(index)}
                    onChange={codeHandler}
                    value={code[index]}
                    className="verification__cell"
                    type="text"
                    maxLength="1"
                    placeholder="_"
                    onKeyUp={jumpHandler}
                />
            )}
        </div>
    )
}

export default VerificationCode