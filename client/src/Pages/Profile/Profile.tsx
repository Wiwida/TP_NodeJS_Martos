import { Client, Reservation } from "../../../../server/shared/type"
import { TicketCard, UserInfoCard } from "../../Components"
import { getClientInfo, getReservationInfo } from "../../api/axios.config"
import { useEffect, useState } from "react"

const Profile = () => {
    const [client, setClient] = useState<Client>()
    const [reservation, setReservation] = useState<Reservation[]>()
    const [isLoading, setIsLoading] = useState(true)

    const fetchReservation = () => {
        getReservationInfo().then((res) => {
            setReservation(res)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        Promise.all([getClientInfo(), getReservationInfo()]).then(
            ([client, reservation]) => {
                setClient(client)
                setReservation(reservation)
                setIsLoading(false)
            }
        )
    }, [])

    return (
        <div className="ProfileContainer">
            <h3 className="Title">Vos Informations</h3>
            <UserInfoCard clientData={client} isLoading={isLoading} />

            <br />
            <h3 className="Title">Vos Réservation</h3>
            <TicketCard
                fetchRes={fetchReservation}
                reservationInfo={reservation}
                isLoading={isLoading}
            />
        </div>
    )
}

export default Profile
