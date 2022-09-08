module.exports = class BaseService {
  constructor(repository) {
    this.repository = repository;
  }
  async get(id) {
    return this.repository.get(id);
  }

  async create(entity) {
    this.repository.create(entity);
  }
};
