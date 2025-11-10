// config/database.js (ou config/env/production/database.js)
const parse = require('pg-connection-string').parse;

// Cole a URL de conexão do Supabase aqui
const connectionString = 'https://yyqovztxkkxdztxjiyhk.supabase.co'; 

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
        rejectUnauthorized: false // Necessário para conexões remotas
      },
    },
    debug: false,
  },
});