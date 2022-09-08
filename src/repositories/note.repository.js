const BaseRepository = require("./base.repository");

module.exports = class NoteRepository extends BaseRepository {
  constructor({ Note }) {
    super(Note);
  }
};
