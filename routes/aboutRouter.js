// routes/aboutRouter.js
const { Router } = require("express");

const aboutRouter = Router();

aboutRouter.get("/", (req, res) => res.send("About page"));

module.exports = aboutRouter;
