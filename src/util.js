const config = require("./config");

function log(emoji, message, method = "info") {
  const datetime = new Date().toLocaleString().replace(",", "");
  console[method](`[${config.nodeEnv2} @ ${datetime}] ${emoji} ${message}.`);
}

module.exports = { log };
