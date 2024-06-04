const config = require("./config");

function logDecorator(emoji, method = "info") {
  return function logMethod(message) {
    const datetime = new Date().toLocaleString().replace(",", "");
    console[method](`${datetime} - ${emoji} ${message}.`);
  };
}

module.exports = {
  log: {
    check: logDecorator("✅"),
    db: logDecorator("🔢"),
    env: logDecorator("🌐"),
    err: logDecorator("🆘", "error"),
    ok: logDecorator("🆗"),
    start: logDecorator("▶️ "),
  },
};

module.exports.log.env(`In ${config.nodeEnv} environment`);
