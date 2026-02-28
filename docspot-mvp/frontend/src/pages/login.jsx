import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Doctors from './Doctors';
import MyAppointments from './MyAppointments';
import Login from './login';
import Register from './Register';
import Home from './Home';
import UserDashboard from './UserDashboard';
import DoctorDashboard from './DoctorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/user-dashboard" element={<UserDashboard />} /> {/* ✅ Add this route */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} /> {/* ✅ Add this route */}
      </Routes>
    </Router>
  );
}

export default App;