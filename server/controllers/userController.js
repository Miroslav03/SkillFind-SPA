const router = require("express").Router();
const userService = require("../services/userService");

router.post("/login", async (req, res) => {
    try {
        const data = req.body.data;
        const freelancer = await userService.login(data);

        res.status(200).json(freelancer);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

router.post("/logout", async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ error: "Token is required" });
        }

        await userService.logout(token);

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred during logout" });
    }
});

router.get("/profile/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const profile = await userService.getUserProfile(id);
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

router.post("/description/add/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { description } = req.body;

        const result = await userService.addDescription(id, description);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred during adding description",
        });
    }
});
router.put("/description/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { description } = req.body;

    try {
        const result = await userService.editDescription(id, description);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});
module.exports = router;
