import { Request, Response, Router } from "express"

import _ from "lodash"
import { log } from "../app"
import { mockPassager } from "../share/mockData"

class PassagerRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.get("/", [this.getAllPassager])
        this.router.post("/addpassager", (_req: Request, res: Response) =>
            this.addPassager(_req, res)
        )
        this.router.delete("/deletepassager", (_req: Request, res: Response) =>
            this.deletePassager(_req, res)
        )
    }

    private getAllPassager(_req: Request, res: Response) {
        res.json(mockPassager)
    }

    private getPassagerById(req: Request, res: Response) {
        const passager = mockPassager.map((p) => p.id === req.body.id)
        res.send(passager)
    }

    private addPassager(req: Request, res: Response) {
        mockPassager.push({
            id: req.body.id,
            nom: req.body.nom,
            prenom: req.body.prenom,
        })
        log.info(JSON.stringify(mockPassager))
        res.send("Réservation Ajoutée")
    }

    private deletePassager(_req: Request, res: Response) {
        const x = _.remove(mockPassager, (el) => {
            return el.id === _req.body.id
        })

        mockPassager.push.apply(x)
        log.info("mockPassager")
        log.info(JSON.stringify(mockPassager))
        res.send("Réservation Supprimée")
    }
}

const createPassagerRouter: Router = new PassagerRouter().router
export { createPassagerRouter }
