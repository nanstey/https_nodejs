var https = require('https');

/////// STEP 1 ///////

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log(data + '\n');
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('\nResponse stream complete.');
    });

  });
}

// getAndPrintHTMLChunks();

/////// STEP 2 ///////

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

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
      console.log(buffer);
      console.log('\nResponse stream complete.');
    });

  });


}

// getAndPrintHTML();

/////// STEP 3 ///////

function getAndPrintHTML (options) {

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
      console.log(buffer);
      console.log('\nResponse stream complete.');
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

// getAndPrintHTML( requestOptions );

/////// STEP 4 ///////

function getHTML (options, callback) {

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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// getHTML(requestOptions, printHTML);

/////// STEP 5 ///////

var getHTMLModule = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTMLModule(requestOptions, printHTML);
