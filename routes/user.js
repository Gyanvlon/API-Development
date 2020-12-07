const express = require('express');
const user = require('../controllers/user');
const router = express.Router();
router.get('/login', user.getLogin);
router.post('/signup', user.getSignup);
router.put('/reset', user.getReset);

module.exports = router;
