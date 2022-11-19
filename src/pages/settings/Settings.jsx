import {useState} from "react"

import Profile from "../../components/settings/Profile"
import AsideTabs from "../../components/settings/AsideTabs"
import Payments from "../../components/settings/Payments"
import AircraftList from "../../components/settings/AircraftList"

import "./settings.sass"
import HelpAndFeedBack from "../../components/settings/HelpAndFeedBack";

const Settings = () => {
    const [activeTab, setActiveTab] = useState("aircrafts")
    const tabHandler = e => setActiveTab(e.target.name)
    return (
        <section className="settings">
            <div className="wrapper">
                <aside className="settings__aside">
                    <Profile/>
                    <AsideTabs
                        state={activeTab}
                        handler={tabHandler}
                    />
                    <Payments
                    />
                    <HelpAndFeedBack
                    />
                </aside>
                {activeTab === "aircrafts" && <AircraftList/>}
            </div>
        </section>
    )
}

export default Settings