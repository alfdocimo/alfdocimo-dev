/* eslint-disable */
import express from "express";
import path from "path";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
