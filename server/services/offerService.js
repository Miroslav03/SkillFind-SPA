const FreelancerOffer = require("../models/offers/FreelancerOffer");
const ClientOffer = require("../models/offers/ClientOffer");
const Client = require("../models/users/Client");
exports.createFreelancer = async (id, data) => {
    return await FreelancerOffer.create({
        owner: id,
        ...data,
    });
};

exports.createClient = async (id, data) => {
    const clientOffer = await ClientOffer.create({
        owner: id,
        ...data,
    });

    await Client.findByIdAndUpdate(
        id,
        { $push: { createdJobs: clientOffer._id } },
        { new: true }
    );

    return clientOffer;
};

exports.getOneClient = (offerId) =>
    ClientOffer.findById(offerId).populate("owner");

exports.deleteClient = (offerId) => ClientOffer.findByIdAndDelete(offerId);

exports.editClient = (offerId, newData) =>
    ClientOffer.findByIdAndUpdate(offerId, newData);

exports.getAllFreelancer = () => FreelancerOffer.find().populate('owner');

exports.getAllCategoryFreelancer = (category) => FreelancerOffer.find({ industry: category });
