import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy';
import { MoonSchema } from '../models/Moon';
import { PlanetSchema } from '../models/Planet';
import { SpecieSchema } from '../models/Specie';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxies = mongoose.model('Galaxy', GalaxySchema)

  Stars = mongoose.model('Star', StarSchema)

  Planets = mongoose.model('Planet', PlanetSchema)

  Moons = mongoose.model('Moon', MoonSchema)

  Species = mongoose.model('Specie', SpecieSchema)
}

export const dbContext = new DbContext()
