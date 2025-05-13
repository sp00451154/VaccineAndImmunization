import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../service/api';
import './BookAppointment.css';

const BookAppointment = () => {
  const { vaccine } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState(''); // ✅ NEW
  const [provider, setProviderId] = useState('');
  const [providers, setProviders] = useState([]);
  const [patient, setPatient] = useState('6823255072382876e3f110ec');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Fetch provider list
  useEffect(() => {
    axios
      .get('/providers')
      .then((res) => setProviders(res.data))
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setMessage('Failed to fetch providers.');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/appointments', {
        vaccine,
        provider,
        patient,
        date,
        time, // ✅ include time
      });
      setIsError(false);
      setMessage('Appointment booked successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (err) {
      setIsError(true);
      setMessage('Error booking appointment.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <h2>Book Vaccine Appointment</h2>

        {message && (
          <div className={isError ? 'error-message' : 'success-message'}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label>Select Date:</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Select Time:</label> {/* ✅ NEW */}
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <label>Select Provider:</label>
          <select
            required
            value={provider}
            onChange={(e) => setProviderId(e.target.value)}
          >
            <option value="">-- Select Provider --</option>
            {providers.map((provider) => (
              <option key={provider._id} value={provider._id}>
                {provider.name}
              </option>
            ))}
          </select>

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
