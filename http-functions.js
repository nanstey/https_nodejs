var https = require('https');


module.exports = function getHTML (options, callback) {
    /* Your code here */
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    var buffer = "";
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      buffer += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(buffer);
    });

  });

};
