const search = document.querySelector(".search");
const bar = document.querySelector(".search-bar");
const icon = document.querySelector(".clear-icon");
const line = document.querySelector(".line");

document.addEventListener("click", function (event) {
  const outsideClick = !bar.contains(event.target);
  const outClick = !search.contains(event.target);

  if (outsideClick) {
    bar.classList.remove("shadow");
  } else if (!outClick) {
    bar.classList.add("shadow");
  }
});

search.addEventListener("keyup", function () {
  const searchVal = document.getElementById("search").value;
  console.log(searchVal);

  if (searchVal.length > 0) {
    icon.classList.remove("hide");
    line.classList.remove("hide");
  } else {
    icon.classList.add("hide");
    line.classList.add("hide");
  }
});

icon.addEventListener("click", function () {
  document.getElementById("search").value = "";
  line.classList.add("hide");
  icon.classList.add("hide");
});
