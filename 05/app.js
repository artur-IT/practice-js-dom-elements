const curr = document.querySelector(".js-curr");
const btn = document.createElement("button");
btn.textContent = "usuń z koszyka";

// ad.1
curr.after(btn);

// ad.2
document.querySelectorAll(".articles__item").forEach((item) => {
  const x = item.children;
  for (elem of x) elem.classList.add("siblings");
});

// ad.3
const parentOne = curr.parentElement;
parentOne.nextElementSibling.title = `${parentOne.nextElementSibling.nodeName}`;

// ad.4
const articles = document.querySelectorAll(".article");
const lastArt = articles[articles.length - 1];
const paragraph = document.createElement("p");
paragraph.textContent = "nowy paragraf";

const lastBtn = lastArt.lastElementChild;
lastBtn.before(paragraph);

// ad.5
const first = document.querySelector(".articles__item");
const templateArt = document.querySelector(".article");

templateArt.before(first.cloneNode(true));
