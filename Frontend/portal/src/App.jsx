import './App.css';
import Home from './components/Home';
import LoginBox from './components/LoginBox';
import Login from './components/Login';
import Forgotpassword from './components/Forgotpassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginBox" element={<LoginBox />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
