import React from 'react';

const Forgotpassword = () => {
  return (
    <div className="container">
      <div className="divider">
            <h1>check your email to reset password or check your old password</h1>
        </div>
      <div className="LoginBox">
        <form>
          <input type="email" placeholder="Email address" className="input-field boxwidth" required />
          <br />
            <button type="submit" className="submit-button">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;