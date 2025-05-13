const mongoose = require('mongoose');
const { Schema } = mongoose;

const providerSchema = new Schema({
    name: String,
    businessName: String,
    email: { type: String, unique: true },
    phone: String,
    state: String,
    city: String,
    pincode: String,
    password: String
});

const patientSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    mobile: String,
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    age: Number,
    password: String
});
const vaccineSchema = new Schema({
    name: String,
    ageGroup: String,
    doses: Number,
    frequency: String
});
const appointmentSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    provider: { type: Schema.Types.ObjectId, ref: 'Provider' },
    vaccine: { type: Schema.Types.ObjectId, ref: 'Vaccine' },
    date: Date,
    time: String,
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
});

const notificationSchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    provider: { type: Schema.Types.ObjectId, ref: 'Provider' },
    type: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

const vaccinationSchema = new Schema({
    vaccine: { type: Schema.Types.ObjectId, ref: 'Vaccine' },
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    provider: { type: Schema.Types.ObjectId, ref: 'Provider' },
    appointment: { type: Schema.Types.ObjectId, ref: 'Appointment' },
    doseDate: Date,
    doseNumber: Number,
    status: { type: String, enum: ['Pending', 'Up-to-date', 'Verification-pending'], default: 'Pending' }
});

module.exports = mongoose.model('Vaccine', vaccineSchema);
module.exports = mongoose.model('Patient', patientSchema);
module.exports = mongoose.model('Provider', providerSchema);
module.exports = mongoose.model('Vaccination', vaccinationSchema);
module.exports = mongoose.model('Appointment', appointmentSchema);
module.exports = mongoose.model('Notification', notificationSchema);
