function navigateToStudent() {
  window.location.href = "student.html";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = {
      firstName: document.querySelector('input[name="firstName"]').value,
      lastName: document.querySelector('input[name="lastName"]').value,
      email: document.querySelector('input[name="email"]').value,
      password: document.querySelector('input[name="password"]').value,
      confirmPassword: document.querySelector('input[name="confirmPassword"]').value,
      userRole: document.getElementById("userRole").value,
    };
  
    const errors = {};
  
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }
  
    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
  
    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }
  
    if (!formData.userRole) {
      errors.userRole = "Please select a role";
    }
  
    // Display errors
    document.getElementById("error-email").textContent = errors.email || "";
    document.getElementById("error-password").textContent = errors.password || "";
    document.getElementById("error-confirmPassword").textContent = errors.confirmPassword || "";
    document.getElementById("error-userRole").textContent = errors.userRole || "";

  console.log("Errors object:", errors);
  
  });
  