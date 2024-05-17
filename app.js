let button = document.querySelector("#btn");
let buttonBox = document.querySelector(".btn-box");
let modalWrapper = document.querySelector(".modal__wrapper");
let closse = document.querySelector("#close");
let overlay = document.querySelector(".overlay");

button.addEventListener("click", () => {
  buttonBox.classList.toggle("hidden");
  button.classList.toggle("hidden");
  modalWrapper.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

closse.addEventListener("click", () => {
  buttonBox.classList.toggle("hidden");
  button.classList.toggle("hidden");
  modalWrapper.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
overlay.addEventListener("click", () => {
  buttonBox.classList.toggle("hidden");
  button.classList.toggle("hidden");
  modalWrapper.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    buttonBox.classList.toggle("hidden");
    button.classList.toggle("hidden");
    modalWrapper.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  }
});
