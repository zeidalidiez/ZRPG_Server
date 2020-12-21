const express = require('express');
const BooksService = require('./booksservice.js');
const path = require('path');
const BookRouter = express.Router();
const jsonParser = express.json();

BookRouter
  .route('/')
  .get((req, res, next) => {
    BooksService.getAllTitles(req.app.get('db'))
      .then(titles => {
        res.json(titles);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { title, notes, linksource } = req.body;
    const newTitle = { title, notes, linksource };

    BooksService.insertTitle(req.app.get('db'), newTitle)
      .then(note => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl + `/${note.id}`))
          .json(note);
      })
      .catch(next);
  });

notesRouter
  .route('/:note_id')
  .all((req, res, next) => {
    NotesService.getById(req.app.get('db'), req.params.note_id)
      .then(note => {
        if (!note) {
          return res.status(404).json({
            error: { message: "Note doesn't exists" },
          });
        }
        res.note = note;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json({
      id: res.note.id,
      notename: res.note.name,
      modified: res.note.modified,
      folderid: res.note.folderid,
      content: res.note.content,
    });
  })
  .delete((req, res, next) => {
    NotesService.deleteNote(req.app.get('db'), req.params.note_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = notesRouter;