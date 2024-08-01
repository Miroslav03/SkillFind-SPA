const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const freelancerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
	minLength: [3, 'Username must be at least 3 characters']
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  skills: {
    type: String,
    required: true,
    unique: true,
  },
  hourRate: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
	required: [true, 'Password must be filled!'],
	minLength: [6, 'Password must be at least 6 characters long!']
  },
});

freelancerSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 12);
  this.password = hash;
});

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

module.exports = Freelancer;
