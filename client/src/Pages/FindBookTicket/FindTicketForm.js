import classes from "./FindBookTicket.module.css"
import M from "materialize-css"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { TicketFindCard } from "../../Components"
import Masonry from "react-masonry-css"

const FindTicketForm = () => {
    const [trainsInfo, setTainsInfo] = useState([])

    const [state, setState] = useState("")
    const changeStateHandler = (e) => setState(e.target.value)

    const statesList = [
        "Delhi",
        "Mumbai",
        "Rajdhani",
        "Nagpur",
        "Sewagram",
        "Ajni",
        "Pune",
        "Amravati",
    ]

    const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1, 500: 1 }

    const findTrainsHandler = () => {
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
            .then((res) => setTainsInfo(res.data))
            .catch((err) => console.error(err))
    }

    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <div
            className={classes.CenterContainer}
            style={{ minHeight: "90vh", margin: "2rem" }}
        >
            <div className={classes.FormContainer}>
                <h3 className={classes.FormTitle}>BOOK</h3>
                <p className={classes.FormTitle}>YOUR TICKET</p>
                <br />

                <div className="input-field">
                    <select defaultValue="">
                        <option value="" disabled>
                            Choose a state ...
                        </option>
                        {statesList.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                    <label>From</label>
                </div>

                <div className="input-field">
                    <select defaultValue="" onChange={changeStateHandler}>
                        <option value="" disabled>
                            Choose a state ...
                        </option>
                        {statesList.map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                    <label>To</label>
                </div>

                <div className="input-field">
                    <input id="date" type="text" className="datepicker" />
                    <label htmlFor="date">Choose Date ...</label>
                </div>

                <button
                    onClick={findTrainsHandler}
                    className={`${classes.BtnWide} waves-effect waves-light btn purple darken-4`}
                >
                    FIND TRAINS
                </button>
            </div>

            {trainsInfo.length !== 0 ? (
                <React.Fragment>
                    <h3
                        style={{ marginTop: "5rem" }}
                        className={classes.FormTitle}
                    >
                        AVAILABILE TRAINS
                    </h3>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {trainsInfo.map((info, id) => (
                            <TicketFindCard
                                key={id}
                                idNum={id}
                                name={info.name}
                                state={state}
                                timing={info.data.departTime}
                                pnrNumber={info.data.id}
                                fromPlace={info.train_from}
                                toPlace={info.train_to}
                            />
                        ))}
                    </Masonry>
                </React.Fragment>
            ) : null}
        </div>
    )
}

export default FindTicketForm
