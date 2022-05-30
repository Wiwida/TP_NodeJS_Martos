import { Dayjs } from "dayjs"

type Ville = {
    id: string
    nom: string
}

type Gare = {
    id: string
    nomGare: string
    gareEtape: Arret[]
}

type Arret = {
    heureDepart: Dayjs
    heureArrivee: Dayjs
    gare: Gare
}

type Place = {
    id: string
    classe: string
    numbPlace: string
}

type Train = {
    id: string
    nom: string
    dateDepart: string
    dateArrivee: string
    gareDepart: Gare
    gareArrivee: Gare
    compagnie: Compagnie
    place: Place[] | Place
}

type Passager = {
    id: string
    type: string
}

type Reservation = {
    id: string
    status: StatusReservation
    passager: Passager[]
    train: Train
}

enum StatusReservation {
    Annulee = "annulée",
    Confirmee = "confirmée",
}

type Compagnie = {
    id: string
    nom: string
}

type Client = {
    id: string
    nom: string
    prenom: string
    adresse: string
    telephone: string
    reservation: Reservation[]
}

export {
    Train,
    Gare,
    Arret,
    Passager,
    Compagnie,
    Client,
    Ville,
    Reservation,
    Place,
    StatusReservation,
}
