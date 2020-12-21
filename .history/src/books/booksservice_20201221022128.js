const BooksService = {
    getAllTitles(knex) {
      return knex.select('*').from('readnext');
    },
    insertTitle(knex, newTitle) {
      return knex
        .insert(newTitle)
        .into('readnext')
        .returning('*')
        .then(rows => {
          return rows[0];
        });
    },
    getById(knex, id) {
      return knex.from('readnext').select('*').where('id', id).first();
    },
    deleteTitle(knex, id) {
      return knex('readnext').select('*').where({ id }).delete();
    }
  };
  
  module.exports = BooksService;