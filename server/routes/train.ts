import { Request, Response, Router } from "express"

import _ from "lodash"
import { log } from "../app"
import { mockTrain } from "../shared/mockData"

class TrainRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.post("/api", (req: Request, res: Response) =>
            this.getTrain(req, res)
        )
        this.router.get("/:id", (_req: Request, res: Response) =>
            this.getTrainById(_req, res)
        )
    }

    private getAllTrainData(_req: Request, res: Response) {
        res.send(mockTrain)
    }

    private getTrainById(req: Request, res: Response) {
        const train = mockTrain.map((t) => t.id === req.params.id)
        res.send(train)
    }

    private getTrain(req: Request, res: Response) {
        const train = mockTrain.filter((t) => {
            return (
                t.dateDepart &&
                t.dateDepart.includes(req.body.dateDepart) &&
                t.gareDepart &&
                t.gareDepart.nomGare.includes(req.body.gareDepart)
            )
        })
        train && train.length ? res.send(train) : res.send("Aucun train trouvé")
    }
}

const createTrainRouter: Router = new TrainRouter().router
export { createTrainRouter }
