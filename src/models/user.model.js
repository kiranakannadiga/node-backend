import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    posswords: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    }

})
export const user = mongoose.model('user', userSchema);