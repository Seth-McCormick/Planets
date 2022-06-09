import { dbContext } from "../db/DbContext"

class PlanetsService {

    async getAll(query = {}) {
        const planets = dbContext.Planets.find(query).populate('galaxy', 'name')
        return planets
    }
    async create(body) {
        const planets = await dbContext.Planets.create(body)
        return planets
    }

    async remove(id) {
        const original = await dbContext.Planets.findById(id)
        await original.remove()
        return `Died ${original.name}`
    }

}

export const planetsService = new PlanetsService()