import mongoose from 'mongoose'

const SendUsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },   
        email: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    },
    { timestamps: true },
)

export default mongoose.model('SendUs', SendUsSchema)
