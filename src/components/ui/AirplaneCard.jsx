import "./airplane-card.sass"
import paperPlane from "../../assets/icons/settings/aircraft-list-card-paper-plane.svg"
import seat from "../../assets/icons/settings/aircraft-list-card-seat.svg"
import speed from "../../assets/icons/settings/aircraft-list-card-speed.svg"
import range from "../../assets/icons/settings/aircraft-list-card-range.svg"
import paperPlaneDark from "../../assets/icons/settings/aircraft-list-card-paper-plane-dark.svg"
import seatDark from "../../assets/icons/settings/aircraft-list-card-seat-dark.svg"
import speedDark from "../../assets/icons/settings/aircraft-list-card-speed-dark.svg"
import rangeDark from "../../assets/icons/settings/aircraft-list-card-range-dark.svg"

const AirplaneCard = ({item}) => {
    const crew = item.crew.join(", ")
    return (
        <div className="airplane-card">
            <div className="airplane-card__cover">
                <img className="airplane-card__image" src={item.cover} alt=""/>
                <span className="airplane-card__price">
                    {item.price}$
                </span>
            </div>
            <h4 className="airplane-card__name">{item.name}</h4>
            {item.crew.length > 0
                ?
                <h5 className="airplane-card__crew">x{item.crew.length} Crew:
                    <span className="airplane-card__crew-member"> {crew}</span>
                </h5>
                : "No crew"
            }

            <div className="airplane-card__characteristics">
                <span className="airplane-card__characteristics-item type">
                    <img src={document.body.classList.contains("dark") ? paperPlaneDark : paperPlane}
                         alt=""/>{item.type}
                </span>
                <span className="airplane-card__characteristics-item">
                    <img src={document.body.classList.contains("dark") ? seatDark : seat} alt=""/>x{item.seats}
                </span>
                <span className="airplane-card__characteristics-item">{item.built} Year
                </span>
                <span className="airplane-card__characteristics-item">
                    <img src={document.body.classList.contains("dark") ? speedDark : speed}
                         alt=""/>{item.speed} km/h
                </span>
                <span className="airplane-card__characteristics-item">
                    <img src={document.body.classList.contains("dark") ? rangeDark : range}
                         alt=""/>{item.range} km
                </span>
            </div>
        </div>
    )
}

export default AirplaneCard