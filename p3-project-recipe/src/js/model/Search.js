require("@babel/polyfill");
import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async doSearch() {
    try {
      let result = await axios(
        "https://forkify-api.herokuapp.com/api/search?q=" + this.query
      );

      // Хайлтын дараах зөвхөн жорын илэрцүүдийг харах
      this.result = result.data.recipes;

      return this.result;
    } catch (error) {
      alert("Асуудал гарлаа: " + error);
    }
  }
}
