import { galaxiesService } from "../services/GalaxiesService";
import { planetsService } from "../services/PlanetsService";
import { speciesService } from "../services/SpeciesService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
            .get('', this.getAll)
            .get('/:id/stars', this.getStars)
            .get('/:id/planets', this.getPlanets)
            .get('/:id/moons', this.getMoons)
            .get('/:id/species', this.getSpecies)
            .post('', this.create)
            .delete('/:id', this.remove)
    }

    async getAll(req, res, next) {
        try {
            let galaxies = await galaxiesService.getAll(req.query)
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }

    }
    async getStars(req, res, next) {
        try {
            let stars = await starsService.getAll({ galaxyId: req.params.id })
            return res.send(stars)
        } catch (error) {
            next(error)
        }

    }
    async getPlanets(req, res, next) {
        try {
            let planets = await planetsService.getAll({ galaxyId: req.params.id })
            return res.send(planets)
        } catch (error) {
            next(error)
        }

    }
    async getMoons(req, res, next) {
        try {
            let moons = await moonsService.getAll({ galaxyId: req.params.id })
            return res.send(moons)
        } catch (error) {
            next(error)
        }

    }
    async getSpecies(req, res, next) {
        try {
            let species = await speciesService.getAll({ galaxyId: req.params.id })
            return res.send(species)
        } catch (error) {
            next(error)
        }

    }

    async create(req, res, next) {
        try {
            let galaxies = await galaxiesService.create(req.body)
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }

    }

    async remove(req, res, next) {
        try {
            let message = await galaxiesService.remove(req.params.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}