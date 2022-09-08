const express = require("express");

module.exports = () => {
  var router = express.Router();

  /* GET home page. */
  router.get("/", function (req, res, next) {
    res.send({ home: "hello world" });
  });

  return router;
};
