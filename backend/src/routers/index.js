const express = require("express");
const router = express.Router();
const ArticleService = require("../services/ArticleService");
const service = new ArticleService();

// Mendapatkan data daftar artikel
router.get("/articles", async ({ res }) => {
  try {
    const result = await service.getArticles();

    res.json({
      status: 200,
      data: result,
      message: "Sukses",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: null,
      message: err.message,
    });
  }
});

// Mendapatkan data artikel dengan id
router.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id artikel " + id);

    const result = await service.getArticleById(id);

    res.json({
      status: 200,
      data: result,
      message: "Sukses",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: null,
      message: err.message,
    });
  }
});

module.exports = router;
