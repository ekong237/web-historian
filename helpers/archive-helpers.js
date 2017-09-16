var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  //console.log('in archive readListOfUrls', paths.archivedSites);
  fs.readFile(exports.paths.list, 'utf8',function(error, data){
      //console.log('reading inside archive sites');
      if (error){
        throw error;
      }

      var mydata = (data.split('\n'));
      console.log(mydata);
      callback(mydata);
  });

};

exports.isUrlInList = function(url, callback) {

  // return true if array includes url
  console.log('inside isurl');
  fs.readFile(exports.paths.list, 'utf8', function(error, data){
      //console.log('reading inside archive sites');
      if (error){
        throw error;
      }
      var result = callback(data.includes(url));
      //console.log( result);

  });

};

exports.addUrlToList = function(url, callback) {
  fs.writeFile(exports.paths.list, url, function(error){
    if (error){
      throw error;
    }
    callback();
  });

};

exports.isUrlArchived = function(url, callback) {
  console.log('inside archived isurl');
  fs.readFile(exports.paths.archivedSites, 'utf8', function(error, data){
      console.log('reading inside archive sites');
      // if (error){
      //   console.log('error');
      //   throw error;
      // }
      console.log('before');
      var result = callback(data.includes(url), error);


  });


};

exports.downloadUrls = function(urls) {

};
