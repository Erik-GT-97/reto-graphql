//init project 
var express = require('express')
var bodyParser = require('body-parser')
var app = express()


//Add headers
app.use(function (req, res,next ){
    //Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','*');

    //Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods','GET, HEAD, OPTIONS, POST, PUT, DELETE');
    
    //Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Authorization, Accept');

    //Set to true if you need the website to include cookis in the requests sent
    //to API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentiales',true);

    //Pass to next layer of middleware
    next()
})
app.use(bodyParser.json({
    limit:'20mb'
}))

var port = process.env.PORT || 3001

app.get('/', (request, response) => {
    response.send('Webhooks are running')
})

//listen for request
app.listen(port, function (){
    console.log('Your app is listening in port ' + port)
})
