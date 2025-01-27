const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Test middleware pour vérifier le body
router.post('/register', authController.register);

module.exports = router;