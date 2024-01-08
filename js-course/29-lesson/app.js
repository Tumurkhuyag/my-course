// Scope chaining буюу функц нь гадна өөрийгөө агуулах функцууд -аас гинжин байдлаар хувьсагч нарыг нь авч ашиглах чадвартай

var fullname = "Tumurkhuyag";
greetings();

function greetings() {
  var friend = "Tom";
  var canYou = "Can you? ";

  console.log("Hello " + friend);
  var canPrint = "Энийг хэвлэж чадаж байна " + friend;

  ask();

  function ask() {
    console.log(fullname);
    console.log("How you doing? " + fullname);

    var son = {
      firstName: "Өрнөх",
    };

    test();

    function test() {
      console.log(canPrint);

      finalTest();

      function finalTest() {
        console.log(canYou + son.firstName);
      }
    }
  }
}
