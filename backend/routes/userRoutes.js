const express = require('express');
const router = express.Router();
const { register, login, getUserById, getUsers, updateUser } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/api/users/:id', updateUser);


module.exports = router;