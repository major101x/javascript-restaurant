import homeModule from "./homeModule";
import menuModule from "./menuModule";
import contactModule from "./contactModule";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

// Switch tabs with buttons
homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("active-tab");
  menuBtn.classList.remove("active-tab");
  contactBtn.classList.remove("active-tab");
  homeModule();
});
menuBtn.addEventListener("click", () => {
  homeBtn.classList.remove("active-tab");
  menuBtn.classList.add("active-tab");
  contactBtn.classList.remove("active-tab");
  menuModule();
});
contactBtn.addEventListener("click", () => {
  homeBtn.classList.remove("active-tab");
  menuBtn.classList.remove("active-tab");
  contactBtn.classList.add("active-tab");
  contactModule();
});

homeModule();
