const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
