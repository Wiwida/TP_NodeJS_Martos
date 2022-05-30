import { ChangeEvent, useState } from "react"
import { Passager, Train } from "../../../../server/shared/type"

import { Link } from "react-router-dom"
import Modal from "react-modal"
import { addReservation } from "../../api/axios.config"
import { mockPassager } from "../../shared/utils"

type Props = {
    nom: string
    pnrNumber: string
    fromPlace: string
    toPlace: string
    date: string
}

type AllProps = {
    train: Train
    miniTrain: Props
}

const customStyles = {
    content: {
        position: "absolute",
        top: "5%",
        bottom: "5%",
        left: "10%",
        right: "10%",
        border: "none",
        background: "#4A148C",
        overflow: "auto",
        outline: "none",
        borderRadius: "15px",
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
}

const TicketFindCard = ({ miniTrain, train }: AllProps) => {
    const { fromPlace, toPlace, date, pnrNumber, nom } = miniTrain
    const [modalIsOpen, setIsOpen] = useState(false)
    const [addResModalIsOpen, setAddResModalIsOpen] = useState(false)
    const [passagerType, setPassagerType] = useState<string>("")

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const closeAddResModal = () => {
        setAddResModalIsOpen(false)
    }

    const changePassagerTypeHandler = (e) => {
        setPassagerType(e)
    }

    const addReservationHandler = (
        addTrainToReservation: Train,
        addPassagerToReservation: string
    ) => {
        addReservation(addTrainToReservation, addPassagerToReservation)
            .then((res) => {
                if (typeof res === "number" && res === 200) {
                    setIsOpen(false)
                    setAddResModalIsOpen(true)
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="TicketFindCard">
            <h5>
                <p className="color_blue">{nom}</p>
                NUMERO:
                <button className="basic_button" onClick={() => openModal()}>
                    {pnrNumber}
                </button>
            </h5>

            <p>
                <strong>DE</strong> {fromPlace} <strong>A</strong> {toPlace}
            </p>
            <p>
                <strong>DATE:</strong> {date}
            </p>
            <Modal isOpen={addResModalIsOpen} onRequestClose={closeAddResModal}>
                <div>
                    <h2>Votre réservation a bien été enregistrée</h2>
                    <Link to="/">Voir mes réservations</Link>
                </div>
            </Modal>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="CardBookedContainer">
                    {Array.isArray(train.place) &&
                        train.place.map((seat) => (
                            <div className="card white darken-4 CardBooked ">
                                <div
                                    className="card-content purple-text"
                                    style={{ padding: "0.5rem 1rem" }}
                                >
                                    <p>{seat.classe}</p>
                                </div>
                                <div>
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
                                </div>
                                <div
                                    className="card-action purple darken-4 center"
                                    style={{ padding: "0.5rem" }}
                                >
                                    <button
                                        onClick={() =>
                                            addReservationHandler(
                                                train,
                                                passagerType
                                            )
                                        }
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                <button onClick={closeModal}>close</button>
            </Modal>
        </div>
    )
}

export default TicketFindCard
