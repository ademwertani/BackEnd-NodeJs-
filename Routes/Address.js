const express = require("express");
const router = express.Router();
const Address = require("../models/Address");
//const Address = require("../Config/Connect");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcryptjs = require("bcryptjs");

router.post("/AddAdress", async (req, res) => {
  data = req.body;
  usr = new Address(data);
  usr.image = filename;
  usr
    .save()
    .then((savedAddress) => {
      res.status(200).send(savedAddress);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  filename = "";
});
router.get("/getallAddr", (req, res) => {
  Address.find()
    .then((address) => {
      res.status(200).send(address);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
