import { elements } from "./base";

// Хайлтын үр дүнд ирсэн массивын нэг элементийг дэлгэцэнд гаргахаар боловсруулна (Private function)
const renderRecipe = (recipe) => {
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

// Хайлт хийсний дараа хайлт хийх textfield -ийн утгыг цэвэрлэнэ
export const clearSearchlQuery = () => {
  elements.searchInput.value = "";
};

// Хайлтын илэрц доторх бүх жагсаалтуудыг цэвэрлэнэ
export const clearSearchResult = () => {
  elements.searchResultList.innerHTML = "";
  elements.pageButtons.innerHTML = "";
};

// Textfield дотор бичсэн хайлтын утгыг авна
export const getInput = () => {
  return elements.searchInput.value;
};

// Хайлтын үр дүн ирсэн massiv обьектуудыг авч элемент бүрээр дэлгэцэнд харуулна
export const renderRecipes = (recipes, currentPage = 1, resPerPage = 10) => {
  // Хайлтын үр дүнг хуудаслаж үзүүлэх
  // Тухайн хуудсанд харагдах item -ууд хэдээс эхлээд хэд дээр дуусахыг томъёолох
  // page = 2, start = 10, end = 20
  const start = (currentPage - 1) * resPerPage;
  const end = currentPage * resPerPage;

  recipes.slice(start, end).forEach(renderRecipe);

  // Хуудаслалтын товчуудыг гаргаж ирэх
  const totalPages = Math.ceil(recipes.length / resPerPage);
  renderButtons(currentPage, totalPages);
};

const renderButtons = (currentPage, totalPages) => {
  let buttonHtml;
  if (currentPage === 1 && totalPages > 1) {
    // 1-р хуудас дээр байна хоёр гэсэн товчыг дарах
    buttonHtml = createButton(2, "next", "right");
  } else if (currentPage > 1 && currentPage < totalPages) {
    // Өмнөх болон дараагийн хуудсын дугаар бүхий товчуудыг үзүүлэх
    buttonHtml = createButton(currentPage - 1, "prev", "left");
    buttonHtml += createButton(currentPage + 1, "next", "right");
  } else if (currentPage === totalPages) {
    // Хамгийн сүүлийн хуудас дээр байна, өмнөх хуудсын дугаар бүхий товчийг дарах
    buttonHtml = createButton(currentPage - 1, "prev", "left");
  }

  elements.pageButtons.insertAdjacentHTML("afterbegin", buttonHtml);
};

// type ===> 'prev', 'next'
const createButton = (
  page,
  type,
  direction
) => `<button class="btn-inline results__btn--${type}" data-goto=${page}>
          <span>Хуудас ${page}</span>
          <svg class="search__icon">
              <use href="img/icons.svg#icon-triangle-${direction}"></use>
          </svg>
      </button>`;
