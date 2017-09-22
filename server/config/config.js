//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://randleignacio:bball123@ds123534.mlab.com:23534/a3', //place the URI of your mongo database here.
  },
  googleMaps: {
    key: 'AIzaSyD4IZUXw2HBeWsliLQuv4ffidndfKYc3ow'
  },
  port: 8080
};
