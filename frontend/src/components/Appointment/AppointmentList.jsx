// src/components/Appointment/AppointmentList.jsx
import { useEffect, useState } from 'react';
import api from '../../service/api';
import AppointmentForm from './AppointmentForm';
import './AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  const defaultAppointments = [
    { _id: '1', name: 'John Doe', date: '2025-05-15', vaccine: 'Covaxin' },
    { _id: '2', name: 'Jane Smith', date: '2025-05-16', vaccine: 'Cavashield' }
  ];

  const fetchAppointments = async () => {
    try {
      const res = await api.get('/appointments');
      setAppointments(res.data);
    } catch (err) {
      console.error('Could not fetch from backend:', err.message);
      setError('Backend offline. Showing mock data.');
      setAppointments(defaultAppointments); // Fallback to demo data
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCreate = async (data) => {
    try {
      await api.post('/appointments', data);
      fetchAppointments();
    } catch (err) {
      alert('Create failed. Backend offline.');
    }
  };

  const handleUpdate = async (data) => {
    try {
      await api.put(`/appointments/${selected._id}`, data);
      setSelected(null);
      fetchAppointments();
    } catch (err) {
      alert('Update failed. Backend offline.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/appointments/${id}`);
      fetchAppointments();
    } catch (err) {
      alert('Delete failed. Backend offline.');
    }
  };

  return (
    <div className="appointment-container">
      <h2>Manage Appointments</h2>
      {error && <p className="error-message">{error}</p>}
      <AppointmentForm
        onSubmit={selected ? handleUpdate : handleCreate}
        selected={selected}
        onCancel={() => setSelected(null)}
      />
      <ul>
        {appointments.map((a) => (
          <li key={a._id}>
            <div className="appointment-info">
              <strong>{a.name}</strong> | {a.date} | {a.vaccine}
            </div>
            <div className="appointment-actions">
              <button onClick={() => setSelected(a)}>Edit</button>
              <button onClick={() => handleDelete(a._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
