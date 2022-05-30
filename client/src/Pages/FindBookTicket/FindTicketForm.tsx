import "react-datepicker/dist/react-datepicker.css"

import { ChangeEvent, useEffect, useState } from "react"
import { Train, Ville } from "../../../../server/shared/type"

import DatePicker from "react-datepicker"
import M from "materialize-css"
import { TicketFindCard } from "../../Components"
import dayjs from "dayjs"
import { fr } from "date-fns/locale"
import { getCurrentDate } from "../../shared/utils"
import { getTrain } from "../../api/axios.config"
import { searchTrain } from "../../shared/type"

const FindTicketForm = () => {
    const [trainsInfo, setTainsInfo] = useState<Train[]>([])
    const [stationDeparture, setStationDeparture] = useState("")
    const [stationArrival, setStationArrival] = useState("")
    const [dateDeparture, setDateDeparture] = useState<dayjs.Dayjs>(
        getCurrentDate()
    )

    const changeStationDepartureHandler = (e) =>
        setStationDeparture(e.target.value)
    const changeStationArrivalHandler = (e) => setStationArrival(e.target.value)

    const searchTrainHandler = async (
        dateDeparture: dayjs.Dayjs,
        stationDeparture: string,
        stationArrival: string
    ) => {
        if (
            dateDeparture !== undefined &&
            stationDeparture !== "" &&
            stationArrival !== ""
        ) {
            const data: searchTrain = {
                dateDepart: dateDeparture.format("DD/MM/YYYY"),
                gareDepart: stationDeparture,
                gareArrivee: stationArrival,
            }

            await getTrain(data)
                .then((res) => setTainsInfo(res))
                .catch((err) => console.log(err))
        }
    }
    const villes: Ville[] = [
        {
            id: "1",
            nom: "Paris",
        },
        {
            id: "2",
            nom: "Marseille",
        },
        {
            id: "3",
            nom: "Montpellier",
        },
        {
            id: "4",
            nom: "Bordeaux",
        },
        {
            id: "5",
            nom: "Lyon",
        },
    ]

    const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1, 500: 1 }

    useEffect(() => {
        M.AutoInit()
    }, [])

    console.log(trainsInfo)

    return (
        <div
            className="CenterContainer"
            style={{ minHeight: "90vh", margin: "2rem" }}
        >
            <div className="FormContainer">
                <h3 className="FormTitle">RESERVER</h3>
                <p className="FormTitle">Votre Trajet</p>
                <br />

                <div>
                    <select
                        className="browser-default"
                        defaultValue=""
                        onChange={changeStationDepartureHandler}
                    >
                        <option value={stationDeparture} disabled>
                            Départ ...
                        </option>
                        {villes.map((ville, index) => (
                            <option key={index} value={ville.nom}>
                                {ville.nom}
                            </option>
                        ))}
                    </select>
                    <label>De</label>
                </div>

                <div>
                    <select
                        className="browser-default"
                        defaultValue=""
                        onChange={changeStationArrivalHandler}
                    >
                        <option value={stationArrival} disabled>
                            Arrivée ...
                        </option>
                        {villes.map((ville, index) => (
                            <option key={index} value={ville.nom}>
                                {ville.nom}
                            </option>
                        ))}
                    </select>
                    <label>à</label>
                </div>

                <div className="input-field">
                    <DatePicker
                        locale={fr}
                        dateFormat="P"
                        selected={dateDeparture.toDate()}
                        minDate={getCurrentDate()}
                        onChange={(date: Date) => setDateDeparture(dayjs(date))}
                    />
                </div>

                <button
                    onClick={async () =>
                        await searchTrainHandler(
                            dateDeparture,
                            stationDeparture,
                            stationArrival
                        )
                    }
                    className="basic_button_100 basic_button"
                >
                    Chercher
                </button>
            </div>

            {trainsInfo && trainsInfo.length !== 0 && (
                <>
                    <h3 style={{ marginTop: "5rem" }} className="FormTitle">
                        TRAINS DISPONIBLE
                    </h3>
                    <div className="TicketFindCardContainer">
                        {trainsInfo.map((info, id) => (
                            <TicketFindCard
                                key={id}
                                miniTrain={{
                                    fromPlace: info.gareDepart.nomGare,
                                    toPlace: info.gareArrivee.nomGare,
                                    date: info.dateDepart,
                                    nom: info.nom,
                                    pnrNumber: info.id,
                                }}
                                train={info}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default FindTicketForm
