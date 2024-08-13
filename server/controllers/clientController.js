const router = require("express").Router();
const clientService = require("../services/clientService");
const PATH = require("../constants/paths");

router.post(PATH.CLIENTS.REGISTER, async (req, res) => {
    try {
        const data = req.body;
        const { confirmPassword, ...clientData } = data.data;
        const client = await clientService.register(clientData);
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.get(PATH.CLIENTS.GET_ONE, async (req, res) => {
    try {
        const id = req.params.id;
        const profile = await clientService.getClientById(id);
        if (!profile) {
            return res.status(404).json({ error: "Client not found." });
        }

        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching client profile.",
        });
    }
});

router.get(PATH.CLIENTS.GET_ALL, async (req, res) => {
    try {
        const clients = await clientService.getAll().lean();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching clients" });
    }
});

router.get(PATH.CLIENTS.GET_ALL_CATEGORY, async (req, res) => {
    try {
        const category = req.params.category;
        const clients = await clientService.getAllCategory(category).lean();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching clients" });
    }
});
module.exports = router;
