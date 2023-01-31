"use strict";

const menuBar = document.querySelector(".menu-bar");
const links = document.querySelector(".links");

menuBar.addEventListener("click", () => {
  links.classList.toggle("show");
});
