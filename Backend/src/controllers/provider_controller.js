const Provider = require('../models/Provider');

exports.createProvider = async (req, res) => {
    const provider = new Provider(req.body);
    await provider.save();
    res.status(201).json(provider);
}

exports.getProviders = async (req, res) => {
    const providers = await Provider.find();
    res.json(providers);
}

exports.getProviderById = async (req, res) => {
    const provider = await Provider.findById(req.params.id);
    res.json(provider);
}

exports.updateProvider = async (req, res) => {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(provider);
}

exports.deleteProvider = async (req, res) => {
    await Provider.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
}