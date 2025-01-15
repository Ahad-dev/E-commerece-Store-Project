const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  FavouriteProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  address: { type: String },
  phoneNumber: { type: String },
  registrationDate: { type: Date, default: Date.now },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  verificationTokenExpiresAt: { type: Date },
  passwordResetToken: { type: String },
  passwordResetTokenExpiresAt: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
