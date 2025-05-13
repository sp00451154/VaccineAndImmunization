const express = require('express');
const vaccinRoutes = express.Router();
const { Vaccine } = require('../models/mongoose_models');
const { protect } = require('../middlewares/authMiddleware');

vaccinRoutes.post('/', protect, async (req, res) => {
  const vaccine = new Vaccine(req.body);
  await vaccine.save();
  res.status(201).json(vaccine);
});

vaccinRoutes.get('/', protect, async (req, res) => {
  const vaccines = await Vaccine.find();
  res.json(vaccines);
});

vaccinRoutes.get('/:id', protect, async (req, res) => {
  const vaccine = await Vaccine.findById(req.params.id);
  res.json(vaccine);
});

module.exports = vaccinRoutes;
