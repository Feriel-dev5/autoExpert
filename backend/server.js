const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const { middleware1 } = require("./middleware/middleware");
const router = require("./routes/usersRoutes");
const app = express();
const origin = [
  "http://localhost:5173",
  "https://localhost:5173",
];
app.use(cors({ credentials: true, origin }));

app.use(express.json());
const Port = 3000;
const dBConnect = "mongodb://localhost:27017/expertiseAutoDb";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(middleware1)
app.use(router);

(async () => {
  try {
    await mongoose.connect(dBConnect, options);
    console.log("Connecté à MongoDB");

    app.listen(Port, '0.0.0.0', () => {
      console.log(`Votre serveur est disponible sur http://localhost:${Port}`);
    });
  } catch (error) {
    console.log("Erreur de connexion à la base de données :", error);
  }
})();