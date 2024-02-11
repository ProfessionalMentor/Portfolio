import mongoose from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  problem: {
    type: string,
    required: true,
    unique: true,
  },
});

//Export the model
module.exports = mongoose.model("User", userSchema);
