const MenuDestination = ({placeholder, value, setValue}) => {
    return (
        <>
            <input
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
                className="menu__input destination"
            />
            <button type="button" className="menu__chart-button"></button>
        </>

    )
}

export default MenuDestination