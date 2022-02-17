module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || { user: 'danglu', database: 'car_ports'},
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
}