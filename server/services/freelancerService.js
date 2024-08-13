const Freelancer = require("../models/users/Freelancer");
const { getFreelancerToken } = require("../utils/jwt");
const { getErrors } = require("../utils/errors");

exports.register = async (freelancerData) => {
    const existingFreelancer = await Freelancer.findOne({ email: freelancerData.email });

    if (existingFreelancer) {
        throw new Error('User already exists');
    }

    const freelancer = await Freelancer.create(freelancerData);
    const freelancerToken = await getFreelancerToken(freelancer);

    return {
        _id: freelancer._id,
        accessToken: freelancerToken,
        name: freelancer.name,
        email: freelancer.email,
        title: freelancer.title,
    };
};


exports.getFreelancerProfile = async (id) => {
    return await Freelancer.findById(id)
        .select("-password")
        .populate("recived.user")
        .populate({
            path: "applied",
            populate: {
                path: "owner",
            },
        });
};

exports.getAll = () => Freelancer.find();

exports.getAllCategory = (category) => Freelancer.find({ industry: category });
