import { Gare, Passager, Reservation, Train } from './type'

const mockTrain: Train[] = [
    {
        id: 876657,
        dateDepart: '19/06/2022',
        dateArrivee: '19/06/2022',
        arret: [],
    },
    {
        id: 876657,
        dateDepart: '06/04/2022',
        dateArrivee: '06/04/2022',
        arret: [],
    },
]

const mockGare: Gare[] = [
    {
        nom: '',
        ville: [],
    },
]

const mockReservation: Reservation[] = []
const mockPassager: Passager[] = [
    {
        nom: 'Dassie',
        prenom: 'Wilhelm',
    },
]
export { mockTrain, mockGare, mockReservation, mockPassager }
