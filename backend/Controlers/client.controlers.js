const bcrypt = require("bcrypt");
const { Clientcr, Inspecteurschm, Admin } = require("../models/models");


const createuser = async (req, res) => {
  try {
    const user = new Clientcr(req.body);
    await user.save();
    res.status(201).json({ message: "Utilisateur créé avec succès", user });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error: error.message });
  }
};
const createinspecteur = async (req, res) => {
  try {
    const inspecteur = new Inspecteurschm(req.body);
    await inspecteur.save();
    res.status(201).json({ message: "Inspecteur créé avec succès", inspecteur });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'inspecteur", error: error.message });
  }
};

const createadmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json({ message: "Administrateur créé avec succès", admin });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de l'administrateur", error: error.message });
  }
};

const inscription = async (req, res) => {
  const { nom, email, motDePasse, telephone, adresse } = req.body;

  try {
    const existingClient = await Clientcr.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const nouveauClient = new Clientcr({
      nom,
      email,
      motDePasse: hashedPassword,
      telephone,
      adresse,
    });

    await nouveauClient.save();

    res.status(201).json({ message: "Inscription réussie", client: nouveauClient });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
const connexion = async (req, res) => {
  const { email, motDePasse } = req.body;

  try {
    const client = await Clientcr.findOne({ email });
    if (!client) {
      return res.status(404).json({ message: "Client non trouvé" });
    }

    const motDePasseValide = await bcrypt.compare(motDePasse, client.motDePasse);
    if (!motDePasseValide) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    res.status(200).json({ message: "Connexion réussie", client });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
module.exports = {createuser,createinspecteur,createadmin,inscription,connexion};
