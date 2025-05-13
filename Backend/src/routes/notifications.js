const express = require('express');
const notificationRoutes = express.Router();
const {Notification} = require('../models/mongoose_models');

notificationRoutes.post('/', async (req, res) => {
  const notification = new Notification(req.body);
  await notification.save();
  res.status(201).json(notification);
});

notificationRoutes.get('/', async (req, res) => {
  const notifications = await Notification.find()
    .populate('patient')
    .populate('provider');
  res.json(notifications);
});

notificationRoutes.get('/:id', async (req, res) => {
  const notification = await Notification.findById(req.params.id)
    .populate('patient')
    .populate('provider');
  res.json(notification);
});

notificationRoutes.delete('/:id', async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = notificationRoutes;
