import classes from "./Cards.module.css"

const UserInfoCard = () => {
    const user_data = [
        ["User ID", "43242351223"],
        ["Name", "Sudhanshu Singh"],
        ["Username", "sudhimonkey"],
        ["Email", "sudhi@gmail.com"],
        ["Age", "20"],
        ["Gender", "Male"],
    ]

    return (
        <div className={classes.UserCardContainer}>
            <table className="highlight container">
                <tbody>
                    {user_data.map((info) => (
                        <tr key={info[0]}>
                            <th>{info[0]}</th>
                            <td>{info[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserInfoCard
