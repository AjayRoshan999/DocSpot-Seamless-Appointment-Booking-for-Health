import React, { useEffect, useState } from 'react';
import API, { setAuth } from '../services/api';

export default function DoctorDashboard() {
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth(token);
      fetchAppointments();
    }
  }, []);

  async function fetchAppointments() {
    try {
      const res = await API.get('/appointments/mine');
      setAppts(res.data);
    } catch (err) {
      console.error('Error fetching appointments:', err);
    }
  }

  async function changeStatus(id, status) {
    try {
      await API.patch(`/appointments/${id}/status`, { status });
      fetchAppointments();
    } catch (err) {
      console.error('Error updating status:', err);
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Doctor Dashboard</h2>
      {appts.length === 0 ? (
        <div>No appointments</div>
      ) : (
        appts.map((a) => (
          <div key={a._id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <div><strong>Patient:</strong> {a.customer?.name || 'Unknown'}</div>
            <div><strong>Slot:</strong> {new Date(a.slotStart).toLocaleString()}</div>
            <div><strong>Status:</strong> {a.status}</div>
            <div style={{ marginTop: '0.5rem' }}>
              {a.status !== 'confirmed' && (
                <button onClick={() => changeStatus(a._id, 'confirmed')} style={{ marginRight: '0.5rem' }}>
                  Confirm
                </button>
              )}
              {a.status !== 'cancelled' && (
                <button onClick={() => changeStatus(a._id, 'cancelled')} style={{ marginRight: '0.5rem' }}>
                  Cancel
                </button>
              )}
              {a.documentPath && (
                <a
                  href={`http://localhost:5001${a.documentPath}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginLeft: '0.5rem' }}
                >
                  View Document
                </a>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}