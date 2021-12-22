"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//to add class again
//reuse function, don't repeat the same code

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//loop to each button, array holding all btns
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//handle a keypress event ex "Esc", we look what key was pressed
//respond to keyboard events (global events)
//global events add to whole document
//keydown, keypress and keyup
document.addEventListener("keydown", function (e) {
  // for all keys console.log("A key was pressed");
  //console.log(e.key); //show what key was pressed

  //   if (e.key === "Escape")
  //     if (!modal.classList.contains("hidden")) {
  //       //if pressed key is esc and if has class hidden
  //       //()we call the function and execute the code
  //       closeModal();
  //     }
  //OR
  if ((e.key = "Escape" && !modal.classList("hidden"))) {
    closeModal;
  }
});
