const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/books
  axios
    .get("http://localhost:3000/api/book")
    .then(function (response) {
      // console.log(response.data);
      res.render("index", { books: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_book = (req, res) => {
  res.render("add_book");
};
exports.update_book = (req, res) => {
  axios
    .get("http://localhost:3000/api/book", { params: { id: req.query.id } })
    .then(function (bookdata) {
      res.render("update_book", { book: bookdata.data });
    }).catch(err=>{
      res.send(err);
    });
  // res.render("update_book");
};
