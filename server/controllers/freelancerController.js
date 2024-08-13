const router = require("express").Router();
const freelancerService = require("../services/freelancerService");
const PATH = require("../constants/paths");

router.post(PATH.FREELANCERS.REGISTER, async (req, res) => {
    try {
        const data = req.body;
        const { confirmPassword, ...freelancerData } = data.data;
        const freelancer = await freelancerService.register(freelancerData);
        res.status(200).json(freelancer);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred during freelancer registration",
        });
    }
});

router.get(PATH.FREELANCERS.GET_ONE, async (req, res) => {
    try {
        const id = req.params.id;
        const profile = await freelancerService.getFreelancerProfile(id);
        if (!profile) {
            return res.status(404).json({ error: "Freelancer not found." });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching freelancer profile.",
        });
    }
});

router.get(PATH.FREELANCERS.GET_ALL, async (req, res) => {
    try {
        const freelancers = await freelancerService.getAll().lean();
        res.status(200).json(freelancers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching freelancers" });
    }
});

router.get(PATH.FREELANCERS.GET_ALL_CATEGORY, async (req, res) => {
    try {
        const category = req.params.category;
        const clients = await freelancerService.getAllCategory(category).lean();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching freelancers" });
    }
});

module.exports = router;
