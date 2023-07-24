import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);
