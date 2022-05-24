import { Gare, Passager, Reservation, Train } from "./type"

const mockGareBordeaux: Gare = {
        id: "1",
        nom: "",
        ville: [],
    }
    const mockGareMontpellier: Gare = {
        id: "1",
        nom: "",
        ville: [],
    }



const mockTrain: Train[] = [
    {
        id: "876657",
        dateDepart: "19/06/2022",
        dateArrivee: "19/06/2022",
        arret: [],
        gareDepart: mockGareBordeaux,
        gareArrivee: mockGareMontpellier,
    },
    {
        id: "876657",
        dateDepart: "06/04/2022",
        dateArrivee: "06/04/2022",
        arret: [],
        gareDepart: mockGareMontpellier,
        gareArrivee: mockGareBordeaux,
    },
]

const mockReservation: Reservation[] = []
const mockPassager: Passager[] = [
    {
        id: "1",
        nom: "Dassie",
        prenom: "Wilhelm",
    },
]
export { mockTrain, mockReservation, mockPassager }
