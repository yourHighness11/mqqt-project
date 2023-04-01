require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const express = require("express");
const routes = require("./routes/mqttroutes");
const app = express();
dbConnect();
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
  console.log("connected to server");
});
