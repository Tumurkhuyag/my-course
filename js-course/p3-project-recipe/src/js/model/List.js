import uniqid from "uniqid";
export default class List {
  constructor() {
    this.items = [];
  }

  deleteItem(id) {
    // id гэдэг ID-тэй орцын индексийг массиваас хайж олно
    const index = this.items.findIndex((el) => el.id === id);
    // Уг индекс дээрх элементийг массвиваас устгана
    this.items.splice(index, 1);
  }

  // item дотор Uniq id нэмж үүсгэдэг функц бичсэн
  addItem(item) {
    let newItem = {
      id: uniqid(),
      // item: item,
      item,
    };

    this.items.push(newItem);

    return newItem;
  }
}
