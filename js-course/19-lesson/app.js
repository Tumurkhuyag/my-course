/* var month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]; */

// splice нь massive -аас заасан утгуудыг cut хийж буюу тасалж авдаг
// month.splice(1, 2);

// slice нь massive -аас заасан утгуудыг copy хийж буюу дууриалган олшруулж авдаг
// var summerMonths = month.slice(5, 8);

// console.log(summerMonths);
// console.log(month);

// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart("container", {
  chart: {
    type: "line",
  },
  title: {
    text: "Сарын дундаж температур",
  },
  subtitle: {
    text: "HiChart.js туршилт хийж үзлээ",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Температур (°C)",
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "Улаанбаатар",
      data: [
        16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8,
      ],
    },
    {
      name: "Эрдэнэт",
      data: [
        -2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9,
      ],
    },
    {
      name: "Дархан",
      data: [
        -1.9, -9.6, -2.6, 7.8, 11.2, 13.5, 20.6, 13.5, 9.0, 3.5, 1.0, -4.9,
      ],
    },
  ],
});
