# READNEXT-SERVER

This is the backend server for READNEXT client: frontend @ 
https://github.com/zeidalidiez/ZRPG_Frontend

Live demo of app hosted on vercel:
https://readnext.vercel.app/

Live version of server hosted on heroku 
https://cryptic-sea-32900.herokuapp.com

# Core Technologies

    Node.js
    PostgresSQL
    express.js
    JWT
    XSS

# Services

    /books: GET, POST, DELETE


# Local/Development Set-up

    Requirements: Node.js, npm, postgresql, enzyme

1. Clone this repo
2. Set up database table as habitually:

$ createdb [connection-option...][option...] readnext

3. Set up .env
        Must Include:
        NODE_ENV
        PORT
        MIGRATION_DB_HOST
        MIGRATION_DB_PORT
        MIGRATION_DB_NAME
        MIGRATION_DB_USER
        
4. Install node_modules and migrate:

.../readnext-server $ npm install
.../readnext-server $ npm run migrate

5. Seed database with sample data

.../readnext-server $ psql -d readnext -f ./seeds/seed.readnext_tables.sql
