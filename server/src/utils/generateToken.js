import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
    return jwt.sign(
        //payload 
        {
            email: payload.email,
            password: payload.passord
        },
        //secret key
        payload.secretKey,
        {
            expiresIn: payload.expiryTime
        }
    )
}