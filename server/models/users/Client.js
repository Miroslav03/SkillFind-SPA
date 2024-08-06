const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
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
    employees: {
        type: Number,
        required: true,
    },
    createdJobs: [
        {
            type: mongoose.Types.ObjectId,
            ref: "ClientOffer",
        },
    ],
});

clientSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
