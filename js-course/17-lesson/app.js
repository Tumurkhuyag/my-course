var human = {
  name: "Tom",
  gender: "He",
  job: "UX designer",
  hobby: "eating",
  address: {
    building: "Building 29",
    city: "Ulaanbaatar",
    country: "Mongolia",
  },
};

var uxCourse = {
  name: "UX design fundamentals",
  duration: 14,
  auhtor: human,
  price: 350000,
  discount: 50000,
  discountExpirationDate: "2023.1.31",
  information: function () {
    console.log(
      this.name +
        " нь UX/UI дизайнер болохыг хүсч буй хүн бүрт зориулсан " +
        this.duration +
        " хоногийн эрчимжүүлсэн сургалт юм."
    );
  },

  discountPercent: function () {
    return Math.round((this.discount / this.price) * 100);
  },

  discountedPrice: function () {
    return this.price - this.discount;
  },

  discountInfo: function () {
    console.log(
      this.name +
        " сургалт " +
        this.discountExpirationDate +
        " хүртэл " +
        this.price +
        " төгрөгөөс " +
        this.discountedPrice() +
        " төгрөг болж " +
        this.discount +
        " төгрөг буюу " +
        this.discountPercent() +
        "% хямдарлаа."
    );
  },
};

var figmaCourse = {
  name: "Fimga Мастер",
  duration: 28,
  auhtor: human,
  price: 500000,
  discount: 50000,
  discountExpirationDate: "2023.1.31",
  information: function () {
    console.log(
      this.name +
        " нь UX/UI дизайнер болохыг хүсч буй хүн бүрт зориулсан " +
        this.duration +
        " хоногийн эрчимжүүлсэн сургалт юм."
    );
  },

  discountPercent: function () {
    return Math.round((this.discount / this.price) * 100);
  },

  discountedPrice: function () {
    return this.price - this.discount;
  },

  discountInfo: function () {
    console.log(
      this.name +
        " сургалт " +
        this.discountExpirationDate +
        " хүртэл " +
        this.price +
        " төгрөгөөс " +
        this.discountedPrice() +
        " төгрөг болж " +
        this.discount +
        " төгрөг буюу " +
        this.discountPercent() +
        "% хямдарлаа."
    );
  },
};

// var userSearchKeyword = "country";
var userSearchKeyword = "city";
// var userSearchKeyword = "building";

console.log(uxCourse.auhtor.address.city);
console.log(uxCourse["auhtor"]["address"][userSearchKeyword]);
uxCourse.information();
uxCourse.discountInfo();

figmaCourse.discountInfo();
