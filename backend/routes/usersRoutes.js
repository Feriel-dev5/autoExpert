const mongoose = require("mongoose");
const express = require("express");

const { createuser, createinspecteur,createadmin,inscription, connexion} = require("../Controlers/client.controlers");
const router = express.Router();

router.get("/",(req,res)=>{
    return res.status(200).send({message : new Date()} )
})
router.post("/api/createuser", createuser);
router.post("/api/createinspecteur", createinspecteur);
router.post("/api/admin", createadmin);

router.post("/api/inscription", inscription);
router.post("/api/connexion", connexion);
module.exports = router;