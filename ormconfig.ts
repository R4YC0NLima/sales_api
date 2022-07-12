import 'dotenv/config';
export default {
  "type": "postgres",
  "port": process.env.PGPORT,
  "host": process.env.PGHOST,
  "username": process.env.PGUSER,
  "password": process.env.PGPASSWORD,
  "database": process.env.PGDATABASE,
  "migrations": [ "./src/shared/infra/typeorm/migrations/*.ts" ],
  "entities": [ "./src/modules/**/entities/*.ts" ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  },
  "synchronize": true,
  "logging": false,
}
