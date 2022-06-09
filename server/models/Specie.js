import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const SpecieSchema = new Schema({

    name: { type: String, required: true },
    age: { type: Number, required: true },
    violent: { type: Boolean, default: true },
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true }


}, { timestamps: true, toJSON: { virtuals: true } })


SpecieSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: 'Galaxy',
    foreignField: '_id',
    justOne: true
})