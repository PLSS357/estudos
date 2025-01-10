const h1 = document.getElementById("soares");
const button = document.getElementById("jo");

const currentColor = window.getComputedStyle(h1).color;

if (currentColor === "rgb(0, 0, 0)") {
  button.addEventListener("click", () => {
    h1.style.color = "purple";
  });
} 