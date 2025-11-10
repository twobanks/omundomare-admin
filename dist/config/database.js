/* const parse = require('pg-connection-string').parse; */
/* const connectionString = 'postgresql://postgres:d_*jYW/EHF6.2*d@db.yyqovztxkkxdztxjiyhk.supabase.co:5432/postgres'

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
}); */
module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'db.yyqovztxkkxdztxjiyhk.supabase.co'), // Host do Supabase
            port: env.int('DATABASE_PORT', 5432), // Porta
            database: env('DATABASE_NAME', 'postgres'), // Nome do DB
            user: env('DATABASE_USER', 'postgres'), // Usuário
            password: env('DATABASE_PASSWORD'), // Sua senha (do .env)
            ssl: {
                rejectUnauthorized: false // Necessário para Supabase/Render
            },
        },
        debug: false,
    },
});
