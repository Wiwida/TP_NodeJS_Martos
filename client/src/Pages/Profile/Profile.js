import { TicketCard, UserInfoCard } from "../../Components"
import classes from "./Profile.module.css"

const Profile = () => {
    return (
        <div>
            <h3 className={classes.Title}>USER INFO</h3>
            <UserInfoCard />

            <br />
            <h3 className={classes.Title}>USER'S BOOKED TICKETS</h3>
            <TicketCard />
            <TicketCard />
        </div>
    )
}

export default Profile
