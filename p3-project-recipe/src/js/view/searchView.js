import { elements } from "./base";

// Хайлтын үр дүнд ирсэн массивын нэг элементийг дэлгэцэнд гаргахаар боловсруулна (Private function)
const renderRecipe = (recipe) => {
  console.log(recipe);
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src=${recipe.image_url} alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
  // ul рүү нэмнэ
  elements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

// Textfield дотор бичсэн хайлтын утгыг авна
export const getInput = () => {
  return elements.searchInput.value;
};

// Хайлтын үр дүн ирсэн massiv обьектуудыг авч элемент бүрээр дэлгэцэнд харуулна
export const renderRecipes = (recipes) => {
  recipes.forEach((el) => renderRecipe(el));
};

// Хайлт хийсний дараа хайлт хийх textfield -ийн утгыг цэвэрлэнэ
export const clearSearchlQuery = () => {
  elements.searchInput.value = "";
};

// Хайлтын илэрц доторх бүх жагсаалтуудыг цэвэрлэнэ
export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
};
