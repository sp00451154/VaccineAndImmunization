const express = require('express');
const { createAppointment, getAppointments, getAppointmentById, updateAppointment, deleteAppointment, updateAppointmentStatus } = require('../controllers/appointment_controller');
const { protect } = require('../middlewares/authMiddleware');
const appointmentRoutes = express.Router();

appointmentRoutes.post('/', protect, createAppointment );

appointmentRoutes.get('/',protect, getAppointments);

appointmentRoutes.get('/:id', protect, getAppointmentById);

appointmentRoutes.put('/:id', protect, updateAppointment);

appointmentRoutes.delete('/:id', protect, deleteAppointment);

appointmentRoutes.put("/update_status/:appointmentId", protect, updateAppointmentStatus)

module.exports = appointmentRoutes;
