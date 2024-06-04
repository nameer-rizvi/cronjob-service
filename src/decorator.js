// Decorator for tasks, jobs and cronjobs.
const util = require("./util");

class Decorator {
  constructor(name, ...methods) {
    this.name = name;
    this.method = {};
    for (let method of methods) this.method[method.name] = method;
  }

  async call(...methodNames) {
    for (let methodName of methodNames) {
      if (!this.method[methodName]) {
        util.log.err(`${this.name} undefined ("${methodName}")`);
        continue;
      }
      try {
        util.log.start(`${this.name} start ("${methodName}")`);
        await this.method[methodName]();
        util.log.check(`${this.name} complete ("${methodName}")`);
      } catch (error) {
        const err = `${error} at ${error.stack.split(" at ")[1].trim()}`;
        util.log.err(`${this.name} error ("${methodName}"): ${err}`);
      } finally {
        util.log.ok(`${this.name} finish ("${methodName}")`);
      }
    }
  }

  async callAll() {
    await this.call(...Object.keys(this.method));
  }
}

module.exports = Decorator;
