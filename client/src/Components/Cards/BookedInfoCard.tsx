import { ChangeEvent, useState } from "react"

import { Reservation } from "../../../../server/shared/type"
import { addPassagerToReservation } from "../../api/axios.config"
import { mockPassager } from "../../shared/utils"

type Props = {
    reservation: Reservation[]
    fetchRes: () => void
}

const BookedInfoCard = ({ reservation, fetchRes }: Props) => {
    const [isAddPassager, setIsAddPassager] = useState(false)
    const [passagerType, setPassagerType] = useState<string>("")

    const changePassagerTypeHandler = (e) => {
        setPassagerType(e)
    }

    const isAddPassagerHandler = () => {
        setIsAddPassager(true)
    }

    const addPassagerToReservationHandler = (resID: string, type: string) => {
        addPassagerToReservation(resID, type)
            .then(() => {
                fetchRes()
                setIsAddPassager(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="BookedInfoCardContainer">
            {reservation.map((reservation, index) => (
                <div className="BookedInfoCard">
                    <div className="content">
                        <h4>
                            Numéro Réservation :{" "}
                            <span className="color_blue">{reservation.id}</span>
                        </h4>
                        <h4 className="trainID">
                            Train Numéro :{" "}
                            <span className="color_blue">
                                {reservation.train.id}
                            </span>
                        </h4>
                        <ul>
                            <li>
                                <span className="font_bold">
                                    Date Départ :{" "}
                                </span>
                                {reservation.train.dateDepart
                                    .toString()
                                    .toUpperCase()}
                            </li>
                            <li>
                                <span className="font_bold">
                                    Gare Départ :{" "}
                                </span>
                                {reservation.train.gareDepart.nomGare.toUpperCase()}
                            </li>
                            <li>
                                <span className="font_bold">
                                    Date Arrivée :{" "}
                                </span>
                                {reservation.train.dateArrivee.toUpperCase()}
                            </li>
                            <li>
                                <span className="font_bold">
                                    Gare Arrivée :{" "}
                                </span>
                                {reservation.train.gareArrivee.nomGare.toUpperCase()}
                            </li>
                            <li>
                                <span className="font_bold">Status : </span>
                                {reservation.status.toUpperCase()}
                            </li>
                            <li className="li_passager">
                                <span>
                                    <span className="font_bold">
                                        Passager :
                                    </span>{" "}
                                    {reservation.passager.map((p) => (
                                        <ul>
                                            <li>1 {p.type.toUpperCase()}</li>
                                        </ul>
                                    ))}
                                </span>
                                {!isAddPassager && (
                                    <button
                                        className="li_add_button"
                                        onClick={() => isAddPassagerHandler()}
                                    >
                                        + passager
                                    </button>
                                )}
                            </li>
                            {isAddPassager && (
                                <>
                                    <select
                                        className="browser-default"
                                        defaultValue=""
                                        onChange={(
                                            e: ChangeEvent<HTMLSelectElement>
                                        ) =>
                                            changePassagerTypeHandler(
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option>Passager...</option>
                                        {mockPassager.map((passager, index) => (
                                            <option
                                                key={index}
                                                value={passager.type}
                                            >
                                                {passager.type}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        className="li_add_button"
                                        onClick={() =>
                                            addPassagerToReservationHandler(
                                                reservation.id,
                                                passagerType
                                            )
                                        }
                                    >
                                        Ajouter
                                    </button>
                                </>
                            )}
                            <li>
                                <span className="font_bold">Etapes : </span>
                                {reservation.train.gareDepart.gareEtape
                                    .length ? (
                                    reservation.train.gareDepart.gareEtape.map(
                                        (etape) => (
                                            <ul>
                                                <li> - {etape.gare.nomGare}</li>
                                            </ul>
                                        )
                                    )
                                ) : (
                                    <span>AUCUNE ETAPE</span>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookedInfoCard
