const express = require('express');
const router = express.Router();
const Vaccination = require('../models/Vaccination');

router.post('/', async (req, res) => {
  const vaccination = new Vaccination(req.body);
  await vaccination.save();
  res.status(201).json(vaccination);
});

router.get('/', async (req, res) => {
  const vaccinations = await Vaccination.find()
    .populate('patient')
    .populate('provider')
    .populate('vaccine')
    .populate('appointment');
  res.json(vaccinations);
});

router.get('/:id', async (req, res) => {
  const vaccination = await Vaccination.findById(req.params.id)
    .populate('patient')
    .populate('provider')
    .populate('vaccine')
    .populate('appointment');
  res.json(vaccination);
});

router.put('/:id', async (req, res) => {
  const vaccination = await Vaccination.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vaccination);
});

router.delete('/:id', async (req, res) => {
  await Vaccination.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
