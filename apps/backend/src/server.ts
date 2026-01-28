import dotenv from "dotenv";
import {app} from "./app.js";
import {connectDB} from "./infrastructure/database/db.js";

//ENV Configuration
dotenv.config();

//Start Server
const PORT = process.env.PORT || 5000;
async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
}

startServer()