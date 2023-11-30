var human = (function () {
  // Data incapsulation
  // Private data
  var thinking = "Javascript is so confusing";
  // Private function
  function greeting() {
    return "Hi, How are you?";
  }
  function cardioСascularSystem() {}
  function respiratorySystem() {}
  function nervousSystem() {}
  function digestiveSystem() {}

  return {
    // Public service
    listening: function (recievedWord) {
      if (recievedWord === "Hello") {
        console.log(greeting());
      }
      thinking = "Javascript is awesome";
      cardioСascularSystem();
      respiratorySystem();
      nervousSystem();
      digestiveSystem();
    },
  };
})();

human.listening("Hello");
