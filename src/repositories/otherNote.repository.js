const BaseRepository = require("./base.repository");

module.exports = class OtherNoteRepository extends BaseRepository {
  async get(id) {
    return Promise.resolve({ id, origin: "other repository" });
  }
};
