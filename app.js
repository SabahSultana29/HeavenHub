//Basic Set up of the MERN Stack Project
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listings = require("./models/listings");
const path = require("path");

const MONGO_URL = "mongodb://localhost:27017/heavenhub";
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

//Creating index route using get method

app.get("/listings", async (req, res) => {
  const allListings = await Listings.find({});
  res.render("listings/index", { allListings });
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.listen(8080, () => {
  console.log("server is running on port 8080");
});
