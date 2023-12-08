new Promise((resolve, reject) => {
  console.log("Promise ажиллаж байна...");

  // Зураг таних

  // Бүх зүйл амжилттай болбол resolve функцийг дуудна.
  resolve("Зургийг хөрвүүлж дууслаа.");

  // Асуудал үүсвэл reject функцийг дуудна.
  reject("Зураг хэт том байна...");
})
  .then((result) => console.log("Амжилттай : " + result))
  .catch((error) => console.log("Асуудал гарлаа : " + error));

// fetch, axios.get гэх мэт гадны функцууд ихэвчлэн ашиглана
