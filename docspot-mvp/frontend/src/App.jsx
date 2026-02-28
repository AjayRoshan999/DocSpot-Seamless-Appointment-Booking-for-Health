import { Routes, Route } from 'react-router-dom';
import Doctors from './pages/Doctors';
import MyAppointments from './pages/MyAppointments';
import Login from './pages/login';
import Register from './pages/Register';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import DoctorDashboard from './pages/DoctorDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/appointments" element={<MyAppointments />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    </Routes>
  );
}

export default App;