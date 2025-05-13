const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
}

exports.getAppointments = async (req, res) => {
    const appointments = await Appointment.find()
        .populate('patient')
        .populate('provider')
        .populate('vaccine');
    res.json(appointments);
}

exports.getAppointmentById = async (req, res) => {
    const appointment = await Appointment.findById(req.params.id)
        .populate('patient')
        .populate('provider')
        .populate('vaccine');
    res.json(appointment);
}

exports.updateAppointment = async (req, res) => {
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(appointment);
}

exports.deleteAppointment = async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
}