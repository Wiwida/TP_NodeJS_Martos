import { NavLink } from "react-router-dom"
import { Place } from "../../../../server/shared/type"

type Props = {
    place: Place
}
const SeatTypeCard = ({ place }: Props) => {
    return (
        <div className="card purple darken-4">
            <div
                className="card-content white-text"
                style={{ padding: "0.5rem 1rem" }}
            >
                <p>{place.classe}</p>
                <p>Train on time</p>
            </div>
            <div className="card-action center" style={{ padding: "0.5rem" }}>
                <NavLink className="white-text" to="/">
                    Book Now
                </NavLink>
            </div>
        </div>
    )
}

export default SeatTypeCard
