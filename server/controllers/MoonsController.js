import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";

export class MoonsController extends BaseController {
    constructor() {
        super('api/moons')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let moons = await moonsService.getAll(req.query)
            return res.send(moons)
        } catch (error) {
            next(error)
        }

    }
    async create(req, res, next) {
        try {
            let moons = await moonsService.create(req.body)
            return res.send(moons)
        } catch (error) {
            next(error)
        }

    }

    async remove(req, res, next) {
        try {
            let message = await moonsService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

}