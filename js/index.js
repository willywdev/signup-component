const form = document.querySelector('[data-js="form"]');
const passwordInput1 = document.querySelector('[data-js="passwordInput1"]');
const passwordInput2 = document.querySelector('[data-js="passwordInput2"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newFormData = new FormData(e.target);
  const data = Object.fromEntries(newFormData);

  if (data.password != data.passwordRepeat) {
    passwordInput1.style.backgroundColor = "#cb3737a6";
    passwordInput2.style.backgroundColor = "#cb3737a6";
    passwordInput1.style.border = "2px solid #cb3737";
    passwordInput2.style.border = "2px solid #cb3737";
    const errorMessagePassword = document.createElement("p");
  }
});
