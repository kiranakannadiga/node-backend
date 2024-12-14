import { Note } from "../../models/note.model.js";
import ApiResponse from "../../utils/ApiResponse.js";

const createNote = async(req, res) => {
    try {
        const { title, content } = req.body;

        //check
        if (!title || !content) {
            return res.status(400).send(new ApiResponse(400, null, "Required fields missing."));
        }

        const createnote = await Note.create({
            title,
            content
        });

        res.status(201).send(new ApiResponse(201, createnote, "Note created successfully!"))

    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(500, error, "Failed to create note."))

    }
}

export default createNote;