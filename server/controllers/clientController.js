const router = require("express").Router();
const clientService = require("../services/clientService");

router.post("/register", async (req, res) => {
    try {
        const data = req.body;
        const { confirmPassword, ...clientData } = data.data;
        const client = await clientService.register(clientData);
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.get("/profile/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        const profile = await clientService.getClientById(id);
        console.log(profile);
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
        const clients = await clientService.getAll().lean();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching clients" });
    }
});

router.get("/all/:category", async (req, res) => {
    try {
        const category = req.params.category;
        console.log(category);
        const clients = await clientService.getAllCategory(category).lean();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching clients" });
    }
});
module.exports = router;
