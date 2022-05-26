import { TicketFindCard } from "../../Components"
import Masonry from "react-masonry-css"
import classes from "./FindBookTicket.module.css"

const TicketList = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
        500: 1,
    }

    return (
        <div className={classes.CenterContainer} style={{ minHeight: "90vh" }}>
            <h3 className={classes.FormTitle}>TRAIN AVAILABILITY</h3>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <TicketFindCard />
                <TicketFindCard />
                <TicketFindCard />
                <TicketFindCard />
                <TicketFindCard />
                <TicketFindCard />
                <TicketFindCard />
                <TicketFindCard />
            </Masonry>
        </div>
    )
}

export default TicketList

// import classes from './FindBookTicket.module.css'
// import M from 'materialize-css'
// import { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
// import axios from 'axios'

// const FindTicketForm = () => {

//     const [trainsInfo, setTainsInfo] = useState('')

//     const [state, setState] = useState('')
//     const changeStateHandler = e => setState(e.target.value)

//     const statesList = [
//         'Delhi', 'Mumbai', 'Rajdhani', 'Nagpur',
//         'Sewagram', 'Ajni', 'Pune', 'Amravati'
//     ]

//     const findTrainsHandler = () => {
//         const options = {
//             method: 'POST',
//             url: 'https://trains.p.rapidapi.com/',
//             headers: {
//             'content-type': 'application/json',
//             'x-rapidapi-key': 'c13afb97cemsh64f7ac1f8b532e8p19a54djsn6d181df4acb7',
//             'x-rapidapi-host': 'trains.p.rapidapi.com'
//             },
//             data: {search: state}
//         }
//         axios.request(options).then(res => setTainsInfo(res.data)).catch(err => console.error(err))
//     }

//     useEffect(() => {
//         M.AutoInit()
//     }, [])

//     return(
//         <div className={classes.CenterContainer} style={{minHeight:'90vh'}}>
//             <div className={classes.FormContainer}>
//                 <h3 className={classes.FormTitle}>BOOK</h3>
//                 <p className={classes.FormTitle}>YOUR TICKET</p><br/>

//                 <div className="input-field">
//                     <select defaultValue='' onChange={changeStateHandler}>
//                         <option value="" disabled>Choose a state</option>
//                         {statesList.map(state => <option key={state} value={state}>{state}</option>)}
//                     </select>
//                     <label>From / To</label>
//                 </div>

//                 <NavLink to='/ticket_list'><button onClick={findTrainsHandler} className={`${classes.BtnWide} waves-effect waves-light btn purple darken-4`}>FIND TRAINS</button></NavLink>
//             </div>
//         </div>
//     )
// }

// export default FindTicketForm
