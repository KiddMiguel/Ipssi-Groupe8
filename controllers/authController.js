const User = require('../models/authModel');

const authController = {
    register: async (req, res) => {
        try {
            console.log('Request body:', req.body); 

            const { username, email, password } = req.body;

            if (!username || !email || !password) {
                return res.status(400).json({ 
                    message: 'Tous les champs sont requis',
                    success: false 
                });
            }

            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(400).json({ 
                    message: 'Cet utilisateur existe déjà',
                    success: false 
                });
            }

            const newUser = new User({ username, password, email });
            await newUser.save();

            res.status(201).json({ 
                message: 'Utilisateur créé avec succès', 
                success: true 
            });
        } catch (error) {
            console.error('Register error:', error); // Debug log
            res.status(500).json({ 
                message: 'Erreur serveur', 
                success: false,
                error: error.message 
            });
        }
    },
};

module.exports = authController;