const colorNames = ["red", "orange", "green", "brown", "pink", "purple", "violet", "white", "salmon", "forestgreen",
"orangered", "hotpink", "gold", "khaki", "lime", "teal", "skyblue", "navy", "silver"];

const btn = document.querySelector(".btn");
const colorValue = document.getElementById("color-value");
const text = document.getElementById('text');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    colorValue.textContent = colorNames[randomNumber];
    colorValue.style.color = colorNames[randomNumber];    
    document.body.style.backgroundColor = colorNames[randomNumber];
    text.style.color = colorNames[randomNumber];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colorNames.length);
}
