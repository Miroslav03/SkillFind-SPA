const mongoose = require("mongoose");

const freelancerOfferSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    industry: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "Freelancer",
    },
    signed: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Client",
        },
    ],
});

const FreelancerOffer = mongoose.model(
    "FreelancerOffer",
    freelancerOfferSchema
);

module.exports = FreelancerOffer;
