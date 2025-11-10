const parse = require('pg-connection-string').parse;

const connectionString = 'postgresql://postgres:d_*jYW/EHF6.2*d@db.yyqovztxkkxdztxjiyhk.supabase.co:5432/postgres;' 

const config = parse(connectionString);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false 
      },
    },
    debug: false,
  },
});