import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAttendance from './components/AddAttendance';
import DeleteStudent from './components/DeleteStudent';
import GetStudentsData from './components/GetStudentsData';
import Login from './components/login'; 
import Signup from './components/Signup'; 
import StudentAttendance from './components/Student-Attendane'; // Ensure this path is correct
import UpdateStudent from './components/UpdateStudent';
import Home from './components/Home'; 
import './App.css';
import StudentAttendance_4th from './components/Student-Attendence-4th';
import StudentHome from './components/studenthome';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
        <Route path="" element={<Signup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} /> {/* Define a home route */}
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/add-attendance" element={<AddAttendance />} />
          <Route path="/delete-student" element={<DeleteStudent />} />
          <Route path="/get-students-data" element={<GetStudentsData />} />
          <Route path="/student-attendance/:id" element={<StudentAttendance />} />
          <Route path="/student-attendance/4th-year" element={<StudentAttendance_4th />} />
          <Route path="/update-student" element={<UpdateStudent />} />
          <Route path="/update-student/:id" element={<UpdateStudent />} /> 
          <Route path="/delete-student/:id" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
