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

    const client = await Client.findOne({
        email: freelancerData.email,
    });
    //check in clinet schema as well later
    console.log(client, "client hereee");
    console.log(freelancer, "freelancer");

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
        isValid = await bcrypt.compare(
            freelancerData.password,
            client.password
        );
    }

    console.log(isValid, "isValid");
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

exports.addDescription = async (id, description) => {
    let freelancer = await Freelancer.findById(id);

    if (freelancer) {
        await Freelancer.findByIdAndUpdate(id, { description: description });
        return { message: "Description added for freelancer." };
    }

    let client = await Client.findById(id);

    if (client) {
        await Client.findByIdAndUpdate(id, { description: description });
        return { message: "Description added for client." };
    }

    throw new Error("User not found.");
};
exports.getUserProfile = async (id) => {
    try {
        const freelancer = await Freelancer.findById(id)
            .select("-password")
            .populate('recived.user')
            .populate("applied");
        if (freelancer) {
            return freelancer;
        }
        const client = await Client.findById(id).select("-password");
        if (client) {
            console.log(client, "Populated Client");
            return client;
        }
        throw new Error("User not found.");
    } catch (error) {
        throw new Error(
            error.message ||
                "An error occurred while fetching the user profile."
        );
    }
};
