module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/dev.db3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './seeds/prod'
        }
    }

};
