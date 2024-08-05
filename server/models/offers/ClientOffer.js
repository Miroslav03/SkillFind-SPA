const mongoose = require("mongoose");

const clientOfferSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Client",
    },
    applied: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Freelancer",
        },
    ],
});

const ClientOffer = mongoose.model("ClientOffer", clientOfferSchema);

module.exports = ClientOffer;
