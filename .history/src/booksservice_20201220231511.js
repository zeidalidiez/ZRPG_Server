const BooksService = {
    getAllTitles(knex) {
      return knex.select('*').from('readnext');
    },
    insertNote(knex, newNote) {
      return knex
        .insert(newNote)
        .into('noteful_notes')
        .returning('*')
        .then(rows => {
          return rows[0];
        });
    },
    getById(knex, id) {
      return knex.from('noteful_notes').select('*').where('id', id).first();
    },
    deleteNote(knex, id) {
      return knex('noteful_notes').select('*').where({ id }).delete();
    }
  };
  
  module.exports = BooksService;