const invalidateAccessToken = require("./invalidTokens");
const bcrypt = require("bcrypt");
const Freelancer = require("../models/users/Freelancer");
const { getFreelancerToken } = require("../utils/jwt");
const { getErrors } = require("../utils/errors");

exports.login = async (freelancerData) => {
    const freelancer = await Freelancer.findOne({
        email: freelancerData.email,
    });

    //check in clinet schema as well later

    if (!freelancer) {
        throw new Error("Email or password doesn't match");
    }

    const isValid = await bcrypt.compare(
        freelancerData.password,
        freelancer.password
    );

    if (!isValid) {
        throw new Error("Email or password doesn't match");
    }

    const freelancerToken = await getFreelancerToken(freelancer);

    return {
        _id: freelancer._id,
        accessToken: freelancerToken,
        name: freelancer.name,
        email: freelancer.email,
        title: freelancer.title,
    };
};

exports.logout = async (token) => {
    try {
        invalidateAccessToken(token);
    } catch (error) {
        console.error("Error during logout: ", error);
        throw new Error("Logout failed");
    }
};
