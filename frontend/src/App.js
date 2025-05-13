import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import LogIn from "./components/Login/LogIn";
import DashBoard from "./components/DashBoard/DashBoard";
import BookAppointment from "./components/Appointment/BookAppointment";
import AppointmentList from "./components/Appointment/AppointmentList";
import AvailableVaccines from "./components/Vaccine/AvailableVaccines";
import Register from "./components/Register/Register";
import ProtectedRoute from "./ProtectedRoute"; // Updated: default export
import Page404 from "./components/Page404/Page404";
import ProviderRegister from "./components/ProviderRegister/ProviderRegister";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vaccines" element={<AvailableVaccines />} />
        <Route path="/book/:vaccineId" element={<BookAppointment />} />
        <Route path="/provider-register" element={<ProviderRegister />} />
        <Route path="/appointments" element={<AppointmentList />} />
        <Route path="/dashboard" element={<DashBoard />} />

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoute userNameKey="user" />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
