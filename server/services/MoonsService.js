import { dbContext } from "../db/DbContext"

class MoonsService {

    async getAll(query = {}) {
        const moons = dbContext.Moons.find(query).populate('galaxy', 'name')
        return moons
    }

    async create(body) {
        const moons = await dbContext.Moons.create(body)
        return moons
    }

    async remove(id) {
        const original = await dbContext.Moons.findById(id)
        await original.remove()
        return `Disappeared ${original.name}`
    }

}

export const moonsService = new MoonsService()
