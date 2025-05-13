const express = require('express');
const vaccinationRoutes = express.Router();
const { Vaccination } = require('../models/mongoose_models');
const { protect } = require('../middlewares/authMiddleware');

vaccinationRoutes.post('/', protect, async (req, res) => {
    const vaccination = new Vaccination(req.body);
    await vaccination.save();
    res.status(201).json(vaccination);
});

vaccinationRoutes.get('/', protect, async (req, res) => {
    const vaccinations = await Vaccination.find()
        .populate('patient')
        .populate('provider')
        .populate('vaccine')
        .populate('appointment');
    res.json(vaccinations);
});

vaccinationRoutes.get('/:id', protect, async (req, res) => {
    const vaccination = await Vaccination.findById(req.params.id)
        .populate('patient')
        .populate('provider')
        .populate('vaccine')
        .populate('appointment');
    res.json(vaccination);
});

vaccinationRoutes.put('/:id', protect, async (req, res) => {
    const vaccination = await Vaccination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(vaccination);
});

vaccinationRoutes.delete('/:id', protect, async (req, res) => {
    await Vaccination.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = vaccinationRoutes;
