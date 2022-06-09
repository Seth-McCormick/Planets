import { dbContext } from "../db/DbContext"

class StarsService {

    async getAll(query = {}) {
        const stars = await dbContext.Stars.find(query).populate('galaxy', 'name')
        return stars
    }

    async create(body) {
        const stars = await dbContext.Stars.create(body)
        return stars
    }

    async remove(id) {
        const original = await dbContext.Stars.findById(id)
        await original.remove()
        return `Collapsed ${original.name}`
    }
}

export const starsService = new StarsService()
