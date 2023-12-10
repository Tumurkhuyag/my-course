require("@babel/polyfill");
import axios from "axios";

async function doSearch(search) {
  try {
    let searhResult = await axios(
      "https://forkify-api.herokuapp.com/api/search?q=" + search
    );

    // Хайлтын дараах зөвхөн жорын илэрцүүдийг харах
    const recipesList = searhResult.data.recipes;
    //  sconsole.log(recipesList);

    // Хайлт доторх аль нэг орцын дэлгэрэнгүйг харах
    let resultDetail = await axios(
      "https://forkify-api.herokuapp.com/api/get?rId=" +
        recipesList[0].recipe_id
    );

    console.log(recipesList[0].title);
    let ingredients = resultDetail.data.recipe.ingredients;
    ingredients.forEach((el) => {
      return console.log(el);
    });
  } catch (error) {
    alert("Асуудал гарлаа: " + error);
  }
}

doSearch("pizza");
