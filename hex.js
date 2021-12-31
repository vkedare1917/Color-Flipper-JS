const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorValue = document.getElementById("color-value");
const text = document.getElementById("text");
const btn = document.querySelector(".btn");


btn.addEventListener('click', function() {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hexValues[randomNumber()]
    }
    colorValue.textContent = hexColor;
    colorValue.style.color = hexColor;
    text.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hexValues.length);
}