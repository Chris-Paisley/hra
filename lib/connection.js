var mongoose = require('mongoose');
var dbUrl = 'mongodb://heroku_fgr1b7ql:v3rdhiftbvfanh9h4lqtcjsv3o@ds135876.mlab.com:35876/heroku_fgr1b7ql';

mongoose.connect(dbUrl);

//Close connection on Control+c
process.on('SIGINT', function () {
  mongoose.connection.close(function(){
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

require('../models/employee');
require('../models/team');
