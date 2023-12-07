// Энгийн функцийн this нь агуулж буй обьектоо заадаг
// -------------------------
// let human = {
//   name: "Сараа",
//   mendleh: function () {
//     // let that = this;
//     console.log("Сайн байна уу, Би бол " + this.name);
//     setTimeout(function () {
//       console.log("Намайг " + this.name + " гэдэг...");
//     }, 1000);
//   },
// };
// human.mendleh();
// window.name = "Saraa";

// Суман функц-д өөрийн гэсэн this байдаггүй. Тиймээс суман функц дотор бичигдсэн this заагч нь функцийнхаа гаднах обьектийг буюу агуулж буй обьектийнхоо this -ийг заадаг
// -------------------------
// let human1 = {
//   name: "Батаа",
//   mendleh: function () {
//     console.log("Сайн байна уу, Би бол " + this.name);
//     setTimeout(() => console.log("Намайг " + this.name + " гэдэг..."), 1000);
//   },
// };
// human1.mendleh();

// Ялгааг сайн ажиглаарай
// -------------------------
let angi = {
  name: "Програм хангамж",
  info: function () {
    let human1 = {
      name: "Батболд",
      mendleh: () => {
        console.log("Суман функц: 'Сайн байна уу, би бол " + this.name + "'");
        console.log("Суман функц: 'Сайн байна уу, би бол " + window.name + "'");
        setTimeout(
          () => console.log("Суман функц: 'Намайг " + this.name + " гэдэг...'"),
          500
        );
      },
      hello: function () {
        console.log("Энгийн функц: 'Hello " + this.name + "'");
      },
    };

    human1.mendleh();
    human1.hello();
  },
};
window.name = "Saraa";

angi.info();

// human1.mendleh();
// human1.hello();
