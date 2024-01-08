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
// Өгөгдсөн массив бүхий жорын мэдээллүүдийн ID-г татах
let getRecipes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([12, 33, 6, 98, 63]);
    }, 1000);
  });
};

// getRecipes().then((r) => console.log(r));

// Өгөгдсөн ID -тай жорын мэдээллийг татах
let getRecipe = (recipeId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        resolve({
          name: "Цуйван",
          author: "Өсөхбаяр",
        });
      },
      1000,
      recipeId
    );
  });
};

// getRecipe(12).then((r) => console.log(r));

// Өгөгдсөн зохиогчийн жорыг татах
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
      1000,
      author
    );
  });
};

// Promise chaining буюу дараалсан хүсэлтүүд илгээх
// ---------------------------------
// getRecipes()
//   .then((ids) => {
//     console.log(ids);
//     return getRecipe(ids[0]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//     return getAuthorRecipe(recipe.author);
//   })
//   .then((author) => {
//     author.recipeList.forEach((element) => {
//       console.log(element);
//     });
//   })
//   .catch((error) => {
//     console.log(`Асуудал гарлаа: ${error}`);
//   });

// ES8 - EcmaScript2017 async, await
async function getInformation() {
  try {
    const ids = await getRecipes();
    console.log(ids);
    const recipe = await getRecipe(ids[0]);
    console.log(recipe);
    const list = await getAuthorRecipe(recipe.author);
    list.recipeList.forEach((element) => {
      console.log(element);
    });

    return [list.recipeList, recipe.author];
  } catch (error) {
    console.log("Алдаа : " + error);
  }
}

// const fn = getInformation();
// console.log(fn);

getInformation().then((result) => {
  let a = "";
  result[0].forEach((element) => {
    return (a = a + `<p>${element.name}</p>`);
  });
  let text = `<p><strong>${result[1]} -ийн оруулсан жорууд</strong></p>`;
  document.getElementById("list").innerHTML = text + a;
});
// Нэг дор ажиллуулах
// ---------------------------------
// getRecipes().then((ids) => {
//   console.log(ids);
// });

// getRecipe(12).then((recipe) => {
//   console.log(recipe);
// });

// getAuthorRecipe("Өсөхбаяр").then((author) => {
//   author.recipeList.forEach((element) => {
//     console.log(element);
//   });
// });
