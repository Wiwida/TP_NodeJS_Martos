import { Request, Response, Router } from "express"
import { mockTrain } from "../share/mockData"

class TrainRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.get("/", [this.getAllTrainData])
        this.router.get("/recipe/:id", (_req: Request, res: Response) =>
            this.getTrainById(_req, res)
        )
    }

    private getAllTrainData(_req: Request, res: Response) {
        res.send(mockTrain)
    }

    private getTrainById(req: Request, res: Response) {
        const train = mockTrain.map((t) => t.id === req.body.id)
        res.send(train)
    }
}

const createTrainRouter: Router = new TrainRouter().router
export { createTrainRouter }
