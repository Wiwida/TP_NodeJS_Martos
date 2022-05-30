import {
    Client,
    Passager,
    Reservation,
    Train,
} from "../../../server/shared/type"

import axios from "axios"
import { searchTrain } from "../shared/type"

export async function getClientInfo(): Promise<Client> {
    return axios
        .get("http://localhost:8000/api/client/info")
        .then((res) => res.data)
        .catch((err) => console.log(err))
}

export async function getReservationInfo(): Promise<Reservation[]> {
    return axios
        .get("http://localhost:8000/reservation/api/info")
        .then((res) => res.data)
        .catch((err) => console.log(err))
}

export async function addPassagerToReservation(
    resID: string,
    passager: string
) {
    return axios
        .post("http://localhost:8000/reservation/api/addpassager", {
            data: {
                resID: "1",
                passagerID: "2",
                passagerType: passager,
            },
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
}

export async function getTrain(data: searchTrain): Promise<Train[]> {
    console.log(data)
    return axios
        .post("http://localhost:8000/train/api", {
            dateDepart: data.dateDepart,
            gareDepart: data.gareDepart,
            gareArrivee: data.gareArrivee,
        })
        .then((res) => res.data)
        .catch((err) => console.log(err))
}

export async function addReservation(
    train: Train,
    passager: string
): Promise<number | void> {
    return axios
        .post("http://localhost:8000/reservation/api/add", {
            train: train,
            passager: passager,
        })
        .then((res) => res.status)
        .catch((err) => console.log(err))
}
