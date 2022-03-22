const pool = require("../connection");
const mapper = require("../utils/mapper");

/**
 * Class berisi fungsi logika untuk mengambil data dari database
 */
class ArticleService {
  async getArticles() {
    try {
      const query = {
        text: "SELECT * FROM articles",
      };

      const result = await pool.query(query);

      return result.rows.map((r) => mapper(r));
    } catch (err) {
      throw err;
    }
  }

  async getArticleById(id) {
    try {
      console.log("data id di service" + id);
      const query = {
        text: "SELECT * FROM articles WHERE id = $1",
        values: [id],
      };

      const result = await pool.query(query);

      if (!result.rowCount) {
        throw new Error(`Data dengan id ${id} tidak ditemukan.`);
      }

      return mapper(result.rows[0]);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ArticleService;
