import ApiResponse from "../../utils/ApiResponse.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { user } from "../../models/user.model.js";
const loginUser = async(req, res) => {
    try {
        const { email, posswords } = req.body;
        if (!email || !posswords) {
            return res.status(400).send(new ApiResponse(400, null, "Fields are empty"));
        }

        const existingUser = await user.findOne({
            email
        })

        if (!existingUser) {
            return res.status(404).send(new ApiResponse(404, null, "User with the provided credential does not exist"));
        }

        const verified = await bcrypt.compare(posswords, existingUser.posswords)
        if (!verified) {
            return res.status(404).send(new ApiResponse(404, null, "Invalid credential"));
        }
        const token = jwt.sign({
            name: existingUser.name,
            email: existingUser.email,
            _id: existingUser._id
        }, process.env.TOKEN_SECRET, { expiresIn: "1d" })

        res.status(200).send(new ApiResponse(200, token, "login successful"))
    } catch (error) {
        console.log(error);
        res.status(500).send(new ApiResponse(500, error, "Failed to Login."));
    }
};

export default loginUser;