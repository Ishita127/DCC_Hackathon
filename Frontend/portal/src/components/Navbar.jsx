import './Navbar.css';

const Navbar = ({show}) => {
  return (
    <div className={show ? "sidenav active" : 'sidenav' }>
        <ul style={{ marginTop: "60px" }}>
            <li><a href="/">Home</a></li>
        </ul>
        <ul>
            <li><a href="/">Performance matrix</a></li>
        </ul>
        <ul>
            <li><a href="/">Dashboard</a></li>
        </ul>
        <ul>
            <li><a href="/">LeaderBoard</a></li>
        </ul>
        <ul>
            <li><a href="/">To-Do list</a></li>
        </ul>
    </div>
  );
}

export default Navbar;