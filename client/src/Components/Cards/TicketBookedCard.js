import classes from "./Cards.module.css"

const TicketCard = () => {
    const ticket_data = [
        ["PNR Number", "22524"],
        ["Train Name", "Hazrat Nizamuddin SpecialFare SF Special"],
        ["Ticket Status", "Booked"],
        ["Seat Type", "2A Tier (#A)"],
        ["Date", "22 June 2021"],
        ["Total Price", "₹ 200"],
    ]

    return (
        <div className={classes.TicketCardContainer}>
            <table className="highlight container">
                <tbody>
                    {ticket_data.map((info) => (
                        <tr key={info[0]}>
                            <th>{info[0]}</th>
                            <td>{info[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TicketCard
