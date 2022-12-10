const express = require("express");
const cors = require("cors");
const travelsRoute = require("./routes/travelsRoute.js").router;
const app = express();

app.use(express.json());
app.use(cors());

//ROTAS
app.use("/", travelsRoute);

app.listen(8080, () => {
  console.log("server is active on port 8080");
});
