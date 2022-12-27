import express from "express";
import cors from "cors";
import router from "./routes/travelsRoute.js";
const app = express();

app.use(express.json());
app.use(cors());

//ROTAS
app.use("/", router);

app.listen(8080, () => {
  console.log("server is active on port 8080");
});
