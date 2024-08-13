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

exports.getClientToken = (client) => {
  return jwt.sign(
    {
      id: client._id,
      name: client.name,
      industry: client.industry,
      email: client.email,
    },
    SECRET
  );
};
