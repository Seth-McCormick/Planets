import { planetsService } from "../services/PlanetsService"
import BaseController from "../utils/BaseController"

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let planets = await planetsService.getAll(req.query)
            return res.send(planets)
        } catch (error) {
            next(error)
        }

    }
    async create(req, res, next) {
        try {
            let planets = await planetsService.create(req.body)
            return res.send(planets)
        } catch (error) {
            next(error)
        }

    }

    async remove(req, res, next) {
        try {
            let message = await planetsService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}