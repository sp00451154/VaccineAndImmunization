const express = require('express');
const patientRoutes = express.Router();
const {Patient} = require('../models/mongoose_models');

patientRoutes.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.status(201).json(patient);
});

patientRoutes.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

patientRoutes.get('/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
});

patientRoutes.put('/:id', async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(patient);
});

patientRoutes.delete('/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = patientRoutes;
