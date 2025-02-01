const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const listingSchema = new Scheme({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: Number,
  image: {
    type: String,
    default:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhotel-villa%3Fpage%3D4&psig=AOvVaw1_uwBNwblNvyppJdyu4W1B&ust=1737125631553000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNifo7S_-ooDFQAAAAAdAAAAABAE",
    set: (v) =>
      v === ""
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fhotel-villa%3Fpage%3D4&psig=AOvVaw1_uwBNwblNvyppJdyu4W1B&ust=1737125631553000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNifo7S_-ooDFQAAAAAdAAAAABAE"
        : v,
  },
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
