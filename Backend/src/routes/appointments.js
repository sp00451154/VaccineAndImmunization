const express = require('express');
const { createAppointment, getAppointments, getAppointmentById, updateAppointment, deleteAppointment } = require('../controllers/appointment_controller');
const appointmentRouter = express.Router();

appointmentRouter.post('/', createAppointment );

appointmentRouter.get('/', getAppointments);

appointmentRouter.get('/:id', getAppointmentById);

appointmentRouter.put('/:id', updateAppointment);

appointmentRouter.delete('/:id', deleteAppointment);

module.exports = appointmentRouter;
