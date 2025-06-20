const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;
const allowedOrigin = "https://vesuvio-in.vercel.app/";
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api/restaurants", (req, res) => {
  const data = require("../data/restaurants/list");
  res.json(data);
});
app.get("/api/menu/:id", (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, "..", "data", `${id}.json`);
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) return res.status(404).json({ error: "Restaurant not found" });
    res.json(JSON.parse(data));
  });
});
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
