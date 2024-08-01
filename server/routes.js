const router = require("express").Router();
const freelancerController = require("./controllers/freelancerController");

router.use("/auth/freelancer", freelancerController);

module.exports = router;
