const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
function validate() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
}
password.oninput = validate;
confirmPassword.oninput = validate;