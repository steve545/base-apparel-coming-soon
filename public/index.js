const form = document.querySelector("[data-js-form]");

let errorIcon = document.getElementById("errorIcon");
let errorText = document.getElementById("errorText");
let errorInputBox = document.getElementById("emailInput");

function handleSubmit(event) {
  event.preventDefault();

  if (form.checkValidity() == false) {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
    errorInputBox.classList.remove("hidden");
    errorInputBox.classList.add("border-red-500");
  } else {
    errorIcon.classList.add("hidden");
    errorText.classList.add("hidden");
    errorInputBox.classList.remove("border-red-500");
  }

  const email = new FormData(event.target).get("email");
}

form.addEventListener("submit", handleSubmit);
