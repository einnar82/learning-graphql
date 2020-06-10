export default {
  database: {
    database: process.env.DB_NAME || "Example",
    username: process.env.DB_USERNAME || "user",
    password: process.env.DB_PASSWORD || "Passw0rd",
    host: process.env.DB_HOST || "mongodb://localhost:27017",
  },
};
