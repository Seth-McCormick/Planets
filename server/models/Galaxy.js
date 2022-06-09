import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const GalaxySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: 'It is Unknown' },
    age: { type: Number, required: true, max: 6000 },
    explored: { type: Boolean, default: false },

}, { timestamps: true, toJSON: { virtuals: true } })