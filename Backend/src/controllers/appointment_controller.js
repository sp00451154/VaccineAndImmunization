const { Appointment } = require('../models/mongoose_models');

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

exports.getAppointmentsByProivder = async (req, res) => {
    const { providerId } = req.params;

    try {
        const appointments = await Appointment.find({ provider: providerId })
            .populate('patient', 'name email phone')     // get basic patient info
            .populate('vaccine', 'name doses frequency') // get vaccine info
            .sort({ date: -1 });                         // optional: latest first

        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.updateAppointmentStatus = async (req, res) => {
    const { appointmentId } = req.params;
    const { status } = req.params;

    const validStatuses = ['Scheduled', 'Completed', 'Cancelled'];
    if (validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    try {
        const updated = await Appointment.findByIdAndUpdate(
            appointmentId,
            { status },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        res.json({ message: 'Status updated successfully', appointment: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}