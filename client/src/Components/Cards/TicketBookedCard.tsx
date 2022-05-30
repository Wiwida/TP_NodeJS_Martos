import BookedInfoCard from "./BookedInfoCard"
import Loader from "../Loader"
import { Reservation } from "../../../../server/shared/type"

type Props = {
    reservationInfo: Reservation[]
    isLoading: boolean
    fetchRes: () => void
}
const TicketCard = ({ reservationInfo, isLoading, fetchRes }: Props) => {
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <BookedInfoCard
                    fetchRes={fetchRes}
                    reservation={reservationInfo}
                />
            )}
        </div>
    )
}

export default TicketCard
