const Client = require("../models/users/Client");
const { getErrors } = require("../utils/errors");
const { getClientToken } = require("../utils/jwt");

exports.register = async (clientData) => {
    try {
        console.log(clientData);
        const client = await Client.create(clientData);
        console.log(client, "client");
        const clientToken = await getClientToken(client);

        return {
            _id: client._id,
            accessToken: clientToken,
            name: client.name,
            email: client.email,
            industry: client.industry,
        };
    } catch (error) {
        throw new Error(error);
    }
};
