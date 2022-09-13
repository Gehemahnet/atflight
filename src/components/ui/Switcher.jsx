import "./switcher.sass"

const Switcher = ({text, value, setValue}) => {
    return (
        <div className="switcher">
            <span className="switcher-text">{text}</span>
            <button onClick={() => setValue(!value)} className={value === false ? "switcher-button" : "switcher-button on"}>
            </button>
        </div>
    )
}

export default Switcher