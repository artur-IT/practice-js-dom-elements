const element = document.querySelectorAll("[data-url]");
const link = document.querySelector("a");

element.forEach((item, idx) => {
  console.log(item.dataset.url, idx);
  item.href = item.dataset.url;
});
