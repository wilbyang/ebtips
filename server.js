
/**
* MODULE DEPENDENCIES
* -------------------------------------------------------------------------------------------------
* include any modules you will use through out the file
**/

var express = require('express')
  , http = require('http')
  , nconf = require('nconf')
  , path = require('path')
  , everyauth = require('everyauth')
  , Recaptcha = require('recaptcha').Recaptcha;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kongfu');
var ObjectId = mongoose.Types.ObjectId;
var Schema = mongoose.Schema;
var HealthTip = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tag: [String],
    added: Date,
    modified: Date,
    author: Schema.ObjectId,
});
var User = new Schema({
    name: String
  , email: { type: String, required: true, index: { unique: true, sparse: true } }
  , alive: Boolean
});
var HTipFeedback = new Schema({
    type: { type: String, required: true, enum: ['following', 'followedNegative', 'soundsGood', 'followedPositive']},
    comment: { type: String},
    added: { type: Date, default: Date.now },
    author: Schema.ObjectId,
    healthTip: Schema.ObjectId
});

HealthTip.path("added").default(function(){
    return new Date();
}).set(function(v){
    return v == 'now' ? new Date() : v;
});

var HealthTipModel = mongoose.model('HealthTip', HealthTip);
var HTipFeedbackModel = mongoose.model('HTipFeedback', HTipFeedback);
var UserModel = mongoose.model('User', User);
/**
* CONFIGURATION
* -------------------------------------------------------------------------------------------------
* load configuration settings from ENV, then settings.json.  Contains keys for OAuth logins. See 
* settings.example.json.  
**/
nconf.env().file({ file: 'settings.json' });

var app = express();
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('azure zomg'));
    app.use(express.session());
    app.use(everyauth.middleware(app));
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/public' }));
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});
app.post('/api/products', function (req, res) {
  var healthTip = new HealthTipModel({
    title: req.body.title,
    description: req.body.description
  });
  healthTip.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(healthTip);
});

app.get('/api/healthtips', function (req, res) {
    return HealthTipModel.find(function (error, healthTips) {
        if (!error) {
            return res.send(healthTips);
        }
    });
});

app.get('/api/healthtips/:htip', function (req, res) {
    return HealthTipModel.find({"_id" : new ObjectId(req.params.htip)}, function (error, healthTip) {
        if (!error) {
            return res.send(healthTip);
        }
    });
});
app.get('/api/:htip/feedback', function (req, res) {
    return HealthTipModel.find({"_id" : new ObjectId(req.params.htip)}, function(error, healthTip) {
        if (!error) {
            return HTipFeedbackModel.find({"healthTip": healthTip._id}, function(error, hFeedback) {
                if (!error) {
                    return res.send(hFeedback);
                }
            });
        }
    });
});
app.post('/api/:htip/feedback', function(req, res) {
    return HealthTipModel.find({"_id" : new ObjectId(req.params.htip)}, function(error, healthTip) {
        if (!error) {
            var hTipFeedback = new HTipFeedbackModel({healthTip: healthTip._id, type: req.body.type, comment: req.body.comment});
            hTipFeedback.save();
            return res.send(hTipFeedback);
        }
    });
    /*
    console.log(req.body);
    var healthTip = HealthTipModel.find({"_id" : new ObjectId(req.params.htip)});
    if (healthTip._id) {
        var hTipFeedback = new HTipFeedbackModel({
            type: req.body.type,
            comment: req.body.comment,
            healthTip: healthTip._id
        });
        hTipFeedback.save();
        return res.send(hTipFeedback);
    }
    */
});
/**
* ROUTING
* -------------------------------------------------------------------------------------------------
* include a route file for each major area of functionality in the site
**/
require('./routes/home')(app);
require('./routes/account')(app);


var server = http.createServer(app);


server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});