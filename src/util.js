const config = require("./config");

function logDecorator(emoji, method = "info") {
  return function logMethod(message) {
    const datetime = new Date().toLocaleString().replace(",", "");
    console[method](`${datetime} - ${emoji} ${message}.`);
  };
}

module.exports = {
  log: {
    cronjob: logDecorator("⏰ Cronjob"),
    database: logDecorator("🔢 Database"),
    evironment: logDecorator("🌐 Environment"),
    job: logDecorator("👷 Job"),
    task: logDecorator("📝 Task"),
  },
};

module.exports.log.evironment(`in ${config.nodeEnv}`);
