// Exception handling

try {
  console.log("Програм эхэллээ.");
  var x = prompt("Та 1-100 хооронд тоо оруулна уу");

  console.log("Таны оруулсан тоо бол : " + x);
} catch (error) {
  if (error.message === "prompt is not defined") {
    console.log("Уучлаарай, энэ кодыг зөвхөн броузерийн орчинд ажиллуулна");
    console.log(error.message);
  }
}
