const modal = document.querySelector(".modal");
const modalBackdrop = document.querySelector(".modal__backdrop");
const burgerMenu = document.querySelector(".header__burger");
const close = document.querySelector(".close");

burgerMenu.addEventListener("click", () => {
  modalBackdrop.classList.add("darken");
  modal.classList.add("slide-up");
});

modalBackdrop.addEventListener("click", () => {
  modalBackdrop.classList.remove("darken");
  modal.classList.remove("slide-up");
});

close.addEventListener("click", () => {
  modalBackdrop.classList.remove("darken");
  modal.classList.remove("slide-up");
});
