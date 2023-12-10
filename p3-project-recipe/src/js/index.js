require("@babel/polyfill");
import Search from "./model/Search";
import { elements } from "./view/base";
import * as searchView from "./view/searchView";

// Веб аппын төлөв
// - Хайлтын query, үр дүн
// - Тухайн үзүүлж байгаа жор
// - Тухайн үзүүлж байгаа жор
// - Like хийсэн жорууд
// - Захиалж байгаа жорын найрлага

const state = {};

const controlSearch = async () => {
  // 1.Вебээс хайлтын түлхүүр үгийг гаргаж авна
  const query = searchView.getInput();

  if (query) {
    // 2.Тухайн түлхүүр үгээр хайдаг шинэ хайлтын обьектийг үүсгэж,үүсгэсэн обьектоо state -рүүгээ хийнэ
    state.search = new Search(query);
    // 3.Хайлт хийхэд зориулж дэлгэцийн UI бэлтгэнэ
    searchView.clearSearchlQuery();
    searchView.clearSearchResult();

    // 4.Хайлтыг гүйцэтгэнэ
    await state.search.doSearch();

    // 5.Хайлтын үр дүнг дэлгэцэнд үзүүлнэ
    // Хайлтын үр дүнд ирсэн бүх утгуудыг renderRecipes -аар боловсруулахаар дамжуулна
    if (state.search.result === undefined) {
      alert(query + " нэртэй илэрц олдсонгүй");
    } else {
      searchView.renderRecipes(state.search.result);
    }
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
