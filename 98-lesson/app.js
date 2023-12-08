const first = () => {
  console.log(`Нэгдүгээр функц : Сайн байна уу`);
  second();
  console.log(`Нэгдүгээр функц : Баяртай`);
};

const second = () => {
  setTimeout(() => {
    console.log(`Хоёрдугаар функц : Асинк кодоос мэндчилж байна...`);
  }, 5000);
};

first();
