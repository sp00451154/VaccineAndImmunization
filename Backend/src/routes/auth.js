const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Provider, Patient } = require('../models/mongoose_models');

const authRoutes = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(user, role) {
    return jwt.sign(
        { id: user._id, role: role },
        JWT_SECRET,
        { expiresIn: '7d' }
    );
}

authRoutes.post('/provider/signup', async (req, res) => {
    try {
        const { email, password, ...rest } = req.body;
        const existing = await Provider.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Provider already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newProvider = new Provider({ email, password: hashedPassword, ...rest });
        await newProvider.save();

        const token = generateToken(newProvider, 'provider');
        res.status(201).json({ token, user: newProvider });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

authRoutes.post('/provider/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const provider = await Provider.findOne({ email });
        if (!provider) return res.status(400).json({ message: 'Invalid credentials' });

        const match = await bcrypt.compare(password, provider.password);
        if (!match) return res.status(400).json({ message: 'Invalid credentials' });

        const token = generateToken(provider, 'provider');
        res.json({ token, user: provider });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


authRoutes.post('/patient/signup', async (req, res) => {
    try {
        const { email, password, ...rest } = req.body;
        const existing = await Patient.findOne({ email });
        if (existing) return res.status(400).json({ message: 'Patient already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newPatient = new Patient({ email, password: hashedPassword, ...rest });
        await newPatient.save();

        const token = generateToken(newPatient, 'patient');
        res.status(201).json({ token, user: newPatient });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


authRoutes.post('/patient/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const patient = await Patient.findOne({ email });
        if (!patient) return res.status(400).json({ message: 'Invalid credentials' });

        const match = await bcrypt.compare(password, patient.password);
        if (!match) return res.status(400).json({ message: 'Invalid credentials' });

        const token = generateToken(patient, 'patient');
        res.json({ token, user: patient });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = authRoutes;
