const router = require("express").Router();
const freelancerService = require("../services/freelancerService");

router.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const { confirmPassword, ...freelancerData } = data.data;
        const freelancer = await freelancerService.register(freelancerData);
        res.status(200).json(freelancer);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred during user registration",
        });
    }
});

module.exports = router;
