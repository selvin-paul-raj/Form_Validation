function validate() {
  let Name = document.getElementById("name").value;
  let Email = document.getElementById("email").value;
  let Password = document.getElementById("password").value;

  let NameRegex = /^[a-zA-Z\s]+$/;
  let EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!Name.match(NameRegex)) {
    showError("name-error", "Please Enter a Valid Name");
    return false;
  } else {
    hideError("name-error");
  }

  if (!Email.match(EmailRegex)) {
    showError("email-error", "Please Enter a Valid Email Address");
    return false;
  } else {
    hideError("email-error");
  }

  if (!Password.match(PasswordRegex)) {
    showError(
      "password-error",
      "Password Must Be At Least 8 Characters Long And Contain At Least One Letter And One Number"
    );
    return false;
  } else {
    hideError("password-error");
  }
  alert("Form Submitted Successfully");
  return true;
}

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.innerHTML = message;
  errorElement.style.display = "block";
}

function hideError(id) {
  const errorElement = document.getElementById(id);
  errorElement.innerHTML = "";
  errorElement.style.display = "none";
}
