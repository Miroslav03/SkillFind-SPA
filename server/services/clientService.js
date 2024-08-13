const Client = require("../models/users/Client");
const { getErrors } = require("../utils/errors");
const { getClientToken } = require("../utils/jwt");

exports.register = async (clientData) => {
    const existingClient = await Client.findOne({ email: clientData.email });

    if (existingClient) {
        throw new Error("User already exists");
    }

    const client = await Client.create(clientData);
    const clientToken = await getClientToken(client);

    return {
        _id: client._id,
        accessToken: clientToken,
        name: client.name,
        email: client.email,
        industry: client.industry,
    };
};
exports.getClientById = async (id) => {
    return await Client.findById(id)
        .select("-password")
        .populate("createdJobs");
};

exports.getAll = () => Client.find().populate("createdJobs");

exports.getAllCategory = (category) => Client.find({ industry: category });
