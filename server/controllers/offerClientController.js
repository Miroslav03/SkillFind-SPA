const router = require("express").Router();
const offerService = require("../services/offerService");
router.post("/create", async (req, res) => {
    try {
        const { id, data } = req.body;
        console.log(id, data);
        await offerService.createClient(id, data);

        res.status(200).json({ status: "Success" });
    } catch (error) {
        res.status(500).json({ error: "Error creating service" });
    }
});

module.exports = router;
