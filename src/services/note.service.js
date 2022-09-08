const BaseService = require("./base.service");

module.exports = class NoteService extends BaseService {
  constructor({ noteRepository }) {
    super(noteRepository);
  }
};
