const mongoose = require("mongoose");
const express = require("express");

const { createuser, createinspecteur } = require("../Controlers/client.controlers");
const router = express.Router();


router.post("/api/createuser", createuser);
router.post("/api/admin", createinspecteur);


module.exports = router;