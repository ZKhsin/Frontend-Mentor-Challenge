const form = document.querySelector(".form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Show error
function showError(input, message) {
  const formInput = input.parentElement;
  formInput.classList.add("error");
  const span = formInput.querySelector("span");
  span.innerHTML = message;
}

// Show success
function showSuccess(input) {
  const formInput = input.parentElement;
  formInput.classList.remove("error");
  submitForm();
}

// Submit form
function submitForm() {
  if (
    !firstName.parentElement.className.includes("error") &&
    !lastName.parentElement.className.includes("error") &&
    !email.parentElement.className.includes("error") &&
    !password.parentElement.className.includes("error")
  ) {
    form.submit();
  }
}

// Check input
function checkInput(input) {
  if (input.value === "") {
    showError(input, `${input.placeholder} cannot be empty`);
  } else {
    showSuccess(input);
  }
}

// Check email
function checkEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email.value)) {
    showError(email, `Looks like this is not an email`);
  } else {
    showSuccess(email);
  }
}

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput(firstName);
  checkInput(lastName);
  checkEmail(email);
  checkInput(password);
});

console.log(firstName.parentElement.className.includes("form-input"));
