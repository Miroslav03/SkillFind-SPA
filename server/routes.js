const router = require("express").Router();

const freelancerController = require("./controllers/freelancerController");
const userController = require("./controllers/userController");
const clientController = require("./controllers/clientController");
const offerFreelancerController = require("./controllers/offerFreelancerController");
const offerClientController = require("./controllers/offerClientController");

router.use("/auth/freelancer", freelancerController);
router.use("/auth/client", clientController);
router.use("/auth/user", userController);
router.use("/offer/freelancer", offerFreelancerController);
router.use("/offer/client", offerClientController);

module.exports = router;
