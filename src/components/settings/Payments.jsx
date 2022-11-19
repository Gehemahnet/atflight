import {useSelector} from "react-redux"

import method from "../../assets/icons/settings/payments-up.svg"
import history from "../../assets/icons/settings/transactions.svg"
import currency from "../../assets/icons/settings/buck.svg"
import donations from "../../assets/icons/settings/donations.svg"
import coin from "../../assets/icons/settings/pocket.svg"

const Payments = () => {
    const userPayments = useSelector(state => state.userPayments)

    return (
        <div className="settings__aside-block">
            <h4 className="settings__aside-block-title">Payments</h4>
            <div className="settings__aside-block-payments">
                <div className="settings__aside-block-cards">
                    {userPayments.map((item, index) =>
                        <button key={index} className="settings__aside-block-card">
                            <span><img src={method} alt=""/> Payments method</span>
                            <span>*{item.number.slice(-4)} <img src={item.icon.default} alt=""/></span>
                        </button>
                    )}
                </div>
                <br/>
                <button className="settings__aside-block-history">
                    <img src={history} alt=""/> Transaction history
                </button>
                <br/>
                <div className="settings__aside-block-other">
                    <button className="settings__aside-payments-button">
                        <img src={currency} alt=""/> Currency
                    </button>
                    <button className="settings__aside-payments-button">
                        <img src={donations} alt=""/> Donations
                    </button>
                    <button className="settings__aside-payments-button">
                        <img src={coin} alt=""/> ATF Coin Wallet
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payments