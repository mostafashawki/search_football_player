let dbConfig = {};

dbConfig.mongoURI = {
  //development db
  development:
    "mongodb://web-api:web-api-2019@ds351827.mlab.com:51827/football-player-archive-db",
  //testing db
  test:
    "mongodb://web-api:web-api-2019@ds351807.mlab.com:51807/football-player-archive-db-test"
};

module.exports = dbConfig;
