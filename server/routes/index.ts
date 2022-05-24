import { Request, Response, Router } from "express"

class IndexRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.get("/", [this.getIndex])
    }

    private getIndex(_req: Request, res: Response) {
        res.json({ title: "Express" })
    }
}

const createIndexRouter: Router = new IndexRouter().router
export { createIndexRouter }
