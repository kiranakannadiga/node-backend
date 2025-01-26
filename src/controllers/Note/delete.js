import { Note } from "../../models/note.model.js"
import ApiResponse from "../../utils/ApiResponse.js"

export const deleted = async(req, res) => {
    try {
        const { id } = req.params

        const result = await Note.deleteOne()
            // result.save()
        res.status(200).send(new ApiResponse(200, result, "deleted succesfully"))

    } catch (error) {
        console.log(error)
        res.status(500).send(new ApiResponse(500, error, "Error ocurred"))
    }
}