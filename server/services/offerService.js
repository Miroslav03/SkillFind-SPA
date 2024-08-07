const FreelancerOffer = require("../models/offers/FreelancerOffer");
const ClientOffer = require("../models/offers/ClientOffer");
const Client = require("../models/users/Client");
const Freelancer = require("../models/users/Freelancer");
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
    ClientOffer.findById(offerId).populate("owner").populate("applied");

exports.deleteClient = (offerId) => ClientOffer.findByIdAndDelete(offerId);

exports.editClient = (offerId, newData) =>
    ClientOffer.findByIdAndUpdate(offerId, newData);

exports.getOneFreelancer = (offerId) =>
    FreelancerOffer.findById(offerId).populate("owner");

exports.deleteFreelancer = (offerId) =>
    FreelancerOffer.findByIdAndDelete(offerId);

exports.editFreelancer = (offerId, newData) =>
    FreelancerOffer.findByIdAndUpdate(offerId, newData);

exports.getAllFreelancer = () => FreelancerOffer.find().populate("owner");

exports.getAllCategoryFreelancer = (category) =>
    FreelancerOffer.find({ industry: category });

exports.getAllClients = () => ClientOffer.find().populate("owner");

exports.getAllCategoryClients = (category) =>
    ClientOffer.find({ industry: category });

exports.applyFreelancer = (idUser, idOffer) => {
    console.log(idUser);
    console.log(idOffer);
    const updatedOffer = ClientOffer.findByIdAndUpdate(idOffer, {
        $push: { applied: idUser },
    });

    if (!updatedOffer) {
        throw new Error("Offer not found or already applied.");
    }

    return updatedOffer;
};

exports.declineFreelancer = (idUser, idOffer) => {
    const updatedOffer = ClientOffer.findByIdAndUpdate(idOffer, {
        $pull: { applied: idUser },
    });

    if (!updatedOffer) {
        throw new Error("Offer not found or already applied.");
    }

    return updatedOffer;
};

exports.sendMessageFreelancer = async (userId, offerId, data) => {
    const offer = await FreelancerOffer.findById(offerId);
    if (!offer) {
        throw new Error("Offer not found");
    }
    const creatorId = offer.owner.toString();

    const updatedFreelancer = await Freelancer.findByIdAndUpdate(
        creatorId,
        { $push: { recived: { user: userId, description: data } } },
    );

    if (!updatedFreelancer) {
        throw new Error("Client not found or update failed");
    }

    return { message: "Message sent successfully" };
};
