DROP TABLE IF EXISTS readnext;

CREATE TABLE readnext (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title TEXT NOT NULL,
  notes TEXT NOT NULL,
  goal TEXT DEFAULT 'when this should be completed',
  linksource TEXT DEFAULT 'link or source'
);

INSERT INTO readnext (title, notes, goal, linksource)
  VALUES (
    'Also Sprach Zarathurstra',
    'Nietzsches magnum opus',
    '2021',
    'Bookshelf IRL'
  );