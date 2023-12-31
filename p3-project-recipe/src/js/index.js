require("@babel/polyfill");
import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/Recipe";

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
    renderLoader(elements.searchResultDiv);

    // 4.Хайлтыг гүйцэтгэнэ
    await state.search.doSearch();

    // 5.Хайлтын үр дүнг дэлгэцэнд үзүүлнэ
    // Хайлтын үр дүнд ирсэн бүх утгуудыг renderRecipes -аар боловсруулахаар дамжуулна
    clearLoader();
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

elements.pageButtons.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-inline");

  if (btn) {
    const gotoPageNumber = parseInt(btn.dataset.goto, 10);
    searchView.clearSearchResult();
    searchView.renderRecipes(state.search.result, gotoPageNumber);
  }
});

// Жорын контроллер
// ---------------------
const controlRecipe = async () => {
  // 1) URL-аас ID-ийг салгах
  const id = window.location.hash.replace("#", "");

  // 2) Жорын моделийг үүсгэх
  state.recipe = new Recipe(id);

  // 3) UI дэлгэц бэлтгэх

  // 4) Жороо татаж авчрах
  await state.recipe.getRecipe();

  // 5) Жорыг гүйцэтгэх хугацаа болон орцыг тооцох
  state.recipe.calcTime();
  state.recipe.calcHuniiToo();

  // 6) Жорыг дэлгэцэнд гаргах
  console.log(state.recipe);
};
window.addEventListener("hashchange", controlRecipe);
