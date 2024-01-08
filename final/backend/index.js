const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

port = 5000;
// const poetRouter = require("./routes/poetRoute");
// app.use("/api/poet", poetRouter);

mongoose
  .connect("mongodb://0.0.0.0/poetryDB")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch(() => {
    console.log("connection error");
  });

app.listen(port, (req, res) => {
  console.log("Server is running on port");
});
