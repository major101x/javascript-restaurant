const menuItem = (divToAppendTo, { name, description, price, image }) => {
  // Create wrapper for menu items
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  // Create elements
  const nameDiv = document.createElement("h3");
  const descriptionDiv = document.createElement("p");
  const priceDiv = document.createElement("p");
  const foodImg = document.createElement("img");

  // Add classes to elements
  nameDiv.classList.add("item-name");
  descriptionDiv.classList.add("item-description");
  priceDiv.classList.add("item-price");
  foodImg.classList.add("item-image");

  // Add parameter as content to created elements
  nameDiv.textContent = name;
  descriptionDiv.textContent = description;
  priceDiv.textContent = "$" + price;
  foodImg.src = image;

  // Elements are appended to menuItem
  menuItem.appendChild(foodImg);
  menuItem.appendChild(nameDiv);
  menuItem.appendChild(descriptionDiv);
  menuItem.appendChild(priceDiv);

  // Append menuItem to div passed as argument
  divToAppendTo.appendChild(menuItem);
};

export default menuItem;
