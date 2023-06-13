document.body.classList.add("loading");

window.addEventListener("load", function () {
  console.log("loaded");
});

setTimeout(function () {
  document.body.classList.remove("loading");
}, 2000);
