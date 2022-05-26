import classes from "./PNRStatus.module.css"
import { useEffect, useState } from "react"
import M from "materialize-css"
import axios from "axios"

const PNRStatus = () => {
    const [pnrNumber, setPnrNumber] = useState("")
    const changePnrNumberHandler = (e) => setPnrNumber(e.target.value)

    // 6441757962
    const getPNRStatusHandler = () => {
        const options = {
            method: "GET",
            url: "https://indianrailways.p.rapidapi.com/index.php",
            params: { pnr: pnrNumber },
            headers: {
                "x-rapidapi-key":
                    "c13afb97cemsh64f7ac1f8b532e8p19a54djsn6d181df4acb7",
                "x-rapidapi-host": "indianrailways.p.rapidapi.com",
            },
        }
        axios
            .request(options)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.error(err))
    }

    const pnr_data = [
        ["PNR Number", "22524"],
        ["Date of Journey", "22 June 2021"],
        ["From", "Kota (KOTA)"],
        ["To", "Delhi (NZM)"],
        ["Train Name", "Hazrat Nizamuddin SpecialFare SF Special"],
        ["Booking Status", "Booked"],
        ["Seat Type", "2A Tier (#A)"],
    ]

    useEffect(() => {
        M.AutoInit()
    }, [])

    return (
        <div className={classes.CenterContainer} style={{ height: "100vh" }}>
            <div className={classes.FormContainer}>
                <p className={classes.FormTitle}>CHECK YOUR</p>
                <h3 className={classes.FormTitle}>PNR STATUS</h3>
                <br />
                <br />

                <div className="input-field">
                    <input
                        onChange={changePnrNumberHandler}
                        id="pnr"
                        type="number"
                        className={`${classes.InputField} validate`}
                    />
                    <label htmlFor="pnr">Enter PNR number ...</label>
                    <span>
                        <button
                            onClick={getPNRStatusHandler}
                            className="waves-effect waves-light btn purple darken-4"
                        >
                            FIND TRAINS
                        </button>
                    </span>
                </div>

                <table className="highlight container">
                    <tbody>
                        {pnr_data.map((info) => (
                            <tr key={info[0]}>
                                <th>{info[0]}</th>
                                <td>{info[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PNRStatus
