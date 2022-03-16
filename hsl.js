const colorValue = document.getElementById('color-value');
const btn = document.querySelector('.btn');
const text = document.getElementById('text');


btn.addEventListener('click', ()=> {
   let hslColor = hslValue();
   colorValue.textContent = hslColor;
   colorValue.style.textTransform = "uppercase";
   colorValue.style.color = hslColor;
   document.body.style.backgroundColor = hslColor;
   text.style.color = hslColor;
});


function hslValue() {
   return `hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, ${Math.floor(Math.random()*100)}%)`
}