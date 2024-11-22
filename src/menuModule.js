const menuModule = () => {
  // Select div#content inside template.html
  const contentDiv = document.querySelector("#content");

  // Clear div#content
  contentDiv.textContent = "";
};

export default menuModule;
