import { generateToken } from "../utils/generateToken";
import asyncHandler from "../utils/asyncHandler";

const userRegister = asyncHandler(async (req, res) => {
    const [email, fullName, password, phoneNumber, state] = req.body;

    
})







export {
    userRegister
}