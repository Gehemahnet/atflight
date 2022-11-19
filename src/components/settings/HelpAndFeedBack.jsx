

import ask from "../../assets/icons/settings/answer.svg"
import support from "../../assets/icons/settings/support.svg"
import comment from "../../assets/icons/settings/comment.svg"

const HelpAndFeedBack = () => {
    return (
        <div className="settings__aside-block">
            <h4 className="settings__aside-block-title">Help & Feedback</h4>
            <div className="settings__aside-block-help">
                <button className="settings__aside-help-button">
                    <img src={ask} alt=""/> How AT.FLIGHTS works
                </button>
                <button className="settings__aside-help-button">
                    <img src={support} alt=""/> Get help
                </button>
                <button className="settings__aside-help-button">
                    <img src={comment} alt=""/> Give us feedback
                </button>
            </div>
        </div>
    )
}

export default HelpAndFeedBack