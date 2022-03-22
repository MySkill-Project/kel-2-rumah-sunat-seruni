import axios from "axios";

const baseUrl = "http://localhost:3002/api/v1";
const articlesPath = "/articles";

class ArticleServices {
  async getArticles() {
    const result = await axios.get(`${baseUrl}${articlesPath}`);
    return result.data;
  }

  async getArticleById(id) {
    const result = await axios.get(`${baseUrl}${articlesPath}/${id}`);
    return result.data;
  }
}

export default ArticleServices;
