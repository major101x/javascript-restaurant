import foodImage from "./images/food-image.jpg";
const homeModule = () => {
  // Select div#content inside template.html
  const contentDiv = document.querySelector("#content");

  // Clear div#content
  contentDiv.textContent = "";

  // Create elements
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  // Add content to elements
  img.src = foodImage;
  h1.textContent = "Welcome to Food For Real!";
  h2.textContent =
    "Being one of the best establishments in God knows where, Food For Real makes quality meals and provides high-quality customer service for its esteemed customers. Your satisfaction is our top priority, for real!";

  // Append elements to contentDiv
  contentDiv.appendChild(img);
  contentDiv.appendChild(h1);
  contentDiv.appendChild(h2);

  console.log("Hi");
};

export default homeModule;
