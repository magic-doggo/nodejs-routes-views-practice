const { Router } = require("express");
const { links, users, footerItems } = require('../db.js');
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, users: users, footerItems: footerItems});
});

indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`index ID: ${indexId}`);
});

module.exports = indexRouter;
