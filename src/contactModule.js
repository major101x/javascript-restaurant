const contactModule = () => {
  // Select div#content inside template.html
  const contentDiv = document.querySelector("#content");

  // Clear div#content
  contentDiv.textContent = "";

  // Creates wrapper for contactModule
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  contentDiv.appendChild(contactDiv);

  // Creates hours for opening/closing of restaurant
  function createHours(day, time) {
    const hourP = document.createElement("p");
    const daySpan = document.createElement("span");
    const timeSpan = document.createElement("span");

    daySpan.classList.add("day");
    timeSpan.classList.add("time");

    daySpan.textContent = day + ": ";
    timeSpan.textContent = time;

    hourP.appendChild(daySpan);
    hourP.appendChild(timeSpan);
    hoursDiv.appendChild(hourP);
  }

  // Create elements
  const phoneNumberDiv = document.createElement("div");
  const addressDiv = document.createElement("div");
  const hoursDiv = document.createElement("div");

  // Add classes to elements
  phoneNumberDiv.classList.add("phone-number");
  addressDiv.classList.add("address");
  hoursDiv.classList.add("hours");

  // Add content to elements
  phoneNumberDiv.textContent = "📞 123-456-789";
  addressDiv.textContent = "🏠 60, Godknowswhere, CBO, Antartica";

  contactDiv.appendChild(phoneNumberDiv);
  contactDiv.appendChild(addressDiv);
  contactDiv.appendChild(hoursDiv);

  // call createHours to append hours to hoursDiv
  createHours("Mon - Fri", "8:00am - 6:00pm");
  createHours("Sat & Sun", "10:00am - 10:00pm");
};

export default contactModule;
