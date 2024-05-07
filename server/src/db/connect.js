import mongoose from 'mongoose';
import { DB_NAME } from '../constant';
const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(connectionInstance);
    } catch (error) {
        console.log("Error while connecting DB:", error);
        process.exit(1);
    }
}

export { ConnectDB };