const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    telephone: { type: String },
    adresse: { type: String },
    dateInscription: { type: Date, default: Date.now },
  },
  { collection: "clients" }
);


const inspecteurSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    specialite: { type: String },
    disponibilite: { type: Boolean, default: true },
  },
  { collection: "inspecteurs" }
);


const inspectionSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    vehicule: {
      marque: { type: String, required: true },
      modele: { type: String, required: true },
      immatriculation: { type: String, required: true },
      annee: { type: Number, required: true },
    },
    description: { type: String },
    status: {
      type: String,
      enum: ["en_attente", "approuvée", "assignée", "terminée", "rejetée"],
      default: "en_attente"
    },
    dateDemande: { type: Date, default: Date.now },
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
    inspecteurId: { type: mongoose.Schema.Types.ObjectId, ref: "Inspecteur" },
    dateInspection: { type: Date },
    rapport: { type: String }
  },
  { collection: "inspections" }
);


module.exports = {
  Clientcr: mongoose.model("Client", clientSchema),
  Inspecteurschm: mongoose.model("Inspecteur", inspecteurSchema),
  Inspection: mongoose.model("Inspection", inspectionSchema),
};
