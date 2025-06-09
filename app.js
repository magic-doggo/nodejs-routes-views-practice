const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const aboutRouter = require("./routes/aboutRouter");
const { link } = require("node:fs");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const { links, footerItems, users } = require("./db");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/about", aboutRouter)
app.use("/", indexRouter);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});


// module.exports =  {links, users} ;
