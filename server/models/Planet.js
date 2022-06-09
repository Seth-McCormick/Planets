import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({

    name: { type: String, required: true },
    habitable: { type: Boolean, default: false },
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }

}, { timestamps: true, toJSON: { virtuals: true } })