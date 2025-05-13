// src/components/Appointment/AppointmentForm.jsx
import { useState, useEffect } from 'react';

const AppointmentForm = ({ onSubmit, selected, onCancel }) => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    vaccine: ''
  });

  useEffect(() => {
    if (selected) {
      setForm({
        name: selected.name,
        date: selected.date,
        vaccine: selected.vaccine
      });
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', date: '', vaccine: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Patient Name" value={form.name} onChange={handleChange} required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="vaccine" placeholder="Vaccine Name" value={form.vaccine} onChange={handleChange} required />
      <button type="submit">{selected ? 'Update' : 'Create'} Appointment</button>
      {selected && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default AppointmentForm;
