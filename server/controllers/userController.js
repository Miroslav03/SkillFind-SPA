const router = require("express").Router();
const userService = require("../services/userService");

router.post("/login", async (req, res) => {
    try {
        const data = req.body.data;
        const freelancer = await userService.login(data);

        res.status(200).json(freelancer);
    } catch (error) {
        console.log(error.message, "Thisis the error");
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

module.exports = router;
