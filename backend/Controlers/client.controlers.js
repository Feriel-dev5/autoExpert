const mongoose = require("mongoose");
const express = require("express");
const { Clientcr, Inspecteurschm } = require("../models/models");
const app = express();

exports.createuser = async (req, res) => {
    const { nom, email, motDePasse, telephone, adresse } = req.body;
    try {
        const newUser = new Clientcr({ nom, email, motDePasse, telephone, adresse });
        await newUser.save();
        res.status(201).json({ message: "utulisateur crée", newUser });
    } catch (error) {
        res.status(500).json({ message: "error lors de la cretaion utilisateur", error: { message: error.message } })
    }
}


exports.createinspecteur = async (req,res)=>{
    try {
        const { nom, email, motDePasse, specialite } = req.body
        const newadmin = new Inspecteurschm({nom, email, motDePasse, specialite});
        await newadmin.save();
         res.status(201).json({ message: "admincrée",newadmin });
         
        } catch (error) {
        res.status(500).json({ message: "error lors de la cretaion admin", error: { message: error.message } });
    }
}