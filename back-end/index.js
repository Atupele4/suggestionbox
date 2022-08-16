import express from "express";
import mongoose from "mongoose";
import storyboard from "./storyboard.js";
import Cors from "cors";

const app = express();
app.use(express.json());
app.use(Cors());
const port = 8001;

app.get("/", (req, res) => {
  res.send("Hello World! from nodemon");
});

app.post("/post/create", (req, res) => {
  const _storyboard = req.body;
  storyboard.create(_storyboard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/post/allposts", (req, res) => {
  storyboard.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
