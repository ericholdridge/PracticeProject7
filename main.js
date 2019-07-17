let items = document.querySelector(".items-right");
document.getElementById("burger").addEventListener("click", function(e) {
  e.preventDefault();
  items.classList.toggle("hide");
});
