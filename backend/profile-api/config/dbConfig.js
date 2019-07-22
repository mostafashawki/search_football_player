let dbConfig = {};

dbConfig.mongoURI = {
  //development db
  development:
    "mongodb://web-api:web-api-2019@ds351827.mlab.com:51827/football-player-profile-db",
  //testing db
  test:
    "mongodb://web-api:web-api-2019@ds151817.mlab.com:51817/football-player-profile-db-test"
};

module.exports = dbConfig;
