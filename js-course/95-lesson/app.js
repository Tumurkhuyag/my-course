let arr = [100, 21, 30, 45, 500, 6, 70];

// 1-р арга
let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
}
console.log("sum1: ", sum1);

// 2-р арга
let sum2 = 0;
for (let e of arr) {
  sum2 += e;
}
console.log("sum2: ", sum2);

// 3-р арга
let sum3 = 0;
arr.forEach(function (e) {
  sum3 = sum3 + e;
});
console.log("sum3: ", sum3);

// 4-р арга
let sum4 = 0;
arr.forEach((e) => (sum4 = sum4 + e));
console.log("sum4: ", sum4);

// 5 -р арга reduce
let sum5 = arr.reduce((a, b) => a + b);
console.log("sum5: ", sum5);

// Хамгийн бага тоог олъё
console.log(
  "Бага нь: ",
  arr.reduce((min, b) => (b < min ? b : min))
);

// Хамгийн их тоог олъё
console.log(
  "Их нь: ",
  arr.reduce((max, b) => (b > max ? b : max))
);

// 10 -т хуваагддаг тоонуудыг нь хайж олъё
let found = arr.filter((e) => {
  if (e % 10 === 0) return e;
});
console.log("10-т хуваагддаг: ", found);
