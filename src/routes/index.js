const express = require("express");

const routes = ({ homeRouter, noteRouter }) => {
  const router = express.Router();

  router.use("/", homeRouter);
  router.use("/note", noteRouter);

  return router;
};

module.exports = routes;
