const express = require("express");

const app = express();

app.use(express.static("./dist/quiz-app"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/quiz-app" })
);

app.listen(process.env.PORT || 8080);
