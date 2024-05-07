import dotenv from "dotenv";
import { ConnectDB } from "./db/connect.js";
import app from './app.js'

ConnectDB().
    then(() => {
        app.listen(process.env.PORT, (error) => {
            if (error) {
                return console.log("App is not listening error", error);
            }

            console.log(`Server is running on PORT ${process.env.PORT}`);
        });
    })
    .catch((error) => {
    console.log("MongoDb connection error", error);
    })
