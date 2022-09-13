import "./button.sass"


const Button = ({img, text, onClick, disabled}) => {
    return (
        <button type="button" disabled={disabled} className={img ? "ui__button img" :"ui__button"} onClick={onClick}>
            {img && <img style={{marginRight: "8px"}} src={img} alt=""/>}{text}
        </button>
    )
}

export default Button