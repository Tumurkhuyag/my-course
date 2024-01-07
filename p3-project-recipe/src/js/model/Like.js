export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, publisher, img) {
    const like = { id, title, publisher, img };
    this.likes.push(like);
    return like;
  }

  deleteLike(id) {
    // id гэдэг ID-тэй like-ийг индексийг массиваас хайж олно
    const index = this.likes.findIndex((el) => el.id === id);
    // Уг индекс дээрх элементийг массвиваас устгана
    this.likes.splice(index, 1);
  }

  isLiked(id) {
    // if (this.likes.findIndex((el) => el.id === id) === -1) return false;
    // else return true;
    return this.likes.findIndex((el) => el.id === id) !== -1;
  }

  getNumberOfLikes() {
    return this.likes.length;
  }
}
