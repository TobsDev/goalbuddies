const express = require('express');
const router = express.Router();
const { createChallenge, fetchChallenges, getChallengeById, updateChallenge, deleteChallenge } = require('../controllers/challengeController');

router.post('/create-challenge', createChallenge);
router.get('/', fetchChallenges);
router.get('/:id', getChallengeById);
router.put('/:id', updateChallenge);
router.delete('/:id', deleteChallenge);

module.exports = router;
