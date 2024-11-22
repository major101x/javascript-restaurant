import homeModule from "./homeModule";
import menuModule from "./menuModule";
import contactModule from "./contactModule";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

// Switch tabs with buttons
homeBtn.addEventListener("click", homeModule);
menuBtn.addEventListener("click", menuModule);
contactBtn.addEventListener("click", contactModule);

homeModule();
