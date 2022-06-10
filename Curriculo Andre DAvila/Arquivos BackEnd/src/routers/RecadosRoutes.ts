import { Router } from "express";
import RecadosController from "../controllers/RecadosController";

export default class RecadosRoutes {
    init() {
        const routes = Router()
        const controller = new RecadosController()

            routes.get('/recados', controller.index)
            routes.get('/recados/:id', controller.show)
            routes.post('/recados/', controller.store)
            routes.put('/recados/:id', controller.update)
            routes.delete('/recados/:id', controller.delete)

            return routes
    }
}