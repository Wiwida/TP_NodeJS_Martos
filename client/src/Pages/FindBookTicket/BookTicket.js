import classes from "./FindBookTicket.module.css"
import { SeatTypeCard } from "../../Components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const BookTicket = () => {
    const params = useParams()
    const { id, state } = params

    const [ticket_info, setTicket_info] = useState(null)

    useEffect(() => {
        const options = {
            method: "POST",
            url: "https://trains.p.rapidapi.com/",
            headers: {
                "content-type": "application/json",
                "x-rapidapi-key":
                    "c13afb97cemsh64f7ac1f8b532e8p19a54djsn6d181df4acb7",
                "x-rapidapi-host": "trains.p.rapidapi.com",
            },
            data: { search: state },
        }
        axios
            .request(options)
            .then((res) => {
                console.log(res.data[id])
                setTicket_info(res.data[id])
            })
            .catch((err) => console.error(err))
    }, [id, state])

    return (
        <div className={classes.CenterContainer} style={{ minHeight: "90vh" }}>
            {ticket_info !== null ? (
                <div className={classes.TicketInfoContainer}>
                    <h3>{ticket_info.name}</h3>
                    <p>
                        [{ticket_info.train_from} - {ticket_info.train_to}]
                    </p>
                    <p>
                        <strong>TIME - </strong>
                        {ticket_info.data.departTime}
                    </p>
                    <p>
                        <strong>PNR - </strong>
                        {ticket_info.data.id}
                    </p>
                    <br />
                    <div className="row">
                        {ticket_info.data.classes !== "Unreserved"
                            ? ticket_info.data.classes.map((seatType) => (
                                  <div key={seatType} className="col m4">
                                      <SeatTypeCard type={seatType} />
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            ) : (
                <h6>Loading data...</h6>
            )}
        </div>
    )
}

export default BookTicket
