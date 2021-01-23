const mainRouter = require('../main')

module.exports = function registerRouters(app){
    app.use('/',mainRouter)
}