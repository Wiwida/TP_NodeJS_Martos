import { Request, Response, Router } from "express"

import { mockClient } from "../shared/mockData"

class IndexRouter {
    public readonly router: Router

    constructor() {
        this.router = Router()
        this.router.get("/api/client/info", [this.getClientInfo])
    }

    private getClientInfo(_req: Request, res: Response) {
        res.send(mockClient)
    }
}

const createIndexRouter: Router = new IndexRouter().router
export { createIndexRouter }
