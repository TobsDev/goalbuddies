const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    participants: {
        type: Array,
        default: ['default participant', "another participant"]
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1589988024319-8e1b5e1b5f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbGxlbmdlJTIwY2F0JTIwY29sb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    },
    privacy: {
        type: Boolean,
        default: false,
    },
    buyIn: {
        type: Number,
        default: 0,
    },
    ownerId: {
        type: String,
        default: 'user'
    },
    category: {
        type: String,
        default: 'Other'
    },
    rules: {
        type: String,
        default: 'No rules'
    }



    // Add any other fields you need for the challenge model
});

module.exports = mongoose.model('Challenge', challengeSchema);
