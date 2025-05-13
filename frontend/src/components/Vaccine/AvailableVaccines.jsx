// src/components/Vaccine/AvailableVaccines.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import './AvailableVaccines.css';

const AvailableVaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultVaccines = [
    { _id: '1', name: 'Covaxin', disease: 'COVID-19' },
    { _id: '2', name: 'Covaxin2', disease: 'COVID-19' },
    { _id: '3', name: 'Cavashild', disease: 'COVID-19' },
    { _id: '4', name: 'MMR', disease: 'Measles' },
  ];

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const res = await api.get('/vaccines'); // Make sure this API exists in your backend
        if (res.data && res.data.length > 0) {
          setVaccines(res.data);
        } else {
          setVaccines(defaultVaccines);
        }
      } catch (err) {
        console.error('Error fetching vaccines:', err);
        setVaccines(defaultVaccines); // fallback if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchVaccines();
  }, []);

  return (
    <div className="container">
      <h2>Available Vaccines</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="vaccine-list">
          {vaccines.length === 0 ? (
            <p>No vaccines available at the moment.</p>
          ) : (
            vaccines.map((vaccine) => (
              <div className="vaccine-card" key={vaccine._id}>
                <div>
                  <strong>{vaccine.name}</strong>
                </div>
                <Link className="book-btn" to={`/book/${vaccine._id}`}>
                  Book
                </Link>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AvailableVaccines;
