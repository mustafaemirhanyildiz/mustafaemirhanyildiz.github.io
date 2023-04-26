var fruitImages = ["img/banana.png", "img/orange-32.png", "img/strawberry.png", "img/watermelon.png", "img/banana.png"];

// Oyun alanı
var gameContainer = document.getElementById("game-container");
var containerWidth = gameContainer.clientWidth;
var containerHeight = gameContainer.clientHeight;

// Skor
var score = 0;
var scoreDisplay = document.getElementById("score");

// Oyuncunun fare tıklaması ile meyveyi toplaması
gameContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("fruit")) {
        event.target.remove();
        score++;
        scoreDisplay.innerHTML = "Skor: " + score;
        if (score === 20) {
            alert("Tebrikler, kazandınız!");
            location.reload();
        }
    }
});

// Meyve oluşturma
function createFruit() {
    var fruit = document.createElement("img");
    fruit.setAttribute("src", fruitImages[Math.floor(Math.random() * fruitImages.length)]);
    fruit.setAttribute("class", "fruit");
    fruit.style.left = Math.floor(Math.random() * (containerWidth-100)) + "px";
    fruit.style.top = Math.floor(Math.random() * (containerHeight-100)) + "px";
    gameContainer.appendChild(fruit);
}

// Yeni meyve oluşturma
setInterval(createFruit, 1000);