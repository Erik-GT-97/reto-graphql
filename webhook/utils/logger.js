const winston = require('winston')

module.exports = winston.createLogger({
    level: 'debug',
    format : winston.combine(winston.format.colorize(),winston.format.simple()),
    transports: [
        new winston.transports.Console({
            handleExceptions: true
        }),
        new winston.transports.File({
            level: 'info',
            format: winston.format.simple(),
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/app.log`,
        })
    ],
})