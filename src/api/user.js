import axios from "axios";
const registeruser = async(data) => {
    try {
        const response = await axios.post("http://localhost:4000/api/vi/users/register", data)
        return response.data
    } catch (err) {
        console.log(err);
    }
}
export default registeruser;