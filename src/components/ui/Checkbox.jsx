import "./checkbox.sass"

const Checkbox = ({value, setValue}) => {
    const handler = () => {
        setValue(!value)
    }
    return (
        <label className="checkbox-label">
            <input className="checkbox-input" type="checkbox" onChange={handler} checked={value}/>
            <span className="checkbox-mark"></span>
        </label>
    )
}

export default Checkbox