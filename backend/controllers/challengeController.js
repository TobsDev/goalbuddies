const Challenge = require('../models/challenges');

exports.createChallenge = async (req, res) => {
    console.log('createChallenge called');
    console.log("Request body:", req.body);
    try {
        const challenge = new Challenge(req.body);
        await challenge.save();
        res.status(201).json(challenge);
    } catch (error) {
        res.status(400).json({ message: 'Error creating challenge', error });
    }
};

exports.fetchChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching challenges', error });
    }
};

exports.getChallengeById = async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        res.status(200).json(challenge);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching challenge', error });
    }
};

exports.updateChallenge = async (req, res) => {
    try {
        const challenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(challenge);
    } catch (error) {
        res.status(400).json({ message: 'Error updating challenge', error });
    }
};

exports.deleteChallenge = async (req, res) => {
    try {
        await Challenge.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Challenge deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting challenge', error });
    }
};
