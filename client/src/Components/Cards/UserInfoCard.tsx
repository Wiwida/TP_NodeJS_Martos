import { Client } from "../../../../server/shared/type"
import Loader from "../Loader"

type Props = {
    clientData: Client
    isLoading: boolean
}

const UserInfoCard = ({ clientData, isLoading }: Props) => {
    const user_data = [
        ["User ID", clientData && clientData.id],
        ["Nom", clientData && clientData.nom],
        ["Prenom", clientData && clientData.prenom],
        ["Adresse", clientData && clientData.adresse],
        ["Telephone", clientData && clientData.telephone],
    ]

    return (
        <div className="UserCardContainer">
            <table className="highlight container">
                <tbody>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        user_data.map((info) => (
                            <tr key={info[0]}>
                                <th>{info[0]}</th>
                                <td>{info[1]}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UserInfoCard
