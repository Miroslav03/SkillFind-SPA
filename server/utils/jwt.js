const jwt = require("../lib/jwt");
const { SECRET } = require("../environment/variables");

exports.getFreelancerToken = (freelancer) => {
  return jwt.sign(
    {
      id: freelancer._id,
      name: freelancer.name,
      title: freelancer.title,
      email: freelancer.email,
    },
    SECRET
  );
};
