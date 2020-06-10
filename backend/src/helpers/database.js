import mongoose from "mongoose";
import config from "../config";

const databaseURL = config.database.host;
mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const initializeDB = () => {
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Listening from DB");
  });
};

export default initializeDB;
