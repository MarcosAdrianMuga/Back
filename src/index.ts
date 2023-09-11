import express from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "./../.env" });
import postRoutes from "./posts/controller"

const app = express();
const PORT = process.env.PORT ?? 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Servidor running. PORT: ${PORT}`);
});