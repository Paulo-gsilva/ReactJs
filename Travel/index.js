import express from "express";
import cors from "cors";
import travelsRoute from "./routes/travelsRoute.js";
const app = express();

app.use(express.json());
app.use(cors());

//ROTAS
app.use("/", travelsRoute);

app.listen(3000, () => {
  console.log("server is active on port 3000");
});
