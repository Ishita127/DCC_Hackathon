import { Link } from "react-router-dom";
import React,{useState} from "react";
import "./LoginBox.css";
import Dropdown from "react-dropdown";
import "./Forgotpassword";


const LoginBox = () => {
  const users= [
    { 'value':'admin', 'label':'Admin'},
    { 'value':'Student', 'label':'Student'},
    { 'value':'alumni', 'label':'Alumni'},
  ];
  const [selectedUser, setSelectedUser] = useState("");

  const handleUserChange = (option) => {
    setSelectedUser(option.value);
    console.log("Selected user:", option.value); 
  };

  return (
    <div className="container">
      <div className="LoginBox">
        <div className="divider">
          <h1 className="LoginFont">Register</h1>
        </div>
        <form>
          <div className="input-row">
            <input type="text" placeholder="First name" className="input-field" required />
            <input type="text" placeholder="Last name" className="input-field" required />
          </div>
          <input type="email" placeholder="Email address" className="input-field boxwidth" required />
          <Dropdown 
          options={users} 
          onChange={handleUserChange}
          value={selectedUser || null}
          placeholder="Register as:"
          className="input-field boxwidth dropdown-field"
           />
          <input type="password" placeholder="Password" className="input-field boxwidth" required />
          <input type="password" placeholder="Confirm Password" className="input-field boxwidth" required />
            <button type="submit" className="submit-button">Continue</button>
            <p>Already have an account</p>
            <Link to="/Login" style={{ color: "#6c63ff"}}>
              login 
          </Link>
        </form>
      </div>
      <div className="img"></div>
    </div>
   );
};

export default LoginBox;
