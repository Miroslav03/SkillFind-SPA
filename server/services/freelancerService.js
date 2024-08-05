const Freelancer = require("../models/users/Freelancer");
const { getFreelancerToken } = require("../utils/jwt");
const { getErrors } = require("../utils/errors");

exports.register = async (freelancerData) => {
    try {
        const freelancer = await Freelancer.create(freelancerData);
        const freelancerToken = await getFreelancerToken(freelancer);

        return {
            _id: freelancer._id,
            accessToken: freelancerToken,
            name: freelancer.name,
            email: freelancer.email,
            title: freelancer.title,
        };
    } catch (error) {
        getErrors(error);
    }
};

exports.getFreelancerProfile = async (id) => {
    return await Freelancer.findById(id).select("-password");
};
