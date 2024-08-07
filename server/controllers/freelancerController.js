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

router.get("/profile/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const profile = await freelancerService.getFreelancerProfile(id);
        if (!profile) {
            return res.status(404).json({ error: "User not found." });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching user profile.",
        });
    }
});

router.get("/all", async (req, res) => {
    try {
        const freelancers = await freelancerService.getAll().lean();
        res.status(200).json(freelancers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching freelancers" });
    }
});

router.get("/all/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const clients = await freelancerService.getAllCategory(category).lean();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching clients" });
    }
});

module.exports = router;
