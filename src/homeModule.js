const homeModule = () => {
  // Select div#content inside template.html
  const contentDiv = document.querySelector("#content");

  // Clear div#content
  contentDiv.textContent = "";

  // Create elements
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  // Add content to elements
  h1.textContent = "Welcome to Food For Real!";
  h2.textContent =
    "Being one of the best establishments in God knows where, Food For Real makes quality burgers and provides high-quality customer service for its esteemed customers. Your satisfaction is our top priority, for real!";

  contentDiv.appendChild(h1);
  contentDiv.appendChild(h2);
};

export default homeModule;
