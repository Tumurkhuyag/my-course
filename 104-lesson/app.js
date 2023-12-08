// axios

// function getWeather(id) {
//   fetch(
//     "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
//       id +
//       "/"
//   )
//     .then((result) => {
//       // result.headers.forEach(e => console.log(e));
//       console.log(result);
//       return result.json();
//     })
//     .then((r) => {
//       let data = JSON.parse(r.contents);
//       //console.log(data);
//       let today = data.consolidated_weather[0];
//       console.log(
//         "Өнөөдрийн " +
//           data.title +
//           " хот дахь температур " +
//           today.min_temp +
//           " -аас " +
//           today.max_temp +
//           " хооронд байна."
//       );
//     });
// }

// getWeather(2487956);
// getWeather(44418);

//json => JAVASCRIPT OBJECT NOTATION
//same origin policy

// jor.html дотроос өгөгдөл татаж үзүүлэв
fetch("http://127.0.0.1:5500/104-lesson/jor.html")
  .then((result) => {
    return result.text();
  })
  .then((r) => {
    console.log(r);
    let json = JSON.parse(r);
    console.log(`Зохиогч: ${json.author}`);
  });
