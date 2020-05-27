const email = document.querySelector("#email");
const errorImg = document.querySelector(".error");
const button = document.querySelector("button");
const message = document.querySelector(".message");

function checkEmail() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email.value)) {
    errorImg.classList.add("showError");
    email.classList.add("errBorder");
    message.classList.add("errorP");

    setTimeout(() => {
      errorImg.classList.remove("showError");
      email.classList.remove("errBorder");
      message.classList.remove("errorP");
    }, 3000);
  } else {
    email.value = "";
  }
}

button.addEventListener("click", checkEmail);
