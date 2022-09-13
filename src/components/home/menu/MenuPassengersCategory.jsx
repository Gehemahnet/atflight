const MenuPassengersCategory = ({title, subtitle, value, setValue}) => {
    return (
        <div className="menu__passengers-modal-row">
            <div className="menu__passengers-modal-text">
                <span className="menu__passengers-modal-title">{title}</span>
                <span className="menu__passengers-modal-subtitle">{subtitle}</span>
            </div>
            <div className="menu__passengers-modal-interface">
                <button name="minus" type="button" onClick={setValue} className="menu__passengers-modal-minus" disabled={value < 1}></button>
                <input className="menu__passengers-modal-input" value={value} onChange={setValue} type="text"/>
                <button name="plus" type="button" onClick={setValue} className="menu__passengers-modal-plus"></button>
            </div>
        </div>
    )
}

export default MenuPassengersCategory