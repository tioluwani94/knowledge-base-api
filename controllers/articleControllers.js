const asyncHandler = require("express-async-handler");
// @desc   Get articles
// @route  GET /api/articles
// @access Private
const getArticles = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get articles",
  });
});

// @desc   Create articles
// @route  POST /api/articles
// @access Private
const createArticle = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Create article",
  });
});

// @desc   Update articles
// @route  PUT /api/articles/:id
// @access Private
const updateArticle = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update article ${req.params.id}`,
  });
});

// @desc   Delete articles
// @route  DELETE /api/articles/:id
// @access Private
const deleteArticle = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete article ${req.params.id}`,
  });
});

module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
