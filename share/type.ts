
type Train ={
    id: number
    dateDepart: string
    dateArrivee: string
    arret: Arret[]

}

type Ville = {
    nom: string
}

type Gare = {
    nom: string
    ville: Ville[]
}

type Arret = {
    heureDepart: number
    heureArrivee: number
    gare: Gare
}

type Compagnie = {
    nom: string
    train: Train[]
    reservation: Reservation
}

type Client = {
    nom: string
    prenom:string
    adresse: string
    telephone: string
    reservation: Reservation[]
}

type Reservation = {
    confirme: boolean
    annuler: boolean
    passager: Passager
    train: Train
}

type Passager = {
    nom: string
    prenom: string
}



export {
    Train,
    Gare,
    Arret,
    Passager,
    Compagnie,
    Client,
    Ville,
    Reservation
}