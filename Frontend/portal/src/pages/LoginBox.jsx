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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });

  const [errors, setErrors] = useState({});

  const handleUserChange = (option) => {
    setFormData({ ...formData, userRole: option.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const validationErrors = {};

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    
    if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.userRole) {
      validationErrors.userRole = "Please select a role";
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
  };

  return (
    <div className="container">
      <div className="LoginBox">
        <div className="divider">
          <h1 className="LoginFont">Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div>
            <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="input-field"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
             </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="input-field"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="input-field boxwidth"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <Dropdown
            options={users}
            onChange={handleUserChange}
            value={formData.userRole || null}
            placeholder="Register as:"
            className="input-field boxwidth dropdown-field"
          />
          {errors.userRole && <span className="error">{errors.userRole}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field boxwidth"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field boxwidth"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

          <button type="submit" className="submit-button">
            Continue
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/Login" style={{ color: "#6c63ff" }}>
              login
            </Link>
          </p>
        </form>
        </div>
      <div className="img"></div>
    </div>
   );
};

export default LoginBox;
