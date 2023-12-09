import _ from "lodash";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack.", "It's", "Tom!"], " ");

  return element;
}

document.body.appendChild(component());
