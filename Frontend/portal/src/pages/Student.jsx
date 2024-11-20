import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from '../components/Navbar';
import { useState } from 'react';
import '../components/Navbar.css';
import './Student.css';
import logo from '../components/images/logo.png';
import Todo from "../components/Todo";


const Student = () => {
    const [showNav, setshowNav ] = useState(false);
  return (
    <div className="student">
      <div className="main-sect">
        <header>
            <GiHamburgerMenu onClick={() => setshowNav(!showNav)} />
            <img src={logo} alt="Logo" className="logo" />
        </header>
        {showNav && <div className="backdrop" onClick={() => setshowNav(false)} />}
        <Navbar show={showNav} />
        </div>
      <section className="greeting-card">
        <h2>Good Morning!</h2>
        <p style={{textAlign: "center"}}>You've learned 75% of your goal this week! Keep it up and improve your results.</p>
      </section>
      <section>
        <div>
        <Todo/>
        </div>
      </section>
      <section className="myScore">
        <h2>YOUR SCORE</h2>
        <h3>830 points</h3>
      </section>
      <section className="leaderBoard">

      </section>
    </div>
  )
}

export default Student;