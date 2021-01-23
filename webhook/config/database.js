const Sequelize = require('sequelize')
const logger = require('../utils/logger')

const database_url = process.env.DATABASE_URL || "postgres://postgres:postgres@127.0.0.1:5432/postgres"

let sequelize = new Sequelize(database_url,{
    pool:{
        max:5,
        min:0,
        acquire : 3000,
        idle: 10000
    }
})

sequelize.authenticate().then(errors => logger.info("Database connection: "+ (errors ? "Unable to connect to the database ("+JSON.stringify(errors)+")": "Connection has been established succesfully.")))

module.exports = sequelize