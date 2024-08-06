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

router.get("/:id", async (req, res) => {
    try {
        const offerId = req.params.id;

        const offer = await offerService.getOneClient(offerId);
        res.status(200).json(offer);
    } catch (error) {
        res.status(500).json({ error: "Error fetching offer!" });
    }
});

router.put("/edit/:id", async (req, res) => {
    try {
        const offerId = req.params.id;
        const data  = req.body;
        const offer = await offerService.editClient(offerId, data);
        res.status(200).json(offer);
    } catch (error) {
        res.status(500).json({ error: "Error edditing offer!" });
    }
});

module.exports = router;
