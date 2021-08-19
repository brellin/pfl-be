require('dotenv').config();

module.exports = {

    development: {
        client: 'pg',
        connection: process.env.DB_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './seeds'
        },
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }

};
