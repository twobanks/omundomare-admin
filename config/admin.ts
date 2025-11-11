module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  sessions: {
    maxRefreshTokenLifespan: '90d', // 90 dias
    maxSessionLifespan: '7d', // 7 dias
  },
});