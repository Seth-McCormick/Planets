import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema({

    name: { type: String, required: true },
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }

}, { timestamps: true, toJSON: { virtuals: true } })