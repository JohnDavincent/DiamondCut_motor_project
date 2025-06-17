function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;
  const error = document.querySelector(".error");

  if (username === "" && password === "") {
    document.getElementById("username").style.borderColor = "red";
    document.getElementById("password").style.borderColor = "red";
    error.innerText = "Username and Password are required";
    return;
  }

  if (username === "") {
    document.getElementById("username").style.borderColor = "red";
    error.innerText = "Username is required";
    return;
  }

  if (password === "") {
    document.getElementById("password").style.borderColor = "red";
    error.innerText = "Password is required";
    return;
  }

  error.innerText = "";

  console.log({
    username,
    password,
    remember,
  });

  alert("Login successful");
}
