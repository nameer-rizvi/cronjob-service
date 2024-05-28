// Log state of functions.
const config = require("./config");

function withLogger(name, object) {
  const env = (config.nodeEnv || "").toUpperCase();

  return Object.keys(object).reduce((reducer, key) => {
    reducer[key] = function withLogging() {
      try {
        console.log(`[${env} @ ${timestamp()}] ${name} started ("${key}").`);

        if (object[key].start) {
          object[key].start();
        } else {
          object[key]();

          console.log(`[${env} @ ${timestamp()}] ${name} finished ("${key}").`);
        }
      } catch (error) {
        console.log(`[${env} @ ${timestamp()}] ${name} ${error} ("${key}").`);
      }
    };

    return reducer;
  }, {});
}

function timestamp() {
  return new Date().toLocaleString();
}

module.exports = withLogger;
