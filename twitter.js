const Twit = require("twit");

require("dotenv").config();

const tweet = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000
});

const stream = tweet.stream("statuses/filter", { track: ["NFL"] });

stream.on("tweet", function(tweet) {
 console.log(tweet.text)
});
