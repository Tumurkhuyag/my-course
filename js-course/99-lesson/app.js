// Зураг оруулж байхдаа давхар мэдээ унших боломжтой байлгахаар async код бичих
// -------------------------------------------------
// uploadImage(() => console.log("Зураг upload хийгдэж дууслаа."));

// console.log("USA удахгүй дампуурна ...");
// console.log(
//   "Монгол улсын нэг хүнд ногдох ДНБ хэмжээ USA -ыг давж гарлаа. Монголдоо сайхан амьдарцгаая ..."
// );

// function uploadImage(fn) {
//   setTimeout(fn, 5000);
// }

function getRecipe() {
  // Хоолны жоруудыг багцалж харуулахаар id -уудыг серверээс дуудаж байна
  setTimeout(() => {
    const ids = [12, 334, 121, 86];
    console.log(ids);
    // ids[0] буюу 12 id-тай жорын нэр болон зохиогчийг харуулахаар серверээс дуудаж байна
    setTimeout(
      (id) => {
        const jor = {
          name: "Цуйван",
          author: "Өсөхбаяр",
        };
        // Өсөхбаярын оруулсан бусад жоруудыг харуулахаар серверээс дуудаж байна
        setTimeout(
          (zohiogch) => {
            const nextJor = [
              {
                name: "Тахианы шөл",
              },
              {
                name: "Туна сэндвич",
              },
              {
                name: "Будаатай хуурга",
              },
            ];

            nextJor.forEach((element) => {
              console.log(element);
            });
          },
          2000,
          jor.author
        );
        console.log(jor);
      },
      2000,
      ids[0]
    );
  }, 1500);
}

console.log("App ажиллаж эхэллээ...");
getRecipe();
