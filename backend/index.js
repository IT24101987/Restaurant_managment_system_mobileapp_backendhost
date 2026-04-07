import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

if (!process.env.MONGODB_URI) {
  process.env.MONGODB_URI = "mongodb+srv://user:12345678m@database.tesxjt8.mongodb.net/restaurant?retryWrites=true&w=majority&appName=database";
}

const { default: app } = await import("./app.js");
const { default: config } = await import("./config.js");

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
