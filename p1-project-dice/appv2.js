// Тоглогчийн шоо хаях ээлж (нэгдүгээр тоглогчийг 0, хоёрдугаа тоглогч 1)-ийг оноох хэсэг
var activePlayer = 1;

// Тоглогч нарын оноог тус тусд нэмж хадгалдаг хэсэг
var scores = [0, 0];

// Тоглогч шоо хаях ээлжиндээ цуглуулж буй оноонуудыг нэмж харуулах хэсэг
var roundScore = 0;

// Санамсаргүй байдлаар шоо аль талаараа буусныг харуулах хэсэг
// var dice = Math.floor(Math.random() * 6) + 1;

// Тоглоом эхлэхэд бэлдэх
document.getElementById("score-0").innerHTML = 0;
document.getElementById("current-0").innerHTML = 0;
document.getElementById("score-1").innerHTML = 0;
document.getElementById("current-1").innerHTML = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
