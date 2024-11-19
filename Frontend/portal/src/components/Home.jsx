import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
const navigate = useNavigate();
const handleClick = () => {
    navigate("/LoginBox");
};

    return (
        <div className='whole'>
                <Navigation/>
        <div className='Home'>
          <h1>Welcome to the DCC portal</h1>
          <p>Hello, Coders. This portal is all about  
            Enhancing communication, tracking your 
            progress, evaluating  performance, managing 
            projects and improving skills with time. </p>
           <Link to="/LoginBox">
                 <button type="button" onClick={handleClick} className='btn1'>
                    Get Started!
                 </button>
             </Link>
         </div>
        </div>

    );
}

export default Home;