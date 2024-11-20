import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import LoginBox from './pages/LoginBox';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Student from './pages/Student';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginBox" element={<LoginBox />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Student" element={<Student />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
