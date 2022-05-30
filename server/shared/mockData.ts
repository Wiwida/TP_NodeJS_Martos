import {
    Arret,
    Client,
    Compagnie,
    Gare,
    Passager,
    Place,
    Reservation,
    StatusReservation,
    Train,
} from "./type"

import dayjs from "dayjs"

const getDate = (timestamp: any) =>
    dayjs.unix(timestamp).format("DD/MM/YYYY, HH:mm")

getDate(1653862227)

const mockGares: Gare[] = [
    {
        id: "1",
        nomGare: "Bordeaux",
        gareEtape: [
            {
                heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
                heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
                gare: {
                    id: "2",
                    nomGare: "Narbonne",
                    gareEtape: [],
                },
            },
            {
                heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
                heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
                gare: {
                    id: "3",
                    nomGare: "Toulouse",
                    gareEtape: [],
                }, //Toulouse
            },
            {
                heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
                heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
                gare: {
                    id: "7",
                    nomGare: "Carcassonne",
                    gareEtape: [],
                }, //Carcassonne
            },
        ],
    },
    {
        id: "4",
        nomGare: "Montpellier",
        gareEtape: [
            {
                heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
                heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
                gare: {
                    id: "2",
                    nomGare: "Narbonne",
                    gareEtape: [],
                },
            },
            {
                heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
                heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
                gare: {
                    id: "3",
                    nomGare: "Toulouse",
                    gareEtape: [],
                }, //Toulouse
            },
            {
                heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
                heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
                gare: {
                    id: "7",
                    nomGare: "Carcassonne",
                    gareEtape: [],
                }, //Carcassonne
            },
        ],
    },
    {
        id: "5",
        nomGare: "Paris",
        gareEtape: [],
    },
    {
        id: "6",
        nomGare: "Lyon",
        gareEtape: [],
    },
]

const mockCompagnie: Compagnie[] = [
    { id: "1", nom: "OUIGO" },
    { id: "2", nom: "SNCF" },
]

const mockPlace: Place[] = [
    { id: "1", classe: "economique", numbPlace: "28" },
    { id: "2", classe: "première classe", numbPlace: "20" },
]

const mockArret: Arret[] = [
    {
        heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
        heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
        gare: mockGares[1], //Narbonne
    },
    {
        heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
        heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
        gare: mockGares[2], //Toulouse
    },
    {
        heureDepart: dayjs("2020-01-01T08:00:00.000Z"),
        heureArrivee: dayjs("2020-01-01T09:00:00.000Z"),
        gare: mockGares[6], //Carcassonne
    },
]

const mockTrain: Train[] = [
    {
        id: "876657",
        nom: "TGV INOUI",
        dateDepart: getDate(1659013204), // 28/07/2022 15:00:04
        dateArrivee: getDate(1659020404), // 28/07/2022 17:00:04
        gareDepart: mockGares[0],
        gareArrivee: mockGares[3],
        compagnie: mockCompagnie[0],
        place: mockPlace,
    },
    {
        id: "786865",
        nom: "TGV INOUI",
        dateDepart: getDate(1659031026), // 06/04/2022 00:00:00,
        dateArrivee: getDate(1659031026),
        gareDepart: mockGares[4],
        gareArrivee: mockGares[5],
        compagnie: mockCompagnie[0],
        place: mockPlace,
    },
    {
        id: "896756",
        nom: "TER",
        dateDepart: getDate(1659013204), // 28/07/2022 07:00:04
        dateArrivee: getDate(1659020404), // 28/07/2022 17:00:04
        gareDepart: mockGares[0],
        gareArrivee: mockGares[3],
        compagnie: mockCompagnie[1],
        place: mockPlace,
    },
]

const mockReservedTrain: Train[] = [
    {
        id: "896756",
        nom: "TGV",
        dateDepart: getDate(1663264804), // "15/09/2022 20:00:04
        dateArrivee: getDate(1663272004), // "15/09/2022 22:00:04

        gareDepart: mockGares[0],
        gareArrivee: mockGares[3],
        compagnie: mockCompagnie[1],
        place: mockPlace[1],
    },
    {
        id: "896756",
        nom: "TER",
        dateDepart: getDate(1667980804), // "09/11/2022 09:00:04
        dateArrivee: getDate(1667995204), //"09/11/2022 13:00:04

        gareDepart: mockGares[3],
        gareArrivee: mockGares[2],
        compagnie: mockCompagnie[1],
        place: mockPlace[1],
    },
]

const mockPassager: Passager[] = [
    {
        id: "1",
        type: "adulte",
    },
    {
        id: "1",
        type: "enfant",
    },
]

const mockReservation: Reservation[] = [
    {
        id: "1",
        status: StatusReservation.Confirmee,
        passager: [mockPassager[0]],
        train: mockReservedTrain[0],
    },
    {
        id: "2",
        status: StatusReservation.Confirmee,
        passager: [mockPassager[1]],
        train: mockReservedTrain[1],
    },
]

const mockClient: Client = {
    id: "977631",
    nom: "Moreau",
    prenom: "Quentin",
    adresse: "1 rue de la paix",
    telephone: "0612345678",
    reservation: mockReservation,
}
export { mockTrain, mockReservation, mockPassager, mockClient }
