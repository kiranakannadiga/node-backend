import { Note } from "../../models/note.model.js"
import ApiResponse from "../../utils/ApiResponse.js"

export const Read = async(req, res) => {
    try {
        const Allnotes = await Note.find()

        res.status(200).send(new ApiResponse(200, Allnotes, "Data Readed succesfully "))


    } catch (error) {
        console.log(error)
        res.status(500).send(new ApiResponse(500, error, "Error occured"))
    }
}