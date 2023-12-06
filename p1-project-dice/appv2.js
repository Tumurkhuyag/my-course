// Тоглоом дууссан эсэхийг мэдэгдэх хувьсагч
var gameisnotover;

// Тоглогчийн шоо хаях ээлж (нэгдүгээр тоглогчийг 0, хоёрдугаа тоглогч 1)-ийг оноох хэсэг
var activePlayer;

// Тоглогч нарын оноог тус тусд нэмж хадгалдаг хэсэг
var scores;

// Тоглогч шоо хаях ээлжиндээ цуглуулж буй оноонуудыг нэмж харуулах хэсэг
var roundScore;

// document.querySelector(".dice") функцийг дахин дахин ажиллуулахгүйгээр нэг хувьсагч дотор обьект болгож хадгалах
var diceDom = document.querySelector(".dice");
var playerOneDom = document.querySelector(".player-0-panel");
var playerTwoDom = document.querySelector(".player-1-panel");

// New game товч дээр дараагүй ч хамгийн эхний удаа тоглоомыг эхлүүлэх
initGame();

// Тоглоом дууссаныг мэдэгдэх alert
function gameOverNotif() {
  alert("Тоглоом дууссан байна. 'NEW GAME' товчийг дарж шинээр эхлүүлнэ үү!");
}

function initGame() {
  // Тоглоом дууссан эсэхийг шалгах хувьсагч
  gameisnotover = true;

  // Тоглогчийн шоо хаях ээлж (нэгдүгээр тоглогчийг 0, хоёрдугаа тоглогч 1)-ийг оноох хэсэг
  activePlayer = 0;

  // Тоглогч нарын оноог тус тусд нэмж хадгалдаг хэсэг
  scores = [0, 0];

  // Тоглогч шоо хаях ээлжиндээ цуглуулж буй оноонуудыг нэмж харуулах хэсэг
  roundScore = 0;

  // Санамсаргүй байдлаар шоо аль талаараа буусныг харуулах хэсэг
  // var dice = Math.floor(Math.random() * 6) + 1;

  // Тоглоом эхлэхэд бэлдэх
  document.getElementById("score-0").innerHTML = 0;
  document.getElementById("current-0").innerHTML = 0;
  document.getElementById("score-1").innerHTML = 0;
  document.getElementById("current-1").innerHTML = 0;

  // Бүх дизайныг анхны хувилбарт оруулах
  playerOneDom.classList.remove("winner");
  playerTwoDom.classList.remove("winner");
  playerOneDom.classList.remove("active");
  playerTwoDom.classList.remove("active");

  playerOneDom.classList.add("active");
}

// Тоглоом дууссан эсэхийг шалгаж, шоо хаях, оноо нэмэх товчлууруудын эвент листенүүдийг ажиллуулна.

// Шоог алга болгоно
diceDom.style.display = "none";

// Тоглогчийн ээлжийг солих
function switchPlayer() {
  // Current оноог 0 болгож, тоглогчийн ээлжийг солино.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэг болон background өнгийг өөрчилнө.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}

// Тоглогч ялагч болсон эсэхийг шалгаж, ялагчийг тодруулна.
function winnerPlayer() {
  // Ялагч болсон player -ийн DOM -ыг дахин дахин дуудахгүйн тулд нэг хувьсагчид хийж өгсөн
  var playerDom = document.querySelector(".player-" + activePlayer + "-panel");

  // Ялагчийн өнгийг өөрчилж, улаан цэгийг арилгана.
  playerDom.classList.add("winner");
  playerDom.classList.remove("active");

  // Ялсан талын тоглогчийн нэрийг "Winner!!!" болгож өөрчилнө.
  document.getElementById("name-" + activePlayer).textContent = "Winner!!!";

  // Тоглоомыг дууссан төлөвт хувиргана.
  gameisnotover = false;

  diceDom.style.display = "none";
}

// roll dice товч дээр дарах үед eventListener ажиллуулж anonymous call back function дуудаж шоог аль талаараа буусныг харуулдаг болгох
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameisnotover) {
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
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // Current оноог 0 болгож, тоглогчийн ээлжийг солино.
      switchPlayer();
    }
  } else {
    gameOverNotif();
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameisnotover) {
    // Тоглогчийн ээлжийн оноог үндсэн оноо дээр нэмж хадгална.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      winnerPlayer();
    } else {
      // Current оноог 0 болгож, тоглогчийн ээлжийг солино.
      switchPlayer();
    }
  } else {
    gameOverNotif();
  }
});

document.querySelector(".btn-new").addEventListener("click", initGame);
