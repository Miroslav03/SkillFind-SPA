const router = require("express").Router();
const freelancerController = require("./controllers/freelancerController");
const userController = require("./controllers/userController");

router.use("/auth/freelancer", freelancerController);
router.use("/auth/user", userController);

module.exports = router;
