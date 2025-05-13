const express = require('express');
const { createProvider, getProviders, getProviderById, updateProvider, deleteProvider } = require('../controllers/provider_controller');
const { getAppointmentsByProivder } = require('../controllers/appointment_controller');
const providerRoutes = express.Router();


providerRoutes.post('/', createProvider);
providerRoutes.get('/', getProviders);
providerRoutes.get('/:id', getProviderById);
providerRoutes.put('/:id', updateProvider);
providerRoutes.get("/get_appointment_list/:providerId", getAppointmentsByProivder);

module.exports = providerRoutes;
