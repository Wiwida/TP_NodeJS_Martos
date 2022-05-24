import { Request, Response, Router } from "express"
import { mockPassager, mockReservation, mockTrain } from "../share/mockData"

class ReservationRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.get("/", [this.getAllReservation])
        this.router.get("/reservation/:id", (_req: Request, res: Response) =>
            this.getReservationById(_req, res)
        )
        this.router.get("/addreservation", (_req: Request, res: Response) =>
            this.addReservation(_req, res)
        )
        this.router.get("/deletereservation", (_req: Request, res: Response) =>
            this.deleteReservation(_req, res)
        )
    }

    private getAllReservation(_req: Request, res: Response) {
        res.json(mockReservation)
    }

    private getReservationById(req: Request, res: Response) {
        const train = mockTrain.map((t) => t.id === req.body.id)
        res.send(train)
    }

    private addReservation(_req: Request, res: Response) {
        mockReservation.push({
            id: "1",
            passager: mockPassager[0],
            confirme: true,
            annuler: false,
            train: mockTrain[0],
        })
        res.send("Réservation Ajoutée")
    }

    private deleteReservation(_req: Request, res: Response) {
        mockReservation.pop()
        res.send("Réservation Supprimée")
    }
}

const createReservationRouter: Router = new ReservationRouter().router
export { createReservationRouter }
