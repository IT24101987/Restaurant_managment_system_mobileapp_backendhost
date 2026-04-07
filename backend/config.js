const config = {
  mongodbURI: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET || "change-this-secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  corsOrigins: (process.env.CORS_ORIGIN || "").split(",").map(s => s.trim()).filter(Boolean),
  port: Number(process.env.PORT) || 3000
};

export default config;
