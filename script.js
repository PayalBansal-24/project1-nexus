let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("passwordinput");

eyeicon.addEventListener("click", function() {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.classList.add("fa-eye");
    eyeicon.classList.remove("fa-eye-slash");
  } else {
    password.type = "password";
    eyeicon.classList.add("fa-eye-slash");
    eyeicon.classList.remove("fa-eye");
  }
});

document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "signup.html"; 
});

document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default link behavior (e.g., navigating to href)
    // You can replace "login.html" with the actual path to your login page
    window.location.href = "login.html"; 
});