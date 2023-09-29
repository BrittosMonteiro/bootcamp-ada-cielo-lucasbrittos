import express from "express";
import cors from "cors";
import jsonServer from "json-server";

const app = express();
const port = 3001;

app.use(cors());
app.use("/transactions", jsonServer.router("data.json"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
