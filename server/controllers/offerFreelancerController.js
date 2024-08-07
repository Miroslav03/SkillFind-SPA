const router = require("express").Router();
const offerService = require("../services/offerService");

router.get("/all", async (req, res) => {
    try {
        const offers = await offerService.getAllFreelancer().lean();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: "Error dasdasd" });
    }
});

router.get("/all/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const offers = await offerService
            .getAllCategoryFreelancer(category)
            .lean();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching offers" });
    }
});

router.post("/create", async (req, res) => {
    try {
        const { id, data } = req.body;

        await offerService.createFreelancer(id, data);

        res.status(200).json({ status: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Error creating service" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const offerId = req.params.id;
        const offer = await offerService.getOneFreelancer(offerId);
        res.status(200).json(offer);
    } catch (error) {
        res.status(500).json({ error: "Error fetching offer!" });
    }
});

router.put("/edit/:id", async (req, res) => {
    try {
        const offerId = req.params.id;
        const data = req.body;
        const offer = await offerService.editFreelancer(offerId, data);
        res.status(200).json(offer);
    } catch (error) {
        res.status(500).json({ error: "Error edditing offer!" });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const offerId = req.params.id;
        await offerService.deleteFreelancer(offerId);
        res.status(200).json({ status: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Error creating service" });
    }
});

router.post("/send", async (req, res) => {
    try {
        const { userId, offerId, message } = req.body;
        await offerService.sendMessageFreelancer(
            userId,
            offerId,
            message.message
        );
        res.status(200).json({ status: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Error applying" });
    }
});

router.delete("/decline", async (req, res) => {
    try {
        const { userId, offerId } = req.body;
        console.log(req.body);
        await offerService.declineClinet(userId, offerId);
        res.status(200).json({ status: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Error applying" });
    }
});

module.exports = router;
