require("@babel/polyfill");
import Search from "./model/Search";

// Веб аппын төлөв
// - Хайлтын query, үр дүн
// - Тухайн үзүүлж байгаа жор
// - Тухайн үзүүлж байгаа жор
// - Like хийсэн жорууд
// - Захиалж байгаа жорын найрлага

const state = {};

const controlSearch = () => {
  console.log("Дарагдлаа");
  // 1.Вебээс хайлтын түлхүүр үгийг гаргаж авна
  const query = "pizza";

  if (query) {
    // 2.Тухайн түлхүүр үгээр хайдаг шинэ хайлтын обьектийг үүсгэж өгнө
    // 3.Үүсгэсэн обьектоо state -рүүгээ хийнэ
    // 4.Хайлт хийхэд зориулж дэлгэцийн UI бэлтгэнэ
    // 5.Хайлтыг гүйцэтгэнэ
    // 6.Хайлтын үр дүнг дэлгэцэнд үзүүлнэ
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
