// ES5
// ------------------------------------
console.log("------------------------ ES5 ------------------------");
function translate5(question, lang) {
  if (lang === undefined) lang = "mn";
  switch (lang) {
    case "mn":
      console.log("Орчуулах: " + question);
      break;

    case "en":
      console.log("Translate: " + question);
      break;
  }
}

translate5("Таныг хэн гэдэг вэ?", "en");
translate5("Батула сүү уулаа.");
translate5("Том Улаанбаатарт амьдардаг.");
translate5("Uno is UX designer.", "mn");

console.log("------------------------ ES6 ------------------------");

function translate6(question, lang = "en") {
  switch (lang) {
    case "mn":
      console.log("Орчуулах: " + question);
      break;

    case "en":
      console.log("Translate: " + question);
      break;
  }
}

translate6("Таныг хэн гэдэг вэ?", "en");
translate6("Батула сүү уулаа.");
translate6("Том Улаанбаатарт амьдардаг.");
translate6("Uno is UX designer.", "mn");
