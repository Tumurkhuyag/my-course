// Convert List to Array
var fieldsArr = Array.prototype.slice.call(fields);
fieldsArr.forEach(function (el, index, array) {
  el.value = "";
});

fieldsArr[0].focus();
