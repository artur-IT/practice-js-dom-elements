const buttonSettings = {
  attr: {
    className: "btn",
    title: "super button",
  },
  css: {
    border: "1px solid #336699;",
    padding: "5px 20px;",
    color: "red;",
  },
  text: "Click me!",
};

const element = document.querySelector(".parent-for-button");
const button = document.createElement("button");
element.appendChild(button);

button.classList.add(buttonSettings.attr.className);
button.setAttribute("title", buttonSettings.attr.title);
button.textContent = buttonSettings.text;

for (const styl in buttonSettings.css) button.style.cssText += `${styl}: ${buttonSettings.css[styl]} `;
