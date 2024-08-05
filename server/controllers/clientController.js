const router = require("express").Router();
const clientService = require("../services/clientService");

router.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const { confirmPassword, ...clientData } = data.data;
        const client = await clientService.register(clientData);
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({error});
    }
});

module.exports = router;
