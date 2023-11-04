// Тоглоом дууссан эсэхийг хадгалах төлвийн хувьсагч
var isNewGame;

// Тоглогчдын оноог цуглуулдаг хувьсагч
var scores = [];

// Идэвхтэй тоглогчийн ээлжиндээ цуглуулсан оноог хадгалдаг хувьсагч
var roundScore;

// Ялагч болохын тулд цуглуулах оноо
var winnerScore = 100;

// Тоглогчийн ээлжийг хадгалдаг хувьсагч
// Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэв
var activePlayer;

// Шооны зургийг үзүүлэх элементийг DOM -оос хайж олох
var diceDom = document.querySelector(".dice");

// Тоглоом эхлэх
initGame();

function initGame() {
  activePlayer = 0;

  // Тоглоом эхэлсэн төлөвт оруулах
  isNewGame = true;

  scores = [0, 0];
  roundScore = 0;

  // Програм эхлэхэд бэлтгэж бүх утгыг тэглэх код
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  diceDom.style.display = "none";

  document
    .querySelector(".player-0-panel")
    .classList.remove("active", "winner");
  document
    .querySelector(".player-1-panel")
    .classList.remove("active", "winner");

  document.querySelector(".player-0-panel").classList.add("active");

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".btn-roll").classList.remove("inactive-btn");
  document.querySelector(".btn-hold").classList.remove("inactive-btn");
  document.querySelector(".ion-ios-loop").classList.remove("inactive-btn");
  document
    .querySelector(".ion-ios-download-outline")
    .classList.remove("inactive-btn");
}

//Тоглогч hold товч дээр дарж оноогоо хадгалах ба шоо хаях эрхээ дараагийн тоглогчид шилжүүлдэг код
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // Тоглогчийн оноог хадгалдаг код
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээрх оноог өөрчлөх код
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= winnerScore) {
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      var winnerSelector = document.querySelector(
        ".player-" + activePlayer + "-panel"
      );
      winnerSelector.classList.add("winner");
      winnerSelector.classList.remove("active");

      // Товчуудыг идэвхгүй болгож харуулах
      document.querySelector(".btn-roll").classList.add("inactive-btn");
      document.querySelector(".btn-hold").classList.add("inactive-btn");
      document.querySelector(".ion-ios-loop").classList.add("inactive-btn");
      document
        .querySelector(".ion-ios-download-outline")
        .classList.add("inactive-btn");

      // Тоглоомыг дууссан төлөвт оруулах
      isNewGame = false;
    } else {
      // Тоглогчийн шоо хаях эрхийг шилжүүлдэг код
      switchToNextPlayer();
    }
  }
});

// Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // 1-6 хүртэлх санамсаргүй нэг тоог гаргаж авах код
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шоог дэлгэц дээр харуулах код
    diceDom.style.display = "block";

    // Санамсаргүй үүсгэсэн тоог харгалзах шооны зургийг харуулах код
    diceDom.src = "dice-" + diceNumber + ".png";

    // Console дээр шооны тоог шалгах код
    console.log(diceNumber);

    // Буусан шооны нүд нь нэгээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлэх код
    if (diceNumber !== 1) {
      // 1-ээс ялгаатай тоо буусан тохиолдолд идэвхтэй тоглогчийн цуглуулж буй оноог буусан шооны нүдний дүнгээр нэмэгдүүлдэг код
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      // 1 буусан тохиолдолд идэвхтэй тоглогчийн ээлжийг сольдог код
      switchToNextPlayer();
    }
  }
});

function switchToNextPlayer() {
  // Идэвхтэй байсан тоглогчийг оноог тэглэх код
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Дараагийн тоглогчид шоо хаях эрхийг шилжүүлэх код
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлдэг код
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгох
  diceDom.style.display = "none";
}

// Тоглоомыг шинээр эхлүүлэх
document.querySelector(".btn-new").addEventListener("click", initGame);
