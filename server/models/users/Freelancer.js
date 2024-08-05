const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const freelancerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    hourRate: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    applied: [
        {
            type: mongoose.Types.ObjectId,
            ref: "ClientOffer",
        },
    ],
    recived: [
        {
            type: String,
        },
    ],
});

freelancerSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
});

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

module.exports = Freelancer;
