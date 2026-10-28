
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.replace("bi-eye-slash", "bi-eye");
    } else {
        password.type = "password";
        togglePassword.classList.replace("bi-eye", "bi-eye-slash");
    }
});
