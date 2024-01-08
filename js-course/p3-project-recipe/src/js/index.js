require("@babel/polyfill");
import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
import Recipe from "./model/Recipe";
import List from "./model/List";
import Like from "./model/Like";
import * as likesView from "./view/likesView";
import * as listView from "./view/listView";
import {
  renderRecipe,
  clearRecipe,
  highlightSelectedRecipe,
} from "./view/recipeView";

// Веб аппын төлөв
// - Хайлтын query, үр дүн
// - Тухайн үзүүлж байгаа жор
// - Тухайн үзүүлж байгаа жор
// - Like хийсэн жорууд
// - Захиалж байгаа жорын найрлага

const state = {};

// Хайлтын контроллер = Model ==> Controller <== View
// ---------------------
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

  // URL дээр ID байгаа эсэхийг шалгана
  if (id) {
    // 2) Жорын моделийг үүсгэх
    state.recipe = new Recipe(id);

    // 3) UI дэлгэц бэлтгэх
    clearRecipe();
    renderLoader(elements.recipeDiv);
    highlightSelectedRecipe(id);

    // 4) Жороо татаж авчрах
    await state.recipe.getRecipe();

    // 5) Жорыг гүйцэтгэх хугацаа болон орцыг тооцох
    clearLoader();
    state.recipe.calcTime();
    state.recipe.calcHuniiToo();

    // 6) Жорыг дэлгэцэнд гаргах
    renderRecipe(state.recipe, state.likes.isLiked(id));
  }
};

// window.addEventListener("hashchange", controlRecipe);
// window.addEventListener("load", controlRecipe);
["hashchange", "load"].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);

window.addEventListener("load", (e) => {
  // Шинээр like моделийг апп эхлэхэд үүсгэнэ
  if (!state.likes) {
    state.likes = new Like();
  }

  // Like цэсийг гаргах эсэхийг шийдэх
  likesView.toggleLikeMenu(state.likes.getNumberOfLikes());

  // Local storage дотор Like -ууд байвал цэсэнд нэмж харуулна
  state.likes.likes.forEach((like) => likesView.renderLike(like));
});

// Найрлаганы контроллер
// ---------------------------------
const controlList = () => {
  // Найрлаганы моделийг үүсгэнэ
  state.list = new List();

  // Өмнө нь харагдаж байсан найрлагуудыг листээс арилгана
  listView.clearItems();

  // Уг модел рүү одоо харагдаж байгаа жорын бүх найрлагыг авч хийнэ
  state.recipe.ingredients.forEach((n) => {
    // Тухайн найрлагыг моделруу хийнэ
    const item = state.list.addItem(n);
    // Тухайн найрлагыг дэлгэцэнд гаргана
    listView.renderItem(item);
  });
};

// Like контроллер
// ---------------------------------
const controlLike = () => {
  // 1. Like -ийн моделийг үүсгэнэ
  if (!state.likes) {
    state.likes = new Like();
  }

  // 2. Одоо харагдаж байгаа жорын Like -ийг олж авах
  const currentRecipeId = state.recipe.id;

  // 3. Энэ жорыг Like хийсэн эсэхийг шалгах
  if (state.likes.isLiked(currentRecipeId)) {
    // Like хийсэн бол Like болиулах
    state.likes.deleteLike(currentRecipeId);
    // Like -ийн цэснээс устгана
    likesView.deleteLike(currentRecipeId);
    // Like товчны дарсан төлвийг болиулах
    likesView.toggleLikeBtn(false);
  } else {
    // Like хийгээгүй бол Like хийх
    const newLike = state.likes.addLike(
      currentRecipeId,
      state.recipe.title,
      state.recipe.publisher,
      state.recipe.image_url
    );

    // Like цэсэнд Like хийсэн жорыг оруулах
    likesView.renderLike(newLike);

    // Like товчийг дарсан төлөвтэй харагдуулах
    likesView.toggleLikeBtn(true);
  }

  likesView.toggleLikeMenu(state.likes.getNumberOfLikes());
};

elements.recipeDiv.addEventListener("click", (e) => {
  // recipe__btn class болон тэрэн дотор байгаа тект, айкон дээр дарахад дарсанд тооцдог болгох
  if (e.target.matches(".recipe__btn, .recipe__btn *")) {
    controlList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    controlLike();
  }
});

elements.shoppingList.addEventListener("click", (e) => {
  // Листийн дотроос click хийсэн item -ийн uniq id -ийг барьж авсан
  const id = e.target.closest(".shopping__item").dataset.itemid;

  // Олдсон ID-тэй орцыг моделоос устгана
  state.list.deleteItem(id);

  // Дэлгэцээс ийм ID-тэй орцыг олж устгана
  listView.deleteItem(id);
});
