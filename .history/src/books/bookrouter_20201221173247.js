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
      .then(title => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl + `/${title.id}`))
          .json(title);
      })
      .catch(next);
  });

BookRouter
  .route('/:title_id')
  .all((req, res, next) => {
    BooksService.getById(req.app.get('db'), req.params.title_id)
      .then(title => {
        if (!title) {
          return res.status(404).json({
            error: { message: "Title doesn't exists" },
          });
        }
        res.title = title;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json({
      id: res.title.id,
      title: res.title.title,
      goal: res.title.goal,
      notes: res.title.notes,
      linksource: res.title.linksource,
    });
  })
  .delete((req, res, next) => {
    BooksService.deleteTitle(req.app.get('db'), req.params.title_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = BookRouter;