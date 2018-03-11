## Galvanize Memory

You're making an API that can list, create, read, update, and delete a collection of New Year's resolutions. The problem is that you're missing a critical part of the API-- the database! Create a database for this API, and interface with it via [Knex.js](https://knexjs.org).

### Setup

Make a local database and setup a `knexfile` to connect to it.

### Migrate

Make a migration that creates the following database table:

`resolution`

| key | name       | data type                 |
| --- | ---------- | ------------------------- |
| PK  | id         | auto-incrementing integer |
|     | dueDate    | date                      |
|     | resolution | text                      |

### Seed

Seed your database with some data:

| field      | value        |
| ---------- | ------------ |
| id         | 1            |
| dueDate    | "1997-02-01" |
| resolution | "Go skiing"  |

| field      | value         |
| ---------- | ------------- |
| id         | 2             |
| dueDate    | "1997-05-01"  |
| resolution | "Do stand-up" |

| field      | value            |
| ---------- | ---------------- |
| id         | 3                |
| dueDate    | "1997-09-01"     |
| resolution | "Start knitting" |

Make sure your next auto-incrementing integer starts with `4`!

### Database connection

Make a connection to your database in the `database-connection.js` file with the appropriate environment data.

### Queries

Fill out the `queries.js` file with the following:

* `list()` should return a promise that resolves with all of the data in the `resolution` table as an array
* `read(id)` should return a promise that resolves with the record with a matching `id` as an object
* `create(resolution)` should return a promise that inserts a resolution object and resolves to the created database record as an object
* `update(id, resolution)` should return a promise that updates a resolution record matching `id` with the data in `resolution` and resolves to the updated database record as an object
* `delete(id)` should return a promise that removes the record matching `id` and resolves to nothing

### Deployment

Deploy this API. Note that you'll need to create a remote database, run your migration and seeds on it, and connect to it in production and your local database in development.

### Notes

* You can test your API locally with `npm test`

Add a link to your https://arcane-shelf-22854.herokuapp.com/resolutions here.

--------------------------------------------------------------------------------

Databases and Postgres

Setting up a real fuckin db:

One time only:
brew update
brew install postgresql
psql —version
brew services list
as needed:
brew services stop postgresql
brew services start postgresql
brew services restart postgresql

For each project:
Make a db:
(from anywhere I think) createdb (name)
(psql --help)

(start in a new folder not in another git repository)
(from project folder)
Initialize npm and install dependencies:
npm init --yes
npm install --save knex pg
npm install knex -g (maybe not needed)
npm install body-parser —save
npm install dotenv —save
touch .env
npm install express —save

Initialize as git repository and set remote:
git init
git remote add (remote name) (url)

Fire up knex, migrate:
knex init
edit your new knexfile.js
knex migrate:make (table name)
update migrations file with appropriate export up and export down
knex migrate:latest
psql (dbname) 
\d+ (table name) (to see your schema)

if needed (knex migrate:rollback)

Knex seed:
knex seed:make data01
go edit the seed file
knee seed:run
psql (dbname) 
SELECT * FROM (table name);

Deploy:
nodemon or npm start
(go look to see if it works at localhost:3000/(table name))
heroku create
go to Heroku and your new db > configure-add-ons > search postgres > big purple button > show config vars > copy the postgres url and put it in your .env file  

git add .
git commit -m “initial commit”
git push heroku master

knex migrate:latest --env production
knex seed:run --env production

