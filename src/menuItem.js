const menuItem = ({ name, description, price, image }) => {
  // Create elements
  const nameDiv = document.createElement("h3");
  const descriptionDiv = document.createElement("p");
  const priceDiv = document.createElement("p");
  const image = document.createElement("img");

  // Add parameter as content to created elements
  nameDiv.textContent = name;
  descriptionDiv.textContent = description;
  priceDiv.textContent = "$" + price;
  image.src = image;
};

export default menuItem;
