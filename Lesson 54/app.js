var tomImg = {
  file: "/Lesson 06/profile-image-Tom.jpg",
  content: "Том",
  identifyImage: function (img, info) {
    console.log(img + " " + info);
    document.getElementById(img).innerHTML = "<img src='" + this.file + "' />";
    document.getElementById(info).innerHTML =
      "Энэ зураг дээр " + this.content + " байгаа нь танигдлаа.";
  },
};

tomImg.identifyImage("img1", "info1");

var unosImg = {
  file: "/Lesson 06/profile-image-Uno.jpg",
  content: "Uno",
};

// BIND
var clonTomImg = tomImg.identifyImage.bind(unosImg, "img2", "info2");
// clonTomImg("img2", "info2");
clonTomImg();

//CALL
tomImg.identifyImage.call(unosImg, "img3", "info3");

//APPLY
var arg = ["img4", "info4"];
tomImg.identifyImage.apply(unosImg, arg);
