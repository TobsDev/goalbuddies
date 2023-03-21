const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    role: { type: String, default: 'user', enum: ['user', 'admin', 'premium-user', 'coach'], required: true},
    challenges: { type: Array, default: [] },
    friends: { type: Array, default: [] },
    image: { type: String, default: 'https://images.unsplash.com/photo-1589988024319-8e1b5e1b5f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbGxlbmdlJTIwY2F0JTIwY29sb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80' }
    // Add any additional fields you'd like to store, such as user roles or profile information.
});

// Pre-save hook for hashing the password before saving it to the database.
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

// Method for comparing a given password with the stored hashed password.
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
