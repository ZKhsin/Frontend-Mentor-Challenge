const email = document.querySelector("#email");
const form = document.querySelector("form");
const span = document.querySelector("#errorTxt");
const submit = document.querySelector("#submit");

// Check email
function checkEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value === "") {
    form.classList.add("error");
    span.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!re.test(email.value)) {
    form.classList.add("error");
    span.innerHTML = "Please provide a valid email address";
  } else {
    location.reload();
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkEmail(email);
});
