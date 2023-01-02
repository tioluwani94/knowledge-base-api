const express = require("express");
const {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleControllers");

const router = express.Router();

router.route("/").get(getArticles).post(createArticle);
router.route("/:id").put(updateArticle).delete(deleteArticle);

module.exports = router;
