console.log("DOM");

// struktura do wykorzystania w pętli
const menuItems = [
  { text: "start", url: "/" },
  { text: "galeria", url: "/gallery" },
  { text: "kontakt", url: "/contact" },
];

const newUl = document.createElement("ul");
document.querySelector("nav").appendChild(newUl);
// FIRST solution
// newUl.innerHTML = `
// <li>
//   <a href="/">start</a>
// </li>
// <li>
//   <a href="/gallery">galeria</a>
// </li>
// <li>
//   <a href="/contact">kontakt</a>
// </li>`;

// SECOND solution
menuItems.forEach((item) => {
  const li = document.createElement("li");
  newUl.appendChild(li);
  li.innerHTML = `<a href="${item.url}">${item.text}</a>`;
});
