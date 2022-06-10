require('dotenv').config()

module.exports = {
    type: process.env.DATABASE_TYPE,
    url: process.env.TYPEORM_URI,
    logging: false,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    migrations: [
        'src/database/migrations/**/*'
    ],
    entities: [
        'src/database/entities/**/*'
    ],
    cli: {
        entitiesDir: 'src/database/entities',
        migrationsDir: 'src/database/migrations'
    }
}