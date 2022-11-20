import orders from "../../assets/icons/settings/order-history.svg"
import ordersDark from "../../assets/icons/settings/order-history-dark.svg"
import aircrafts from "../../assets/icons/settings/aircrafts.svg"
import aircraftsDark from "../../assets/icons/settings/aircrafts-dark.svg"

const AsideTabs = ({state,handler}) => {
    return (
        <>
            <div className="settings__aside-block">
                <h4 className="settings__aside-block-title">
                    My Orders
                </h4>
                <button
                    name="orders"
                    className={state === "orders"? "settings__aside-block-button active" :"settings__aside-block-button"}
                    onClick={handler}
                    type="button"
                >
                    <img src={document.body.classList.contains("dark")? ordersDark : orders} alt=""/>
                    Order History
                </button>
            </div>
            <div className="settings__aside-block">
                <h4 className="settings__aside-block-title">
                    My aircrafts
                </h4>
                <button
                    name="aircrafts"
                    className={state === "aircrafts"? "settings__aside-block-button active" :"settings__aside-block-button"}
                    onClick={handler}
                    type="button"
                >
                    <img src={document.body.classList.contains("dark")? aircraftsDark : aircrafts} alt=""/>
                    Aircrafts List
                </button>
            </div>
        </>
    )
}

export default AsideTabs