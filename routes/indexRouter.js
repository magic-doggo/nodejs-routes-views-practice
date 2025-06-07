// routes/index.js
const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("All indexes"));
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`index ID: ${indexId}`);
});

module.exports = indexRouter;
