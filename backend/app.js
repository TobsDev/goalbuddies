const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const challengeRoutes = require('./routes/challengeRoutes');

const app = express();

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
console.log('User routes registered');
app.use('/api/challenges', challengeRoutes);
console.log('Challenge routes registered');

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error', error: err });
});

app.get('/', (req, res) => {
    res.send('Welcome to GoalBuddies Backend!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
