const colorValue = document.getElementById("color-value");
const btn = document.querySelector(".btn");
const text = document.getElementById("text");


btn.addEventListener("click", () => {
   const rgbColor = rgbValue();
   document.body.style.backgroundColor = rgbColor;
   colorValue.textContent = rgbColor;
   colorValue.style.textTransform = "uppercase";
   colorValue.style.color = rgbColor;
   text.style.color = rgbColor;
});


function rgbValue() {
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   return `rgb(${r}, ${g}, ${b})`;
}
