const config = require("./config");

function makeLog(emoji, method = "info") {
  return function log(message) {
    const datetime = new Date().toLocaleString().replace(",", "");
    console[method](`${datetime} - ${emoji} ${message}.`);
  };
}

module.exports = {
  log: {
    check: makeLog("✅"),
    db: makeLog("🔢"),
    env: makeLog("🌐"),
    err: makeLog("🆘", "error"),
    ok: makeLog("🆗"),
    start: makeLog("▶️ "),
  },
};

module.exports.log.env(`In ${config.nodeEnv} environment`);
