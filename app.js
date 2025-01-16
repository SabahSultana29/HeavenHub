//Basic Set up of the MERN Stack Project
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "";
async function main() {
  await mongoose.connect("mongodb://localhost:27017/heavenhub");
}
main()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hi this is root page ");
});
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
