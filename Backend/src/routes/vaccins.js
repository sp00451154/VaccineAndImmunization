const express = require('express');
const router = express.Router();
const Vaccine = require('../models/Vaccine');

router.post('/', async (req, res) => {
  const vaccine = new Vaccine(req.body);
  await vaccine.save();
  res.status(201).json(vaccine);
});

router.get('/', async (req, res) => {
  const vaccines = await Vaccine.find();
  res.json(vaccines);
});

router.get('/:id', async (req, res) => {
  const vaccine = await Vaccine.findById(req.params.id);
  res.json(vaccine);
});

router.put('/:id', async (req, res) => {
  const vaccine = await Vaccine.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(vaccine);
});

router.delete('/:id', async (req, res) => {
  await Vaccine.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
