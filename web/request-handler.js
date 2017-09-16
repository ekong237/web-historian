var path = require('path');
var archive = require('../helpers/archive-helpers');
var http = require('http');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, response) {

  if (req.method === 'GET' && req.url === '/'){

    fs.readFile('./web/public/index.html', 'utf8',function(err, data){
      if (err){
        throw err;
      }

      response.writeHeader(200, {"Content-type": "text/html"});
      //console.log('data:', data);
      //response.write(data)
      response.end(data);

    });
    //console.log(archive.readListOfUrls());
  } else if (req.method === 'POST' ){
    var url;
    var arr = [];
    req.on('data', function(chunks){
      arr.push(chunks)
      //console.log('arr',arr);

    });
    req.on('end', function(){
      arr=arr.join('').split('=');
      url = arr[1];
      console.log('URL:',arr[1]);
      fs.appendFile('./web/archives/sites.txt', url+'\n', {'flags': 'a+'});
    });

  }
  console.log(archive.paths.list);
  console.log(archive.paths.siteAssets+'/index.html');
  //res.end(archive.paths.list);


};
