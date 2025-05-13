const express = require('express');
const cors = require('cors');
const helment = require("helmet")

const connectDB = require('./src/config/database');
const patientRoutes = require('./src/routes/patients');
const providerRoutes = require('./src/routes/providers');
const vaccinRoutes = require('./src/routes/vaccines');
const vaccinationRoutes = require('./src/routes/vaccination');
const appointmentRoutes = require('./src/routes/appointments');
const notificationRoutes = require('./src/routes/notifications');
const authRoutes = require('./src/routes/auth');


const app = express();

app.use(express.json());
app.use(cors())
app.use(helment())

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/vaccines", vaccinRoutes);
app.use("/api/vaccination", vaccinationRoutes);
app.use("/api/appointments", appointmentRoutes )
app.use("/api/notifications", notificationRoutes)


app.get("/", (req, res) => {
    res.send("welcome")
})

connectDB();
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));