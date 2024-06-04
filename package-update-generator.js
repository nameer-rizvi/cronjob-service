const packageJSON = require("./package.json");

const configs = [
  {
    action: "remove",
    keys: ["devDependencies", "dependencies"],
  },
  {
    action: "add",
    keys: ["devDependencies"],
    flag: "--dev",
  },
  {
    action: "add",
    keys: ["dependencies"],
  },
];

function mapper(config) {
  const packageNames = [];
  for (let key of config.keys)
    if (packageJSON[key])
      for (let packageName of Object.keys(packageJSON[key]))
        if (packageJSON[key][packageName].startsWith("^"))
          packageNames.push(packageName);
  if (packageNames.length) {
    if (config.flag) packageNames.push(config.flag);
    return `yarn ${config.action} ${packageNames.join(" ")}`;
  }
}

const commands = configs.map(mapper).filter(Boolean).join(" && ");

console.log(`\n${commands}\n`);
