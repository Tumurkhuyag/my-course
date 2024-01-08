var html = "сайн уу";
html = html.replace("уу", "байна уу");
console.log(html);

var html = "<p>сайн уу</p>";
html = html.replace("p", "strong");
console.log(html);

// Глобал байдлаар HTML tag таньж солино
var html = "<p>сайн уу</p>";
html = html.replace(/p/g, "strong");
console.log(html);

// Глобал байдлаар том жижиг үсэг гэж ялгалгүй HTML tag таньж солино
var html = "<p>сайн уу</p><p>сайн уу</P>";
html = html.replace(/p/gi, "strong");
console.log(html);

var incSection = document.querySelector(".income");
incSection.insertAdjacentHTML("beforeend", "Salary: 250000");
incSection.insertAdjacentHTML("beforeend", "<br> Book: 50000");
incSection.insertAdjacentHTML("beforeend", "<br> Project: 450000");

var incSection = document.querySelector(".expense");
incSection.insertAdjacentHTML("beforeend", "<br> Food: 50000");
