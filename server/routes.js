const router = require("express").Router();
const freelancerController = require("./controllers/freelancerController");
const userController = require("./controllers/userController");
const clientController = require("./controllers/clientController");

router.use("/auth/freelancer", freelancerController);
router.use("/auth/client", clientController);
router.use("/auth/user", userController);

module.exports = router;
