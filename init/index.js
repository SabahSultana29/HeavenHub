const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listings.js");

const MONGO_URL = "mongodb://localhost:27017/heavenhub";
async function main() {
  await mongoose.connect("mongodb://localhost:27017/heavenhub");
}
main()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};
initDB();
//working well as data is initialized
