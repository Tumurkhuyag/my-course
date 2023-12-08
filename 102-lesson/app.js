// Зураг таньдаг функцийг promise ашиглан шийдье
// ---------------------------------------------
let imageRecognition = (imagePath) => {
  return new Promise((resolve, reject) => {
    console.log("Promise ажиллаж байна...");

    // Зураг таних

    // Бүх зүйл амжилттай болбол resolve функцийг дуудна.
    resolve("Зургийг хөрвүүлж дууслаа.");

    // Асуудал үүсвэл reject функцийг дуудна.
    reject("Зураг хэт том байна...");
  });
};

imageRecognition("c:/cat.png")
  .then((result) => {
    console.log("Амжилттай : " + result);
  })
  .catch((error) => {
    console.log("Асуудал гарлаа : " + error);
  });

// Хоолны жор харуулдаг callback бичиглэлийг promise -оор хийлээ
// ---------------------------------------------
let getRecipes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([12, 33, 6, 98, 63]);
    }, 2000);
  });
};

// getRecipes().then((r) => console.log(r));

let getRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        resolve({
          name: "Цуйван",
          author: "Өсөхбаяр",
        });
      },
      2000,
      recipeId
    );
  });
};

// getRecipe(12).then((r) => console.log(r));

let getAuthorRecipe = (author) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (name) => {
        resolve({
          recipeList: [
            {
              name: "Тахианы шөл",
            },
            {
              name: "Туна сэндвич",
            },
            {
              name: "Будаатай хуурга",
            },
          ],
        });
        // reject("Интернет холболт байхгүй байна");
      },
      500,
      author
    );
  });
};

// Promise chaining
getRecipes()
  .then((ids) => {
    console.log(ids);
    return getRecipe(ids[0]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getAuthorRecipe(recipe.author);
  })
  .then((author) => {
    author.recipeList.forEach((element) => {
      console.log(element);
    });
  })
  .catch((error) => {
    console.log(`Асуудал гарлаа: ${error}`);
  });

// ES8 - EcmaScript2017 async, await
// async function getInformation() {
//   try {
//     const ids = await getRecipies();
//     console.log(ids);
//     const jor = await getRecipe(ids[0]);
//     console.log(jor);
//     const nextJor = await getAuthorRecipe(jor.author);
//     console.log(nextJor);
//     return nextJor.name;
//   } catch (error) {
//     console.log("ÐÐ»Ð´Ð°Ð° : " + error);
//   }
// }
