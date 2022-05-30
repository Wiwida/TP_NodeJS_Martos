import { Request, Response, Router } from "express"
import { mockReservation, mockTrain } from "../shared/mockData"

import { StatusReservation } from "../shared/type"
import { log } from "./../app"

class ReservationRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.get("/api/info", [this.getAllReservation])
        this.router.get("/api/:id", (_req: Request, res: Response) =>
            this.getReservationById(_req, res)
        )
        this.router.post("/api/add", (_req: Request, res: Response) =>
            this.addReservation(_req, res)
        )
        this.router.post("/api/addpassager", (_req: Request, res: Response) =>
            this.addPassagerToReservation(_req, res)
        )
    }

    private getAllReservation(_req: Request, res: Response) {
        res.send(mockReservation)
    }

    private getReservationById(req: Request, res: Response) {
        const train = mockTrain.map((t) => t.id === req.body.id)
        res.send(train)
    }

    private addReservation(_req: Request, res: Response) {
        mockReservation.push({
            id: "3",
            passager: [
                {
                    id: "1",
                    type: _req.body.passager,
                },
            ],
            status: StatusReservation.Confirmee,
            train: _req.body.train,
        })
        res.send("Réservation Ajoutée")
    }

    private addPassagerToReservation(_req: Request, res: Response) {
        mockReservation.map((r) => {
            if (r.id === _req.body.data.resID) {
                r.passager.push({
                    id: _req.body.data.passagerID,
                    type: _req.body.data.passagerType,
                })
            }
        })
        res.send("Passager Ajouté")
    }
}

const createReservationRouter: Router = new ReservationRouter().router
export { createReservationRouter }
