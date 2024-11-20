document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = 'student.html';
});

  
document.getElementById('loginForm').addEventListener('submit', 
  function navigateToStudent() {
  window.location.href = "student.html";
  }
);
  
const formData = {
  email: document.querySelector('input[name="email"]').value,
  password: document.querySelector('input[name="password"]').value,
  };

const errors = {};

if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
errors.email = "Invalid email format";
}

if (formData.password.length < 8) {
errors.password = "Password must be at least 8 characters";
}

document.getElementById("error-email").textContent = errors.email || "";
document.getElementById("error-password").textContent = errors.password || "";
