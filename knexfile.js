require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///memory1'
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
