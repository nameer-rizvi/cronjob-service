// Decorator for tasks, jobs and cronjobs.
const util = require("./util");
// const database = require("../database");

class Decorator {
  constructor(name, ...methods) {
    this.log = util.log[name.toLowerCase()];
    this.method = methods.reduce((r, m) => ({ ...r, [m.name]: m }), {});
  }

  async call(...methodNames) {
    for (let methodName of methodNames) {
      try {
        this.log(`start ("${methodName}")`);
        await this.method[methodName]();
        this.log(`complete ("${methodName}")`);
      } catch (error) {
        this.log(`error ("${methodName}"): ${error}`);
        // await database.error.add(error);
      } finally {
        this.log(`finish ("${methodName}")`);
      }
    }
  }

  async callAll() {
    await this.call(...Object.keys(this.method));
  }
}

module.exports = Decorator;
