//import mongoose
import mongoose from "mongoose";

//create a schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

//export it 
export const Note = mongoose.model("Note", noteSchema);