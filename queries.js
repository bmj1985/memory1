const database = require('./database-connection');

module.exports = {
  list() {
    return database('resolution');
  },
  read(id) {
    return database('resolution')
      .where('id', id)
      .first();
  },
  create(resolution) {
    return database('resolution')
      .insert(resolution)
      .returning('*')
      .then(resolution => resolution[0]);
  },
  update(id, resolution) {
    return database('resolution')
      .update(resolution)
      .where('id', id)
      .returning('*')
      .then(resolution => resolution[0]);
  },
  delete(id) {
    return database('resolution')
      .delete()
      .where('id', id);
  }
};
