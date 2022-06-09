import { dbContext } from "../db/DbContext"

class GalaxiesService {

    async getAll(query = {}) {
        const galaxies = await dbContext.Galaxies.find(query)
        return galaxies
    }

    async create(body) {
        const galaxies = await dbContext.Galaxies.create(body)
        return galaxies
    }

    async remove(id) {
        const original = await dbContext.Galaxies.findById(id)
        await original.remove()
        return `Exploded ${original.name}`
    }

}

export const galaxiesService = new GalaxiesService()
