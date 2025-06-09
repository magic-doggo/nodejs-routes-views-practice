const { Router } = require("express");
const { links, users, footerItems } = require('../db.js');
const aboutRouter = Router();

aboutRouter.get("/", (req, res) => {
  res.render("about", { links: links, users: users, footerItems: footerItems });
});

module.exports = aboutRouter;
