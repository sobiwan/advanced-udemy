var express = require('express'),
    app = express(),
    cors = require('cors'),
    morgan = require('morgan'),
    port = 4000,
    bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// app.use(function(req, res, next){
//     let err = new Error ("Not Found");
//     err.status = 404;
//     next (err);
// });

// app.use(function(err, req, res, next){
//     res.status(err.status || 500);
//     res.send({
//         message: err.message,
//         error: err
//     })
// });

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes)

app.listen(port, function(){
    console.log("app is running on PORT " + port);
});