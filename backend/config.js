const config = {
  mongodbURI: process.env.MONGODB_URI || "mongodb+srv://user:12345678m@database.tesxjt8.mongodb.net/restaurant?retryWrites=true&w=majority&appName=database",
  jwtSecret: process.env.JWT_SECRET || "gf-restaurant-s3cur3-t0k3n-key-2026",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  corsOrigins: (process.env.CORS_ORIGIN || "http://localhost:3000,http://localhost:5173,http://localhost:5175").split(",").map(s => s.trim()).filter(Boolean),
  port: Number(process.env.PORT) || 3000
};

export default config;
