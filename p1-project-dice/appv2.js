// Тоглогчийн шоо хаях ээлж (нэгдүгээр тоглогчийг 0, хоёрдугаа тоглогч 1)-ийг оноох хэсэг
var activePlayer = 0;

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

// document.querySelector(".dice") функцийг дахин дахин ажиллуулахгүйгээр нэг хувьсагч дотор обьект болгож хадгалах
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// roll dice товч дээр дарах үед eventListener ажиллуулж anonymous call back function дуудаж шоог аль талаараа буусныг харуулдаг болгох
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 хүртэлх random тоо буулгах
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // css file -руу хандаж шооны зургийг веб дээр гаргаж ирэх
  diceDom.style.display = "block";

  // src attribute -ыг өөрчилж шооны зургийг өөрчлөх
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ
  if (diceNumber !== 1) {
    // Идэвхтэй тоглогчийн оноог буусан шоогоор нэмэгдүүлнэ
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // Current оноог 0 болгож, тоглогчийн ээлжийг солино.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // Улаан цэг болон background өнгийг өөрчилнө.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";
  }
});
