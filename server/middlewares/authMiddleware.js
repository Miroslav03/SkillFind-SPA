const jwt = require("../lib/jwt");
const { SECRET } = require("../environment/variables");
const ClientOffer = require("../models/offers/ClientOffer");
const FreelancerOffer = require("../models/offers/FreelancerOffer");

exports.auth = async (req, res, next) => {
    const token = req.headers["x-authorization"];

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    const parsedToken = JSON.parse(token);
    const accessToken = parsedToken.accessToken;

    try {
        jwt.verify(accessToken, SECRET);
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
};

exports.isFreelancer = async (req, res, next) => {
    const token = req.headers["x-authorization"];

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    const parsedToken = JSON.parse(token);
    const accessToken = parsedToken.accessToken;

    try {
        const decoded = await jwt.verify(accessToken, SECRET);

        if (decoded.title) {
            return next();
        } else {
            return res.status(403).json({ message: "Unauthorized access" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

exports.isClient = async (req, res, next) => {
    const token = req.headers["x-authorization"];

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    const parsedToken = JSON.parse(token);
    const accessToken = parsedToken.accessToken;

    try {
        const decoded = await jwt.verify(accessToken, SECRET);

        if (decoded.industry) {
            return next();
        } else {
            return res.status(403).json({ message: "Unauthorized access" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

exports.isClientOfferOwner = async (req, res, next) => {
    const token = req.headers["x-authorization"];

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }
    const parsedToken = JSON.parse(token);
    const accessToken = parsedToken.accessToken;
    try {
        const decoded = await jwt.verify(accessToken, SECRET);
        const userId = decoded.id;
        const offerId = req.params.id;

        const offer = await ClientOffer.findById(offerId);

        if (offer.owner.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

exports.isFreelancerOfferOwner = async (req, res, next) => {
    const token = req.headers["x-authorization"];

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }
    const parsedToken = JSON.parse(token);
    const accessToken = parsedToken.accessToken;
    try {
        const decoded = await jwt.verify(accessToken, SECRET);
        const userId = decoded.id;
        const offerId = req.params.id;

        const offer = await FreelancerOffer.findById(offerId);

        if (offer.owner.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized access" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
