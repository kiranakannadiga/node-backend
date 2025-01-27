import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const updateNote = async(req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body;

        if (!title || !content) {
            res.status(400).send(new ApiResponse(400, null, "Required fields are missing"))
        }

        const result = await Note.create({
            title,
            content
        })
        result.save()
        res.status(201).send(new ApiResponse(201, result, "Updated Succesfully"))


    } catch (error) {
        console.log(error)
        res.status(500).send(new ApiResponse(500, error, "failed to updater"))
    }

}
export default updateNote;