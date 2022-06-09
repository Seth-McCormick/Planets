import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
    constructor() {
        super('api/stars')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let stars = await starsService.getAll(req.query)
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let stars = await starsService.create(req.body)
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }

    async remove(req, res, next) {
        try {
            let message = await starsService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }

    }

}