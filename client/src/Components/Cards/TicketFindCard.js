import classes from "./Cards.module.css"
import { NavLink } from "react-router-dom"

const TicketFindCard = (props) => {
    const { idNum, name, fromPlace, toPlace, timing, pnrNumber, state } = props

    // const user_data = {
    //     name: 'NAME OF THE TRAIN',
    //     from: 'HERE',
    //     to: 'HERE',
    //     time: 'TIMINGS',
    //     pnrNumber: '726387263'
    // }

    return (
        <div className={classes.TicketFindContainer}>
            <NavLink
                className={classes.TicketTitle}
                to={`/ticket_book/${state}/${idNum}`}
            >
                <h5>{name}</h5>
            </NavLink>
            <p>
                <strong>FROM</strong> {fromPlace} <strong>TO</strong> {toPlace}
            </p>
            <p>
                <strong>TIMINGS:</strong> {timing}
            </p>
            <p>
                <strong>PNR NUMBER:</strong> {pnrNumber}
            </p>
        </div>
    )
}

export default TicketFindCard
