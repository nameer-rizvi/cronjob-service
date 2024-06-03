// Database is for demo purposes only.
const util = require("./util");

class Database {
  constructor() {
    this.count = 0;
  }

  add() {
    this.count++;
    util.log("🗄️ ", `Database add ("${this.count}")`);
  }

  subtract() {
    this.count--;
    util.log("🗄️ ", `Database subtract ("${this.count}")`);
  }

  reset() {
    this.count = 0;
    util.log("🗄️ ", `Database reset ("${this.count}")`);
  }
}

module.exports = new Database();
