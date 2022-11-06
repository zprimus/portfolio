require("dotenv").config();

module.exports = {
  env: {
    MAPBOX_KEY: process.env.MAPBOX_KEY,
    FB_KEY: process.env.FB_KEY,
    TWITTER_KEY: process.env.TWITTER_KEY,
  }
}