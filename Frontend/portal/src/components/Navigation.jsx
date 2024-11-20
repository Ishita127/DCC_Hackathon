import "./Navigation.css";

const Navigation = () => {

   return (
    <div class="navbar">
  <img src="./images/logo.png" alt="logo" class="logo" />
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#help">Help</a></li>
  </ul>
  <a href="/Login" class="login">Login/SignUp</a>
</div>   
  );
};

export default Navigation;
