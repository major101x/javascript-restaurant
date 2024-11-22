const menuItem = (divToAppendTo, { name, description, price, image }) => {
  // Select div#content inside template.html
  const contentDiv = document.querySelector("#content");

  // Create elements
  const nameDiv = document.createElement("h3");
  const descriptionDiv = document.createElement("p");
  const priceDiv = document.createElement("p");
  const foodImg = document.createElement("img");

  // Add parameter as content to created elements
  nameDiv.textContent = name;
  descriptionDiv.textContent = description;
  priceDiv.textContent = "$" + price;
  foodImg.src = image;

  // Elements are appended to div passed as argument
  divToAppendTo.appendChild(foodImg);
  divToAppendTo.appendChild(nameDiv);
  divToAppendTo.appendChild(descriptionDiv);
  divToAppendTo.appendChild(priceDiv);
};

export default menuItem;
