var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// SSL
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('./key.pem', 'utf8');
var certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

// Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

require('./app_api/models/db');
const loginRouter = require('./app_server/routes/login');
const registerRouter = require('./app_server/routes/register');

const index = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');

// SSL Config
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(8000);
httpsServer.listen(433)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_public')));


// Passport Config
var User = require('./app_server/models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', index);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/api', apiRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
