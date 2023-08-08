const form = document.querySelector('[data-js="form"]');
const passwordInput1 = document.querySelector('[data-js="passwordInput1"]');
const passwordInput2 = document.querySelector('[data-js="passwordInput2"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newFormData = new FormData(e.target);
  const data = Object.fromEntries(newFormData);
});

// ! Make Password Border red if they don't match
passwordInput1.addEventListener("input", checkPassword);
passwordInput2.addEventListener("input", checkPassword);

function checkPassword() {
  const password1 = passwordInput1.value;
  const password2 = passwordInput2.value;
  if (password1 != password2 && password1 != "") {
    passwordInput1.style.border = "2px solid red";
    passwordInput2.style.border = "2px solid red";
  } else if ((password1 === password2 && password1, password != "")) {
    passwordInput1.style.border = "2px solid lightgreen";
    passwordInput2.style.border = "2px solid lightgreen";
  }
}
