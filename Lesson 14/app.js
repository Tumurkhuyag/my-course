function userInfo(name, job, avgScore) {
  switch (job) {
    case "Instructor":
      console.log(name + " бол дизайны багш!");
      break;
    case "Designer":
      console.log(name + " бол дижитал дизайнер!");
      break;
    case "Coder":
      console.log(name + " апп хөгжүүлэгч!");
      break;
    default:
      console.log(name + " дээрх гурваас өөр ажил хийдэг!");
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
}

userInfo("Tom", "Designer", 85);
userInfo("Uno", "Coder", 100);
