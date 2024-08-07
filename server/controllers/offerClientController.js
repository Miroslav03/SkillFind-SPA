const router = require("express").Router();
const offerService = require("../services/offerService");

router.get("/all", async (req, res) => {
    try {
        console.log('hereee');
        const offers = await offerService.getAllClients().lean();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: "Error dasdasd" });
    }
});

router.get("/all/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const offers = await offerService
            .getAllCategoryClients(category)
            .lean();
        res.status(200).json(offers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching offers" });
    }
});

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

router.delete('/delete/:id', async (req, res) => {
    try {
        const offerId = req.params.id;
        await offerService.deleteClient(offerId);
        res.status(200).json({ status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating service' });
    }
});

router.post('/apply', async (req, res) => {
    try {
        const { userId, offerId } = req.body;
        await offerService.applyFreelancer(userId, offerId);
        await offerService.updateAppliedOffersFreelancer(userId, offerId);
        res.status(200).json({ status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: 'Error applying' });
    }
})

router.delete('/decline', async (req, res) => {
    try {
        const { userId, offerId } = req.body;
        await offerService.declineFreelancer(userId, offerId);
        res.status(200).json({ status: 'Success' });
    } catch (error) {
        res.status(500).json({ error: 'Error applying' });
    }
})

module.exports = router;
