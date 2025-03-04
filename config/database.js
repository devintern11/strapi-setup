module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', ''),
      port: env.int('DATABASE_PORT', 5432), // Changed to match PUBLIC_URL port
      database: env('DATABASE_NAME', ''),
      user: env('DATABASE_USERNAME', ''),
      password: env('DATABASE_PASSWORD', ''),
      ssl: {
        rejectUnauthorized: false
      },
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
  },
});