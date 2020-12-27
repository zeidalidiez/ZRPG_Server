Backend for ReadNext - an app to assist in tracking what you want to read next. 

Set up to work with heroku environment variables. 

Instructions: 

* Copy example .env or create .env with the following values 

* [ENV](https://i.imgur.com/FZfxatr.png)

* Deploy to heroku or equivalent.

Query /books to receive json element with the contents of database (equivalent to select * from readnext)

GET/POST to /books/ to fetch or submit a new title from the database

DELETE to /books/:id to delete a title from the database



Utilize react frontend to interface (https://github.com/zeidalidiez/ZRPG_Frontend/tree/master/zrpg)