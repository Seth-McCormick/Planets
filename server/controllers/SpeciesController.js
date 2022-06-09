import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController {
    constructor() {
        super('api/species')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let species = await speciesService.getAll(req.query)
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let species = await speciesService.create(req.body)
            return res.send(species)
        } catch (error) {
            next(error)
        }

    }

    async remove(req, res, next) {
        try {
            let message = await speciesService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

}