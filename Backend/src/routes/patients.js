const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).json(patient);
});

router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

router.get('/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
});

router.put('/:id', async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
});

router.delete('/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
