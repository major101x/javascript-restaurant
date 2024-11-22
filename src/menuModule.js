import menuItem from "./menuItem";
import hamburger from "./images/hamburger.jpg";
import angusBurger from "./images/angus-burger.jpg";
import chilliBurger from "./images/chilli-burger.jpg";
import cheeseburger from "./images/cheeseburger.jpg";
import veggieBurger from "./images/veggie-burger.jpg";

const menuModule = () => {
  // Select div#content inside template.html
  const contentDiv = document.querySelector("#content");

  // Clear div#content
  contentDiv.textContent = "";

  const menuDiv = document.createElement("div");

  contentDiv.appendChild(menuDiv);

  // Create menuItems and append them to the page
  menuItem(menuDiv, {
    name: "Hamburger",
    description: "A hamburger with bacon, lettuce, and slices of tomato.",
    price: 5.99,
    image: hamburger,
  });
  menuItem(menuDiv, {
    name: "Angus burger",
    description: "A hamburger made using beef from Angus cattle.",
    price: 5.99,
    image: angusBurger,
  });
  menuItem(menuDiv, {
    name: "Chili burger",
    description: "Hamburger, with the patty topped with chili con carne.",
    price: 5.99,
    image: chilliBurger,
  });
  menuItem(menuDiv, {
    name: "Cheeseburger",
    description: "Hamburger with melted cheese on top of the meat patty.",
    price: 5.99,
    image: cheeseburger,
  });
  menuItem(menuDiv, {
    name: "Veggie burger",
    description: "Hamburger made with a patty that does not contain meat.",
    price: 5.99,
    image: veggieBurger,
  });
};

export default menuModule;
