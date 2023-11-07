
// loadComponents.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/Components/Header/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#header").innerHTML = data;
    });

  fetch("/Components/Footer/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#footer").innerHTML = data;
    });
});
