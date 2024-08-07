const router = require("express").Router();
const offerService = require("../services/offerService");

router.post("/create", async (req, res) => {
    try {
        const { id, data } = req.body;

        await offerService.createFreelancer(id, data);

        res.status(200).json({ status: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Error creating service" });
    }
});

router.get("/all", async (req, res) => {
    try {
        const offers = await offerService.getAllFreelancer().lean();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching offers" });
    }
});

router.get("/all/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const offers = await offerService.getAllCategoryFreelancer(category).lean();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching offers" });
    }
});

module.exports = router;
