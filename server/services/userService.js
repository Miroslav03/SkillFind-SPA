const invalidateAccessToken = require("./invalidTokens");
const bcrypt = require("bcrypt");
const Freelancer = require("../models/users/Freelancer");
const { getFreelancerToken, getClientToken } = require("../utils/jwt");
const { getErrors } = require("../utils/errors");
const Client = require("../models/users/Client");

exports.login = async (freelancerData) => {
    const freelancer = await Freelancer.findOne({
        email: freelancerData.email,
    });

    console.log(freelancer, "freelancer");
    const client = await Client.findOne({
        email: freelancerData.email,
    });
    //check in clinet schema as well later
    console.log(client, "client");

    if (!freelancer && !client) {
        throw new Error("Email or password doesn't match");
    }

    let isValid = null;

    if (freelancer) {
        isValid = await bcrypt.compare(
            freelancerData.password,
            freelancer.password
        );
    } else if (client) {
        console.log('here');
        isValid = await bcrypt.compare(
            freelancerData.password,
            client.password
        );
    }

    console.log(isValid,'isValid');
    if (!isValid) {
        throw new Error("Email or password doesn't match");
    }

    if (freelancer) {
        const freelancerToken = await getFreelancerToken(freelancer);
        console.log(freelancerToken);
        return {
            _id: freelancer._id,
            accessToken: freelancerToken,
            name: freelancer.name,
            email: freelancer.email,
            title: freelancer.title,
        };
    } else if (client) {
        const clientToken = await getClientToken(client);
        console.log(clientToken);

        return {
            _id: client._id,
            accessToken: clientToken,
            name: client.name,
            email: client.email,
            title: client.title,
        };
    }
};

exports.logout = async (token) => {
    try {
        invalidateAccessToken(token);
    } catch (error) {
        console.error("Error during logout: ", error);
        throw new Error("Logout failed");
    }
};
