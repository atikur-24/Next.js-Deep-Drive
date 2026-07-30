import mongoose, { Schema } from "mongoose";

const amenitySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  instructions: {
    required: true,
    type: String,
  },
  hours: {
    required: false,
    type: String,
  },
});

export const amenityModel = mongoose.models.amenities ?? mongoose.model("amenities", amenitySchema);
