const express = require('express');
const router = express.Router();
const { inscrireUtilisateur } = require('../controllers/userController');

router.post('/register', inscrireUtilisateur);

module.exports = router;
