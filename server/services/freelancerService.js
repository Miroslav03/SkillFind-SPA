const Freelancer = require("../models/users/Freelancer");
const bcrypt = require("bcrypt");
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

exports.login = async (freelancerData) => {
  try {
    const freelancer = await Freelancer.findOne({
      email: freelancerData.email,
    });

    if (!freelancer) {
      return null;
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
  } catch (error) {
    getErrors(error);
  }
};
