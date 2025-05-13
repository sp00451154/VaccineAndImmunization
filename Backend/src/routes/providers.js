const express = require('express');
const { createProvider, getProviders, getProviderById, updateProvider, deleteProvider } = require('../controllers/provider_controller');
const providerRoutes = express.Router();

// Create
providerRoutes.post('/', createProvider);

// List
providerRoutes.get('/', getProviders);

// Get one
providerRoutes.get('/:id', getProviderById);

// Update
providerRoutes.put('/:id', updateProvider);

// Delete
providerRoutes.delete('/:id', deleteProvider);

module.exports = providerRoutes;
