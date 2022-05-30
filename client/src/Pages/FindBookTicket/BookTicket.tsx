import { SeatTypeCard } from "../../Components"
import { Train } from "../../../../server/shared/type"
import { useEffect } from "react"

type Props = {
    train: Train
}
const BookTicket = ({ train }: Props) => {
    useEffect(() => {
        console.log(train)
    }, [train])

    return (
        <div className="CenterContainer" style={{ minHeight: "90vh" }}>
            {train !== null ? (
                <div className="TicketInfoContainer">
                    <h3>{train.nom}</h3>
                    <p>
                        [{train.gareDepart.nomGare} -{" "}
                        {train.gareArrivee.nomGare}]
                    </p>
                    <p>
                        <strong>DEPART - </strong>
                        {train.dateDepart}
                    </p>
                    <p>
                        <strong>NUMERO - </strong>
                        {train.id}
                    </p>
                    <br />
                    <div className="row">
                        {Array.isArray(train.place) &&
                            train.place.map((seatType, id) => (
                                <div key={id} className="col m4">
                                    <SeatTypeCard place={seatType} />
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <h6>Loading data...</h6>
            )}
        </div>
    )
}

export default BookTicket
