const express = require("express");

module.exports = ({ noteService }) => {
  var router = express.Router();

  /* GET home page. */
  router.get(":i/d", async function (req, res, next) {
    const { id } = req.params;
    const note = await noteService.get(id);
    res.send(note);
  });

  router.post("/", async (req, res, next) => {
    const note = req.body;
    const createdNote = await noteService.create(note);
    res.status(201).send(createdNote);
  });

  return router;
};
