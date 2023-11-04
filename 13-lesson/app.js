var name = "Tom";
var job = "Designer";

if (job === "Instructor") {
  console.log(name + " бол дизайны багш");
} else if (job === "Designer") {
  console.log(name + " бол дижитал дизайнер");
} else if (job === "Coder") {
  console.log(name + " бол веб болон мобайл хөгжүүлэгч");
} else {
  console.log(name + " дээрх гурваас өөр ажил хийдэг");
}

switch (job) {
  case "Instructor":
    console.log(name + " бол дизайны багш!");
    break;
  case "Designer":
    console.log(name + " бол дижитал дизайнер!");
    break;
  case "Coder":
    console.log(name + " бол веб болон мобайл хөгжүүлэгч!");
    break;
  default:
    console.log(name + " дээрх гурваас өөр ажил хийдэг!");
}

var avgScore = 80;

if (avgScore >= 90) {
  console.log(name + " бол ОНЦ сурлагатан");
} else if (avgScore < 90 && avgScore >= 80) {
  console.log(name + " бол САЙН сурлагатан");
} else if (avgScore < 80 && avgScore >= 70) {
  console.log(name + " бол ДУНД сурлагатан");
} else {
  console.log(name + " бол МУУ сурлагатан");
}

switch (true) {
  case avgScore >= 90:
    console.log(name + " бол ОНЦ сурлагатан");
    break;
  case avgScore < 90 && avgScore >= 80:
    console.log(name + " бол САЙН сурлагатан");
    break;
  case avgScore < 80 && avgScore >= 70:
    console.log(name + " бол ДУНД сурлагатан");
    break;
  default:
    console.log(name + " бол МУУ сурлагатан");
}
