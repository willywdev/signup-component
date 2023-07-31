const form = document.querySelector('[data-js="form"]');
const passwordInput1 = document.querySelector('[data-js="passwordInput1"]');
const passwordInput2 = document.querySelector('[data-js="passwordInput2"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newFormData = new FormData(e.target);
  const data = Object.fromEntries(newFormData);
});

// ! Make Password Border red if they don't match
