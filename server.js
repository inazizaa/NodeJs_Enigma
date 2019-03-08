var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors());

var batchRoute = require('./router/batchroute');
batchRoute(app);
var traineeRoute = require('./router/traineeroute');
traineeRoute(app);
var periodRoute = require('./router/periodroute');
periodRoute(app);
var studyperRoute = require('./router/studyperroute');
studyperRoute(app);
var studymatRoute = require('./router/studymatroute');
studymatRoute(app);
var materialRoute = require('./router/materialroute');
materialRoute(app);
var trainerRoute = require('./router/trainerroute');
trainerRoute(app);
var scoreRoute = require('./router/scoreroute');
scoreRoute(app);

app.listen(port);
console.log('Node JS Inas RESTful API server on: ' + port);