const router = require("express").Router();
const freelancerService = require("../services/freelancerService");

router.post("/register", async (req, res) => {
  try {
    const freelancerData = req.body;
    const freelancer = await freelancerService.register(freelancerData);
    res.status(200).json(freelancer);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred during user registration" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const freelancer = await freelancerService.login({ email, password });

    if (!freelancer) {
      res.status(401).json({ error: "Email or password is invalid" });
    }

    res.status(200).json(freelancer);
  } catch (error) {
    res.status(500).json({ error: "An error occurred during user login" });
  }
});

module.exports = router;
