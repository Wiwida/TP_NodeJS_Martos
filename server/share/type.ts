


type Ville = {
    id: string
    nom: string
}

type Gare = {
    id: string
    nom: string
    ville: Ville[]
}

type Arret = {
    heureDepart: string
    heureArrivee: string
    gare: Gare
}

type Train ={
    id: string
    dateDepart: string
    dateArrivee: string
    arret: Arret[]
    gareDepart: Gare
    gareArrivee: Gare
}

type Passager = {
    id: string
    nom: string
    prenom: string
}

type Reservation = {
    id: string
    confirme: boolean
    annuler: boolean
    passager: Passager
    train: Train
}

type Compagnie = {
    id: string
    nom: string
    train: Train[]
    reservation: Reservation
}

type Client = {
    id: string
    nom: string
    prenom: string
    adresse: string
    telephone: string
    reservation: Reservation[]
}

export { Train, Gare, Arret, Passager, Compagnie, Client, Ville, Reservation }
