import { user } from "../../models/user.model.js";
import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt";

const registeruser = async(req, res) => {
    try {
        const { name, email, posswords } = req.body;
        if (!name || !email || !posswords) {
            return res.status(400).send(new ApiResponse(400, null, "required field missing"))
        }
        const hashed = await bcrypt.hash(posswords, 10);
        const result = await user.create({
            name,
            email,
            posswords: hashed,
        })
        res.status(201).send(new ApiResponse(200, result, "user account rigisterd succesfully"))
    } catch (error) {
        console.log(error)
        res.status(500).send(new ApiResponse(500, error, "Failed to register user."))
    }
}
export default registeruser;