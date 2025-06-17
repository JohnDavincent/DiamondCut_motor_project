function signup() {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm").value;
  const phone = document.getElementById("phone").value;
  const agree = document.getElementById("agree").checked;
  const error = document.querySelector(".error");

  if (
    email === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === "" ||
    phone === ""
  ) {
    error.innerHTML = "All fields are required";
    return;
  }

  if (!email.includes("@")) {
    error.innerHTML = "Invalid email";
    return;
  }

  if (isNaN(phone)) {
    error.innerHTML = "Invalid phone number";
    return;
  }

  if (password.length < 6) {
    error.innerHTML = "Password must be at least 6 characters";
    return;
  }

  if (password !== confirmPassword) {
    error.innerHTML = "Passwords do not match";
    return;
  }

  if (!agree) {
    error.innerHTML = "Please agree to the terms and conditions";
    return;
  }

  error.innerHTML = "";

  console.log({
    email,
    username,
    password,
    phone,
  });

  alert("Sign up successful");
}
