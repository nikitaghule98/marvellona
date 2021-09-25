const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 42,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    quantity: Number,
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
    },
    shipping: {
      type: String,
      enum: ["Yes", "No"],
    },
    color: {
      type: String,
      enum: [ "Black",
              "Red",
              "Pink",
              "Navy Blue",
              "Green",
              "Brown",
              "Silver",
              "White",
              "Sky Blue",
              "Pastel",
            ],
    },
    brand: {
      type: String,
      enum: [ "Iron-man",
              "Avenger",
              "Thor",
              "Captain America",
              "Captain Marvel",
              "Loki",
              "Groot",
              "Wonder Woman",
              "Hulk",
              "Doctor Strange",
              "Scarlet Witch",
              "Spider Man",
              "Vision",
              "Deadpool",
            ],
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
